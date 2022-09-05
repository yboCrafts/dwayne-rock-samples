const userForm = document.querySelector('#userForm')

function renderListItem (stoneName) {
    const item = document.createElement('li')
    item.textContent = stoneName
    return item
}

function renderList () {

}

const handleForm = (ev) => {
    ev.preventDefault();
    const f = ev.target;
    const stone = {
        stoneName: f.stoneName.value,
    }
    
    console.log(stone['stoneName'])
}

userForm.addEventListener('submit', handleForm)