const express = require('express')
const MainController = require('../controllers/MainController')

const router = express.Router()

router.get('/', MainController.home)
router.get('/page/:page', MainController.home)
router.get('/anime/:id', MainController.anime)
router.get('/anime/eps/:link', MainController.readanime)
router.get('/search/:title', MainController.search)
router.get('/search/:title/:page', MainController.searchByPage)
router.get('/season/', MainController.season)
router.get('/date-release/', MainController.date)
router.get('/list-anime/', MainController.listWithoutPage)
router.get('/list-anime/:page', MainController.listWithPage)
router.get('/genre/:genre', MainController.searchByGenre)
router.get('/tag/:tag', MainController.tag)
router.get('/daftar-genre', MainController.daftarGenre)

module.exports = router
