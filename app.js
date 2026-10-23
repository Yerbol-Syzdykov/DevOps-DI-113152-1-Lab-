// Бірінші функционалдық мүмкіндік: тапсырма қосу.
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const message = document.getElementById('message');
const tasks = [];

function renderTasks() {
  list.replaceChildren();
  tasks.forEach((task) => {
    const item = document.createElement('li');
    item.textContent = task.text;
    list.appendChild(item);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) {
    message.textContent = 'Тапсырма мәтінін енгізіңіз.';
    return;
  }
  tasks.push({ id: Date.now() + Math.random(), text });
  renderTasks();
  input.value = '';
  input.focus();
  message.textContent = 'Тапсырма қосылды.';
});
