const app = {    
    init(selectors) {
        this.max = 0

        document
        .querySelector(selectors.flickForm)
        .addEventListener('submit', (ev) => {
            ev.preventDefault()
            this.handleSubmit(ev)
        })
    },    

    handleSubmit(ev) {        
        const f = ev.target
        flick = {
            id: ++this.max,
            name: f.flickName.value,
        }
        console.log(flick)

        f.reset()
    },
}

app.init({
    flickForm: '#flickForm',
    flickList: '#flickList',
})