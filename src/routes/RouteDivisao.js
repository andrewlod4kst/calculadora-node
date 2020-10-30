const {Router} = require("express")
const {ControllerDivisao} = require("./../controllers")

const router = Router()

router.post("/", ControllerDivisao.divisao())

module.exports = router
