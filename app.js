var express = require('express');
var app = express();
var path = require('path');
app.set('views', path.join(__dirname,'views'));
app.engine('html', require('hogan-express'));
app.set('view engine','html');
app.use(express.static(path.join(__dirname, 'public')));
// app.route('/').get(function(req, res, next) {
//   // res.send('<h1>Hey Bro! </h1>');
//   res.render('index', {title:'Welcome to ChatCAT'})
// })

require('./routes/routes.js') (express, app);
app.listen(3000, function(){
  console.log("Chat App running on port 3000");
})
