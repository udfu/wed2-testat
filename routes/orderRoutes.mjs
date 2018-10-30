import express from 'express';
const router = express.Router();
import {ordersController} from '../controller/ordersController.mjs';
import {notesController} from "../controller/notesController.mjs";

router.get("/", notesController.showIndex.bind(notesController));
router.get("/create",notesController.createNote.bind(notesController));
router.get("/notes", notesController.testGetAll.bind(notesController));
router.post("/noteadded", notesController.addNoteAndShowIndex.bind(notesController));
router.post("/edit", notesController.showEditNote.bind(notesController));

/*
router.post("/orders", ordersController.createPizza.bind(ordersController));
router.get("/orders", ordersController.createOrder.bind(ordersController));
router.get("/orders/:id/", ordersController.showOrder.bind(ordersController));
router.delete("/orders/:id/", ordersController.deleteOrder.bind(ordersController));
*/

export const orderRoutes = router;