const express = require('express');
const router = express.Router();
const {getmenu,addArticle,deleteArticle,updateArticle} = require('../controller/menuController');

router.get('/',getmenu);
router.post('/add',addArticle);
router.delete('/:id',deleteArticle);
router.put('/:id',updateArticle);


module.exports = router;