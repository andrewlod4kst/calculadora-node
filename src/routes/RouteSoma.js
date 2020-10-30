const {Router} = require("express")
const {ControllerSoma} = require("./../controllers")

const router = Router()

router.post("/", ControllerSoma.soma())

module.exports = router
