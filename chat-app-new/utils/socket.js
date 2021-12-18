const {users, getUsers} = require('./getUsers')

function socket(io) {
    io.on('connection', (socket) => {
        
        socket.on('joined-user', (data) => {
            let user = {}
            user[socket.id] = data.userName
            if (users[data.roomName]) {
                users[data.roomName].push(user)
            } else {
                users[data.roomName] = [user]
            }

            socket.join(data.roomName)
            io.to(data.roomName).emit('joined-user', {userName: data.userName})
            io.to(data.roomName).emit('online-users', getUsers(users[data.roomName]))
        })

        socket.on('chat', (data) => {
            io.to(data.roomName).emit('chat', {userName: data.userName, message: data.message})
        })

        socket.on('typing', (data) => {
            socket.broadcast.to(data.roomName).emit('typing', data.userName)
        })

        socket.on('disconnecting', () => {

        })
    })
}

module.exports = { socket }