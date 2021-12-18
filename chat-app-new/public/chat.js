const message = document.getElementById('message')
const users = document.querySelector('.users')
const send = document.getElementById('send')
const roomMessage = document.querySelector('.room-message')
const output = document.getElementById('output')
const feedback = document.getElementById('feedback')

// Socket server url
const socket = io.connect('http://localhost:3000')

const queryString = window.location.search
const urlParams = new URLSearchParams(queryString)
const userName = urlParams.get('username')
const roomName = urlParams.get('roomname')

roomMessage.innerText = `Connect to the room ${roomName}`


socket.emit('joined-user', {
    userName: userName,
    roomName: roomName
})

send.addEventListener('click', () => {
    socket.emit('chat', {
        userName: userName,
        message: message.value,
        roomName: roomName
    })
    message.value = ''
})

message.addEventListener('keypress', () => {
    socket.emit('typing', {
        userName: userName,
        roomName: roomName
    })
})

socket.on('joined-user', (data) => {
    output.innerHTML = `<p>--> <strong><em> ${data.userName}</strong> has joined the Room</em></p>`
    feedback.innerText = ''
})

socket.on('typing', (user) => {
    feedback.innerHTML = `<p><em>${user} is typing...</em></p>`
})

socket.on('online-users', (data) => {
    users.innerHTML = ''
    data.forEach((user) => {
        users.innerHTML += `<p>${user}</p>`
    })
})

socket.on('chat', function(data) {
    output.innerHTML += `<p><strong>${data.userName}</strong>: ${data.message}</p>`
    feedback.innerHTML = ''
})








