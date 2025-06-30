# === app.py (Flask Signaling Server + Viewer) ===

from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route('/')
def index():
    return render_template('index.html')

# Signaling endpoint
@socketio.on('sdp')
def sdp(data):
    print("Relaying SDP", data['type'])
    emit('sdp', data, broadcast=True, include_self=False)

@socketio.on('ice')
def ice(data):
    print("Relaying ICE")
    emit('ice', data, broadcast=True, include_self=False)

if __name__ == '__main__':
    socketio.run(app, host='10.0.0.4', port=5000, debug=True)
