import express from 'express';
const { Router } = express;
const router = Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index', { title: 'Express with babel' });
  let iconSet = ["⭐", "🤖", "🍉"];
  let icon = iconSet[Math.floor(Math.random() * 3)]
  res.render('index', { title: 'DWPCII-2023A', icon });
});

router.get('/author', (req, res) => {
  let author = {
    "name": "Mirna",
    "lastname": "Sanchez",
    "twitter": "@Mirna",
    "job": "ITGAM"
  };
  //seding the view-model to be rendered by a View
  res.render("author", author)

});

export default router;
