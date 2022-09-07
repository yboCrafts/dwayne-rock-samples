const app = {    
    init(selectors) {
        this.flicks = []        
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)

        document
        .querySelector(selectors.flickForm)
        .addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },    

    renderListItem(flickName) {
        const item = document.createElement('li')
        item.textContent = flickName
        return item
    },

    handleSubmit(ev) {        
        const f = ev.target
        flick = {
            id: ++this.max,
            name: f.flickName.value,
        }

        this.flicks.push(flick)
        console.log(this.flicks)

        const item = this.renderListItem(flick.name)
        this.list.appendChild(item)

        f.reset()
    },
}

app.init({
    flickForm: '#flickForm',
    listSelector: '#flickList',
})