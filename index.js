const app = {    
    init(selectors) {
        this.flicks = []        
        this.max = 0
        this.list = document.querySelector(selectors.listSelector)
        this.template = document.querySelector(selectors.templateSelector)

        document
        .querySelector(selectors.flickForm)
        .addEventListener('submit', ev => {
            ev.preventDefault()
            this.handleSubmit(ev)            
        })

        document
            .querySelector(selectors.listSelector)
            .addEventListener('click', ev => {
                const f = ev.target

                if(f.isEqualNode(this.list.querySelector('.button.delete')) == true) {
                    this.flicks.forEach((flick, index) => {
                        if(flick.id == f.closest('.flick').dataset.id) {
                            this.flicks.splice(index, 1)
                            console.log(this.flicks)
                        }
                    })                
                    
                    f.closest('.flick').remove()
                }

                if(f.isEqualNode(this.list.querySelector('.button.fav')) == true) {                    
                    f.closest('.flick').classList.toggle('flick-fav')
                }
        })
    },    

    renderListItem(flick) {
        const item = this.template.cloneNode(true)
        item.classList.remove('template')
        item.dataset.id = flick.id
        item
            .querySelector('.flickName')
            .textContent = flick.name

        return item
    },

    handleSubmit(ev) {        
        const f = ev.target
        const flick = {
            id: ++this.max,
            name: f.flickName.value,
        }

        this.flicks.unshift(flick)
        console.log(this.flicks)

        const item = this.renderListItem(flick)
        this.list.insertBefore(item, this.list.firstChild)     

        f.reset()
    },
}

app.init({
    flickForm: '#flickForm',
    listSelector: '#flickList',
    templateSelector: '.flick.template',
})