const userForm = document.querySelector('#userForm')
const arr = []

function renderButton() {
    const delButton = document.createElement('button')
    delButton.textContent = 'del'
    return delButton
} 

function renderListItem(stoneName) {
    const item = document.createElement('li')
    item.textContent = stoneName
    item.appendChild(renderButton())
    return item
}

function renderList(data) {
    const list = document.createElement('ul')
    list.appendChild(renderListItem(data))
    return list
}

const handleForm = (ev) => {
    ev.preventDefault();
    const f = ev.target;
    const stone = {
        stoneName: f.stoneName.value,
    }
    
    const stones = document.querySelector('#stones')
    stones.appendChild(renderList(stone['stoneName']))

    arr.push(stone['stoneName'])
    console.log(arr)

    f.reset()
    f.focus()
}

userForm.addEventListener('submit', handleForm)