var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: (new Date()).toLocaleDateString('en-US'),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: (new Date()).toLocaleDateString('en-US'),
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Message Board',
    messages: messages
  });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'New Message' });
});

router.post('/new', function(req, res, next) {
  if (!req.body.message || !req.body.user) {
    console.log("Entries must have a message and user");
    res.redirect('/new', {
      user: req.body.user,
      message: req.body.message,
    });
    return;
  }

  const message = {
    text: req.body.message,
    user: req.body.user,
    added: (new Date()).toLocaleDateString('en-US'),
  };
  messages.push(message);
  res.redirect('/');
});



module.exports = router;
