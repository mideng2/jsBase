const { eventBus } = require('./eventClass')

const E1 = 'e1'
const E2 = 'e2'

eventBus.once(E1, () => {
  console.log('完成1', E1)
})

eventBus.on(E2, () => {
  console.log('完成2', E2)
})

eventBus.on(E1, () => {
  console.log('完成2', E1)
})

eventBus.once(E1, () => {
  console.log('完成3', E1)
})


setTimeout(() => {
  eventBus.trigger(E1)
}, 500)

setTimeout(() => {
  eventBus.trigger(E1)
}, 1500)

setTimeout(() => {
  eventBus.trigger(E1)
}, 2500)

setTimeout(() => {
  eventBus.trigger(E1)
}, 3500)