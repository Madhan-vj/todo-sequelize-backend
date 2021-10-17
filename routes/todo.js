const express = require('express');
const router = express.Router();
const db = require('../models');

// router.get('/', (req, res) => {
//  res.send('All TODO List!')
// })
router.get('/', async (req, res) => {
 await db.Todo.findAll().then(todos => {
  res.send(todos);
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
 await db.Todo.create({
  name: req.body.name
 }).then(result => {
  res.send(result);
 }).catch(err => {
  res.status(404).json({
   message: err
  })
 })
})

router.put('/:id', async(req,res) => {
 await db.Todo.update(
  { name: req.body.name},
  {
  where: {
   id: req.params.id
  }
 }).then(result => {
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
 await db.Todo.destroy({
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

module.exports = router;