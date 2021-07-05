
const { Router } = require('express');
const router = Router();

router.get('/autores', (req, res) => {
    const data = {
        "id_author": 1,
        "name":"Dario Lemos",
        "coutry": "Colombia"
    };
    res.json(data);
});

module.exports = router; 