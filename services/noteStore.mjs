import Datastore from 'nedb-promise'

export class Note {
    constructor(title,description,prio,finishedUntil,done){
        this.title = title;
        this.description = description;
        this.prio = prio;
        this.finishedUntil = finishedUntil;
        this.done = done;
    }
}

export class NoteBook {
    constructor (db){
        this.db = db || new Datastore({filename: './data/notes.db',autoload:true});
    }

    async add(title,description,prio,finishedUntil,done){
        let note = new Note(title,description,prio,finishedUntil,done);
        return await this.db.insert(note);
    }

    async delete(id) {
        await this.db.update({_id: id}, {$set: {"state": "DELETED"}});
        return await this.get(id);
    }

    async get(id) {
        return { note: await this.db.findOne({_id: id})};
    }

    async all() {
        return { notes: await this.db.find({})};
    }


    /*
        TODO implement edit method --> update on db
     */


    async edit(id,title,description,prio,finishedUntil,done) {
        return await this.db.update({_id: id}, {$set: {"title": title, "description": description, "prio": prio, finishedUntil,"done": done}});
    }

}

export const noteBook = new NoteBook();