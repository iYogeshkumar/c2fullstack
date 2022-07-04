const {Router} = require("express")
const NoteModel = require("../models/Note")
const noteRouter = Router();

noteRouter.get("/:userId/notes", async (req, res) => {
    const userId = req.params.userId
    const notes = await NoteModel.find({userId})
    res.send(notes)
})

noteRouter.post("/:userId/notes", async (req, res) => {
    const userId = req.params.userId
    let payload = {
        ...req.body,
        userId
    }
    const note = await new NoteModel(payload)
    note.save((err, success) => {
        if(err){
            return res.status(500).send({message : "something went wrong"})
        }
        return res.status(201).send(success)
    })
})

module.exports = noteRouter;
