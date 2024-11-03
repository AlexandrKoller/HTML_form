export default class Popover {
    constructor () {
        this.popovers = []
    }
    showPopover(title, message, element) {
        const popoverTitle = document.createElement('DIV')
        popoverTitle.classList.add('speech-bubble', 'speech-bubble-bottom')
        popoverTitle.textContent = title
        const popoverText = document.createElement('DIV')
        popoverText.classList.add('speech-bubble-text')
        popoverText.textContent = message
        popoverTitle.append(popoverText)
        document.body.append(popoverTitle)
        const id = performance.now()
        this.popovers.push({
            id,
            element: popoverTitle
          })
        const { left, top } = element.getBoundingClientRect()
        popoverTitle.style.left = left + element.offsetWidth / 2 - popoverTitle.offsetWidth / 2 + 'px'
        popoverTitle.style.top = top - 90 + 'px'
        return id
    }

    removePopover(id) {
        const popover = this.popovers.find(t => t.id === id);
        console.log(popover)
        popover.element.remove();
        this.popovers = this.popovers.filter(t => t.id !== id);
    
    }
}
