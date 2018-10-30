import {noteBook} from "../services/noteStore.mjs";


export class NoteController {

    async showIndex(req, res) {
        await res.render("index" , await noteBook.all());
    };

    async addNoteAndShowIndex(req,res){
        await noteBook.add(req.body.noteTitle,
            req.body.noteDescription,
            req.body.notePrio,
            req.body.noteFinishDate,
            false), await this.showIndex(req,res);
    }

    addNote(req, res) {
        res.render("newNote");
    };

    async getNotes(req,res){
        await res.render("showorder", await noteBook.get(req.params.id));
    };

    async getNote(req,res){
        res.json(await noteBook.get(req.params.id));
    };

    async createNote(req,res){
        res.render("newNote");
    };

    async testGetAll(req,res){
        res.json(await noteBook.all());
    };

    async showEditNote(req,res){
        console.log(req.params.id);
        await res.render("editNote", noteBook.get(req.params.id));

    };


    /*
    async showOrder(req, res) {
        await res.render("showorder", await orderStore.get(req.params.id));
    };*/

}

export const notesController = new NoteController();