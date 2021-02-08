const { Router } = require('express');
const router = Router();
const quotes = 
[
  {
      author: "Anonimus",
      text: "Hay que fallar antes de que funcione"
  },
  {
    author: "Bob Marley",
    text: "El dinero no puede comprar la vida"
  },
  {
    author: "René Descartes",
    text: "Pienso, luego existo"
  },   
  {
    author: "Mahatma Gandhi",
    text: "Ojo por ojo y el mundo acabará ciego"
  }     
]

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/quotes', function(req, res) {
  res.render('quotes', {quotes:quotes});
});

router.post("/quotes", (req, res) => {
  const newquote = req.body
  quotes.push(newquote)
  console.log(quotes);
  
  //quotes.push(newquote)
  res.render("quotes", {quotes:quotes})  
});
module.exports = router;