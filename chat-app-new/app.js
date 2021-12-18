const express = require('express') // Libraries; React 
const bodyParser = require('body-parser') // APIs - Application Programming Interface
const socket = require('socket.io') // Frameworks; Angular

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('public')) // automagically
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index')
})

app.post('/room', function(req, res) {
    let roomName = req.body.roomname
    let userName = req.body.username
    res.redirect(`/room?username=${userName}&roomname=${roomName}`)
})

app.get('/room', (req, res) => {
    res.render('room')
})

const server = app.listen(3000, () => {
    console.log('Server started running...')
})

const io = socket(server)
let s = require('./utils/socket')
s.socket(io)

