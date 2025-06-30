# server.py (Fixed with python-socketio)

import cv2
import asyncio
import socketio
from aiortc import RTCPeerConnection, RTCSessionDescription, VideoStreamTrack, RTCIceCandidate
from av import VideoFrame
import fractions

sio = socketio.AsyncClient()
pc = RTCPeerConnection()

class WebcamStream(VideoStreamTrack):
    def __init__(self):
        super().__init__()
        self.cap = cv2.VideoCapture(0)
        self.frame_count = 0

    async def recv(self):
        self.frame_count += 1
        ret, frame = self.cap.read()
        if not ret:
            return None
        frame_rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        video_frame = VideoFrame.from_ndarray(frame_rgb, format="rgb24")
        video_frame.pts = self.frame_count
        video_frame.time_base = fractions.Fraction(1, 30)
        return video_frame

@sio.event
async def connect():
    print("Connected to signaling server")
    pc.addTrack(WebcamStream())

    offer = await pc.createOffer()
    await pc.setLocalDescription(offer)
    await sio.emit('sdp', {
        'type': 'offer',
        'sdp': pc.localDescription.sdp
    })

@sio.on('sdp')
async def on_sdp(data):
    if data['type'] == 'answer':
        print("Received SDP answer")
        await pc.setRemoteDescription(RTCSessionDescription(sdp=data['sdp'], type=data['type']))

@sio.on('ice')
async def on_ice(data):
    candidate = data['candidate']
    print("Received ICE")
    await pc.addIceCandidate(RTCIceCandidate(
    sdpMid=candidate.get("sdpMid"),
    sdpMLineIndex=candidate.get("sdpMLineIndex"),
    candidate=candidate.get("candidate")
))

@pc.on('icecandidate')
async def on_icecandidate(event):
    if event.candidate:
        await sio.emit('ice', {'candidate': event.candidate})

async def main():
    await sio.connect('http://10.0.0.4:5000')
    await sio.wait()

if __name__ == '__main__':
    asyncio.run(main())
