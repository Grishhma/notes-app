from flask import Flask, request, jsonify
from flask_cors import CORS 
from models import db, Note

app = Flask(__name__)
CORS(app)   
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///notes.db'
db.init_app(app)

# Create the database tables on first run
with app.app_context():
    db.create_all()

@app.route('/api/notes', methods=['GET'])
def list_notes():
    notes = Note.query.all()
    return jsonify([{'id': n.id, 'text': n.text} for n in notes])

@app.route('/api/notes', methods=['POST'])
def create_note():
    data = request.get_json()
    note = Note(text=data.get('text', ''))
    db.session.add(note)
    db.session.commit()
    return jsonify({'id': note.id, 'text': note.text}), 201

@app.route('/api/notes/<int:id>', methods=['PUT'])
def update_note(id):
    data = request.get_json()
    note = Note.query.get_or_404(id)
    note.text = data.get('text', note.text)
    db.session.commit()
    return jsonify({'id': note.id, 'text': note.text})

@app.route('/api/notes/<int:id>', methods=['DELETE'])
def delete_note(id):
    note = Note.query.get_or_404(id)
    db.session.delete(note)
    db.session.commit()
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)
