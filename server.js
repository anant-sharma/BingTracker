var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index2.html');
});

app.get('/app', function(req, res){
  res.sendFile(__dirname + '/app.html');
});

io.on('connection', function(socket){
  socket.on('new loc input', function(loc){
    io.emit('new loc', loc);
  });
});

http.listen(process.env.PORT, function(){
  console.log('Server Started');
});