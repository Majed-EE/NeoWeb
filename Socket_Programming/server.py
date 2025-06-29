import socket

host = socket.gethostbyname(socket.gethostname())
# print(host)
# here both host and HOST are same, but when you are running in virtual box, it will give ip4v address for that, so that's why you add manually.
HOST = '10.0.0.8'
#if you want to host locally on this computer, you can type localhost or 127.0.0.1

PORT = 9090
# it is important to have same port number in client and server
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((HOST, PORT))

server.listen(5)
#maxmimum for 5 failed connection, then will go to new connection

while True:
    communication_socket, address = server.accept()
    print(f"Connected to {address}")
    message = communication_socket.recv(1024).decode('utf-8')
    print(f"message from client is:{message}")
    communication_socket.send(f"Got your message! Thank you!".encode('utf-8'))
    communication_socket.close()
    print(f"connection with {address} ended!")
