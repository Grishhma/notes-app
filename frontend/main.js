const API = 'http://127.0.0.1:5000/api/notes';
const notesEl = document.getElementById('notes');
const newText = document.getElementById('newText');

async function load() {
  try {
    const res = await fetch(API);
    const notes = await res.json();
    notesEl.innerHTML = notes.map(n =>
      `<li>
        <input value="${n.text}" data-id="${n.id}" class="edit">
        <button data-id="${n.id}" class="del">✖️</button>
      </li>`
    ).join('');
    bindEvents();
  } catch (err) {
    console.error('Failed to load notes:', err);
  }
}

document.getElementById('addBtn').onclick = async () => {
  const text = newText.value.trim();
  if (!text) return;
  try {
    await fetch(API, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({text})
    });
    newText.value = '';
    load();
  } catch (err) {
    console.error('Failed to add note:', err);
  }
};

function bindEvents() {
  document.querySelectorAll('.edit').forEach(input => {
    input.onchange = async e => {
      const id = e.target.dataset.id;
      try {
        await fetch(`${API}/${id}`, {
          method: 'PUT',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({text: e.target.value})
        });
      } catch (err) {
        console.error('Failed to update note:', err);
      }
    };
  });
  document.querySelectorAll('.del').forEach(btn => {
    btn.onclick = async e => {
      const id = e.target.dataset.id;
      try {
        await fetch(`${API}/${id}`, {method:'DELETE'});
        load();
      } catch (err) {
        console.error('Failed to delete note:', err);
      }
    };
  });
}

// Initial load
load();
