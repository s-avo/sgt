// Store all of the connected users
let users = {}

function getUsers(arr) {
    let onlineUsers = []
    arr.forEach(onlineUser => {
        onlineUsers.push(Object.values(onlineUser)[0])
    })
    return onlineUsers
}

module.exports = { users, getUsers}