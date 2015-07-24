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
