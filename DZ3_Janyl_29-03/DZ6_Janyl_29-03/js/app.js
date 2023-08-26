const input = document.querySelector('#input')
const createButton = document.querySelector('#create_button')
const todoList = document.querySelector('#todo_list')

const createTodo = () => {
  if (input.value === '' ) {
    alert('Введите туду')
  } else {
    const div = document.createElement('div')
    const divButton = document.createElement('div')
    const text = document.createElement('h3')

    const deleteButton = document.createElement('button')
    const editButton = document.createElement('button')

    div.setAttribute('class', 'block_text')
    divButton.setAttribute('class', 'div_button')
    editButton.setAttribute('class', 'edit_button')
    deleteButton.setAttribute('class', 'del_button')
    deleteButton.innerText = 'DELETE'
    editButton.innerText = 'EDIT'
    text.innerText = input.value
    input.value = ''

    divButton.append(deleteButton, editButton)
    div.append(text, divButton)

    deleteButton.onclick = () => {
      div.remove()
    }
    editButton.onclick = () => {
      text.innerHTML = prompt('Введите новое название')
    }
    todoList.prepend(div)
  }
}
createButton.onclick = () => createTodo()
  