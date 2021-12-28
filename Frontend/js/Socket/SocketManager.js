const socket = io();
        
socket.io('connection', (socket) => {
    console.log(socket.id);

    
});
socket.on('disconnection', (socket) => {
    console.log(socket.id);
});

function sendEmit(){
    socket.emit('alert', () => {

    });
}