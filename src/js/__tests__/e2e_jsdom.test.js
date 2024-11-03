import Popover from '../popover'
import FormListener from '../form_listener'

const popover =  new Popover
test('e2e тест отображения всплывающего сообщения', () => {
    document.body.innerHTML = '<form class="form"><button type="submit">Жми тут</button></form>'
    const form = document.querySelector('.form')
    new FormListener(form, popover, "Заголовок", 'Текст')
    form.submit()
    expect(document.contains(document.querySelector('.speech-bubble'))).toBe(true);
  })

  test('e2e тест сокрытия всплывающего сообщения', () => {
    document.body.innerHTML = '<form class="form"><button type="submit">Жми тут</button></form>'
    const form = document.querySelector('.form')
    new FormListener(form, popover, "Заголовок", 'Текст')
    form.submit()
    form.submit()
    expect(document.contains(document.querySelector('.speech-bubble'))).toBe(false);
  })