const express = require(`express`);
const axios = require('axios')
const router = express.Router();
const sequelize = require('../models/db')
const GetTop10 = require("../models/terms/query")


const Termos = require('../models/terms/Terms')

router.get('/profile/:name', async (req, res) => {
    const { name } = req.params;

    await axios.get(`https://api.github.com/users/${name}`)
    .then(function(resposta){
        res.json(resposta.data);
    }).catch((err) => {
        res.json({msg: "Perfil nao encontrado!!!" + err})
    })
});


router.post("/search-terms", async (req, res) => {

    await Termos.create(req.body)
        .then(() => {
            return res.json({
                error: false,
                mensagem: "Termo incluído"
            })
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                mensagem: error
            })
        })
})

router.get('/top-terms', async (req, res) => {

    await sequelize.query(GetTop10, {type: sequelize.QueryTypes.SELECT})
        .then((top) => {
            return res.json({
                error: false,
                mensagem: 'Lista top 10',
                top
            })
        }).catch((error) => {
            return res.status(400).json({
                error: true,
                mensagem: error
            })
        })

})

router.delete('/terms-all-delete', async (req, res) => {

      await sequelize.query("DELETE FROM terms WHERE id > 0")
      .then(() => {
          return res.json({
              error: false,
              mensagem: "lista deletada"
          })
      }).catch((error) => {
          return res.status(400).json({
              error: true,
              mensagem: error
          })
      })

})


module.exports = router;
