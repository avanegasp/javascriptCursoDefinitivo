
  var express = require('express');

  var app = express();

  app.get('/', function(req, res){
    res.send('Curso definitivo javascript, Unicataluña')
  })

  app.listen(3000, function(err){
    if(err) return console.log('hubo un error'),
    process.exit(1);

    console.log('Unicataluña escuchando en el puerto 3000')
  })
