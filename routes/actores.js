const {Router} = require('express');
const {cnn_mysql} = require('./../config/databases');
const router = Router();

router.get('/actor', (req, res) => {
    cnn_mysql.query(`SELECT * FROM actores`, (error, resulset, fields) => {
        if (error) {
            return res.status(500).send('se presento un error en la base de datos.')
        } else {
            return res.json(resulset);
        }
    })
})

router.get('/actor/:id', (req, res) => {})

router.post('/actor', (req, res) => {})

router.put('/actor/:id', (req, res) => {})

router.patch('/actor/:id', (req, res) => {})

router.delete('/actor/:id', (req, res) => {})

module.exports = router