const express = require('express');
const router = express.Router();
const db = require('../models');

// router.get('/', (req, res) => {
//  res.send('A task List in todo!')
// })
router.get('/', async (req, res) => {
 await db.List.findAll().then(Lists => {
  res.send(Lists);
 }).catch(err => {
  res.status(404).json({
   message: err
  })
 })
})

router.get('/:id', async (req, res) => {
 await db.List.findAll(
  {
   where: {
    todoId: req.params.id
   }
  }
 ).then(Lists => {
  res.send(Lists);
 }).catch(err => {
  res.status(404).json({
   message: err
  })
 })
})

router.get('/edit/:id', async (req, res) => {
 await db.List.findOne(
  {
   where: {
    id: req.params.id
   }
  }
 ).then(Lists => {
  res.send(Lists);
 }).catch(err => {
  res.status(404).json({
   message: err
  })
 })
})

router.post('/', async (req, res) => {
 await db.List.create({
  name: req.body.name,
  todoId: req.body.todoId,
  iscompleted: req.body.iscompleted
 }).then(result => {
  res.send(result);
 }).catch(err => {
  res.status(404).json({
   message: err
  })
 })
})

router.put('/:id', async(req,res) => {
 await db.List.update(
  { name: req.body.name,
   todoId: req.body.todoId,
   iscompleted: req.body.iscompleted
  },
  {
  where: {
   id: req.params.id
  }
 }).then(result => {
  console.log(result,"<<<===");
  res.status(200).json({
   message: "updated"
  }).catch(err => {
   res.status(404).json({
    message: err
   })
  })
 })
})

router.delete('/:id', async (req, res) => {
 await db.List.destroy({
  where: {
   id: req.params.id
  }
 }).then(result => {
  res.status(500).json({
   message: "Deleted"
  }).catch(err => {
   res.status(404).json({
    message: err
   })
  })
 })
})

router.delete('/deleteTodo/:id', async (req, res) => {
 await db.List.destroy({
  where: {
   todoId: req.params.id
  }
 }).then(result => {
  res.status(500).json({
   message: "Deleted"
  }).catch(err => {
   res.status(404).json({
    message: err
   })
  })
 })
})

module.exports = router;
