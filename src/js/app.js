import Popover from './popover'
import FormListener from './form_listener'

const popover =  new Popover
new FormListener(document.querySelector('.form'), 
    popover, 'Тестовый заголовок', "Тестовoго сообщения")