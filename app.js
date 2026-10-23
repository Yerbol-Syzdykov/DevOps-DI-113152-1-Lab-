// Екі функционалдық мүмкіндік: тапсырма қосу және орындалуын белгілеу.
const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');
const message = document.getElementById('message');
const tasks = [];

function renderTasks() {
  list.replaceChildren();
  tasks.forEach((task) => {
    const item = document.createElement('li');
    const label = document.createElement('label');
    label.className = 'task-label';
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('aria-label', 'Орындалды: ' + task.text);
    const title = document.createElement('span');
    title.textContent = task.text;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
      message.textContent = task.completed
        ? 'Тапсырма орындалды деп белгіленді.'
        : 'Тапсырма орындалмаған деп белгіленді.';
    });
    label.append(checkbox, title);
    if (task.completed) item.classList.add('completed');
    item.appendChild(label);
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
  tasks.push({ id: Date.now() + Math.random(), text, completed: false });
  renderTasks();
  input.value = '';
  input.focus();
  message.textContent = 'Тапсырма қосылды.';
});
