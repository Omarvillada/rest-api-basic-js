
const { Router, request } = require('express');
const router = Router();
const books = require('./example.json');
const _ = require('underscore');
//console.log(books);

router.get('/', (req, res) => {
    res.json(books);
});

router.post('/', (req,res) =>{
    const {title, isbn} = req.body;
    const id = books.length + 1;
    const newBook = {...req.body, id};
    if(id && title && isbn){
        console.log(newBook);
        books.push(newBook);
        res.send('saved')
    }else{
        res.send('Wrong Request');
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, isbn} = req.body;
    if (id && title && isbn) {
        _.each(books, (book, i) => {
            if (book.id === id) {
                book.title = title;
                book.isbn = isbn;
            }
        });
        res.json(books);
    } else {
        res.status(500).json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id} = req.params;
    if(id){
        _.each(books, (book, i) => {
            if(id == book.id){
                books.splice(i, 1);
            }
        });
        res.json(books);
    }

});

module.exports = router; 