const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req,res) => {
    Item.find()
        .sort({ date: -1 })
        .then(Items => res.json(Items))
        .catch(err => res.json(err))
});

router.post('/', (req,res) => {
    const newItem = new Item({
        name: req.body.name
    })
    newItem.save()
        .then(item => res.json(item))
        .catch((err) => res.json(err))
})

router.delete('/:id', (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(item => res.json({success: true}))
        .catch(err => res.status(400).json(err))
})

module.exports = router;