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

    async editNote(req,res){
        await noteBook.edit(req.query.id
            ,req.body.noteTitle,
            req.body.noteDescription,
            req.body.notePrio,
            req.body.noteFinishDate), await this.showIndex(req,res);
    }

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
        let currentUserID = req.query.id;
        console.log(currentUserID);
        //res.json(await noteBook.get(currentUserID));
        res.render("editNote", await noteBook.get(currentUserID));
    };

    /*
    async showOrder(req, res) {
        await res.render("showorder", await orderStore.get(req.params.id));
    };*/

}

export const notesController = new NoteController();