export default class FormListener {
    constructor (form, popover, title, text) {
        this.form = form
        this.popover = popover
        this.title = title
        this.text = text
        this.show = this.show.bind(this)
        this.form.addEventListener('submit', this.show)
        this.popoverId = false
    }

    show(e) {
        e.preventDefault()
        if (this.popoverId == false) {
        this.popoverId = this.popover.showPopover(this.title, this.text, this.form)
        } else {
            this.popover.removePopover(this.popoverId)
            this.popoverId = false
        }
    }
}