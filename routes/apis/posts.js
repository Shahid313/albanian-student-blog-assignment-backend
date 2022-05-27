const router = require('express').Router();
const Posts = require('../../models/Posts')
const mongoose = require('mongoose');

router.get('/get_all_posts', (req, res) => {
    Posts.find().then(posts => {

            return res.send({
                "posts":posts
            })

        
    })
})


router.post('/add_new_post',(req, res) => {
    let content = req.body.content
        try{
            const new_post = new Posts({
                "content":content
            })

            new_post.save()
            return res.send({
                "msg":"Post added successfully"
            })
        }catch(err){
            res.status(422).send(err.message)
        }
    })
   
    
    router.get('/delete_post',(req,res)=>{
        const post_id = req.query.post_id
        Posts.findByIdAndDelete(post_id, () => {
                return res.send({
                    "msg":"Deleted"
                })
        })
        
    })


module.exports = router