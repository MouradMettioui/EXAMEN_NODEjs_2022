let express = require('express');

let router = express.Router();


let articleController = require('./controllers/articleController');

//list des routes vers les contrôlleurs

router.get('/', articleController.articleList);

router.get('/add', articleController.articleAdd);

router.post('/article/add', articleController.articleNew);

router.get('/article/delete/:index', articleController.articledelete);

router.get('/achete/:index', articleController.articleachete);

module.exports = router;