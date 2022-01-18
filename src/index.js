document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_title.value, e.target.new_task_description.value);
  })
});

function buildToDo(title, desc) {
  // element initializing
  let liTitle = document.createElement('li');
  let liDesc = document.createElement('li');
  let btn = document.createElement('button');

  // element creation
  btn.addEventListener("click", handleDelete);
  btn.textContent = 'x';
  liTitle.textContent = title;
  liDesc.textContent = desc;

  // element appending
  liDesc.appendChild(btn);
  liTitle.appendChild(liDesc);
  document.querySelector('#tasks').appendChild(liTitle);

}

function handleDelete(e) {
  e.target.parentNode.parentNode.remove();
}