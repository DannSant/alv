const express = require('express');
const _ = require('underscore');
const app = express();
const Score = require('../models/score')

//=======================
// PETICIONES GET
//=======================
app.get('/score', (req, res) => {

    let limit = req.query.limit || 10;

    Score.find()
        .limit(limit)
        .sort({ score: -1 })
        .exec((error, highScores) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    errorCode: 500,
                    error
                });
            }

            res.json({
                ok: true,
                records: 1,
                data: highScores
            });
        })
})

// //=======================
// // PETICIONES POST
// //=======================
app.post('/score', (req, res) => {
    let body = req.body;

    let score = new Score({
        name: body.name,
        score: body.score,

    });

    score.save((error, scoreDB) => {
        if (error) {
            return res.status(500).json({
                ok: false,
                errorCode: 500,
                error
            });
        }

        res.json({
            ok: true,
            data: scoreDB
        });

    });

});


// //=======================
// // PETICIONES PUT
// //=======================



//=======================
// Exportar rutas
//=======================
module.exports = app;