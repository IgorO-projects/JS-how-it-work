class Notes {
    static Priority = {
        LOW: 'low',
        NORMAL: 'normal',
        HIGH: 'high',
    }

    constructor(notes) {
        this.notes = notes;
    }

    // addNote({ text, priority }) {
    //     this.notes.push({ text, priority });
    // }
    addNote(note) {
        this.notes.push(note);
    }

    removeNote(text) {
        const newNotes = [];

        for (const note of this.notes) {
            if(note.text === text) continue;
            
            newNotes.push(note);
        }
        this.notes = newNotes;
    }

    updateNotePriority(text, newPriority) {
        for(const note of this.notes) {
            if(note.text !== text) continue;

            note.priority = newPriority;
        }
    } 
}

const myNotes = new Notes([]);

myNotes.addNote({ text: 'My first note', priority: Notes.Priority.LOW});
console.table(myNotes.notes);

myNotes.addNote({ text: 'My second note', priority: Notes.Priority.NORMAL});
console.table(myNotes.notes);

myNotes.removeNote('My first note')
console.table(myNotes.notes);

myNotes.updateNotePriority('My second note', Notes.Priority.HIGH);
console.table(myNotes.notes);
