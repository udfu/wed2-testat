import express from 'express';
const router = express.Router();

import {notesController} from "../controller/notesController.mjs";

router.get("/", notesController.showIndex.bind(notesController));
router.get("/create",notesController.createNote.bind(notesController));
router.get("/notes", notesController.testGetAll.bind(notesController));
router.post("/noteadded", notesController.addNoteAndShowIndex.bind(notesController));
router.post("/edit", notesController.showEditNote.bind(notesController));
router.post("/edited", notesController.editNote.bind(notesController));


export const orderRoutes = router;