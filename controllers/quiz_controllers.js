exports.question = function (req, res){
  res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

exports.answer = function (req, res){
  var resp = req.query.respuesta;
  if (resp === 'Roma')
    res.render('quizes/answer', {respuesta: '¡Felicidades! Tu respuesta ' + resp + ' es correcta =)'});
  else
    res.render('quizes/answer', {respuesta: '¡Mala suerte! Tu respuesta ' + resp + ' es incorrecta =('});
};

exports.author = function (req, res){
  res.render('author',
    {
      nombre: 'Luis Antonio Beltrán Prieto',
      fotografia: 'https://pbs.twimg.com/profile_images/623445518388084736/B-5ErlHR_400x400.jpg',
      twitter: 'https://twitter.com/darkicebeam',
      video: 'http://www.youtube.com/embed/zkbwNAGh9J8'
    });
};
