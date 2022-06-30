const express = require('express')
const router = express.Router()
const Books = require('../models/books')

router.get('/all', async(req, res) => {
    const user =  await Users.find({})
    res.send(user)
})

router.post('/add', async(req, res) => {
   const data = await  Books.create(req.body)
   res.send(data)
})
router.put('/update/:id',async(req,res)=>{
  const _id =  req.params.id 

  const data = await Books.findByIdAndUpdate({ _id : req.params.id},req.body)
  res.send(data)
})
router.delete('/delete/:id',async (req,res)=>{
const user = await Books.deleteOne({_id : req.params.id})
res.send(user)
}
)

module.exports = router

