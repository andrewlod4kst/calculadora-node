const {Router} = require("express")
const {ControllerMultiplicacao} = require("./../controllers")

const router = Router()

router.post("/", ControllerMultiplicacao.multiplicacao())

module.exports = router
