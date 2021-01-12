
let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io').listen(server);

let stream = require('./ws/stream');
let path = require('path');

app.set('port', process.env.PORT || 5000);
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
});


io.of('/stream').on('connection', stream);
server.listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
    });