import express from "express"

const fields = ['title', 'url', 'description']

// `creatures` variable should return to you the creature objects that you need!
import creatures from '../creatures.js'

const magicalCreaturesRouter = new express.Router()

magicalCreaturesRouter.get('/', (req, res) => {
  res.render("creatures/index", {creatures: creatures})
})

//route for unicorn. setting up a dynamic route becuase we don't knwo what user is going to pass in
magicalCreaturesRouter.get("/:creatureName", (req, res) => {
  //access any name the user puts in
  const creatureName = req.params.creatureName
  const creatureData = creatures.find(creature => creatureName === creature.name)

  res.render("creatures/show", {creature: creatureData})
});


export default magicalCreaturesRouter