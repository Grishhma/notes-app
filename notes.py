notes_db = []

def add_note(note):
    notes_db.append(note)
    print("Note added!")

def list_notes():
    print("Your Notes:")
    for i, note in enumerate(notes_db, 1):
        print(f"{i}. {note}")
