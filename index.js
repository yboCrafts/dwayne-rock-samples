const userForm = document.querySelector('#userForm')

function renderListItem (stoneName) {
    const item = document.createElement('li')
    item.textContent = stoneName
    return item
}

function renderList(data) {
    
}

const handleForm = (ev) => {
    ev.preventDefault();


}

userForm.addEventListener('submit', handleForm)