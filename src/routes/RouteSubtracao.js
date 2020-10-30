const {Router} = require("express")
const {ControllerSubtracao} = require("./../controllers")

const router = Router()

router.post("/", ControllerSubtracao.subtracao())

module.exports = router
