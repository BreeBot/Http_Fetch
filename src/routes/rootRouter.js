import express from "express"
import magicalCreaturesRouter from "./magicalCreaturesRouter.js"

const rootRouter = new express.Router()

rootRouter.get('/', (req, res) => {
  res.render('Part1')
})

rootRouter.use("/magical-creatures", magicalCreaturesRouter)

export default rootRouter