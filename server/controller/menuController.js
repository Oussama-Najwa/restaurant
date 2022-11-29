const Menu = require('../model/menuModel')
module.exports={
    getmenu:(req,res)=>{
    
        Menu.find()
        .then(articles=>res.status(200).json(articles))
        .catch(error=>{res.status(500).json(error)})
    },
    addArticle:(req,res)=>{
        const{
            title,
            image,
            catégorie
        }=req.body;
        console.log(req.body)
        const menu = new Menu({
            title:title,
            image:image,
            catégorie:catégorie
        });
       
        menu.save().then(article=>res.json(article))
    },
    deleteArticle:(req,res)=>{
        Menu.findById(req.params.id)
        .then(article=>article.remove().then(()=>res.json({success:true})))
        .catch(error=>{res.status(404).json({success:false})})
    },
    updateArticle: (req, res) => {
        Menu.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, article) => {
              if (err) return res.status(500).send(err);
              return res.send(article);
          }
        );
      }

}