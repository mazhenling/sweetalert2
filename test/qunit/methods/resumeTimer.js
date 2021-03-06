import { Swal, SwalWithoutAnimation } from '../helpers.js'

QUnit.test('resumeTimer() method', (assert) => {
  const done = assert.async()

  SwalWithoutAnimation({
    timer: 500
  })

  Swal.stopTimer()

  setTimeout(() => {
    assert.ok(Swal.isVisible())
    Swal.resumeTimer()
  }, 600)

  setTimeout(() => {
    assert.notOk(Swal.isVisible())
    done()
  }, 1500)
})

QUnit.test('resumeTimer() method called twice', (assert) => {
  const done = assert.async()

  SwalWithoutAnimation({
    timer: 500
  })

  Swal.resumeTimer()
  Swal.resumeTimer()

  Swal.stopTimer()

  setTimeout(() => {
    assert.ok(Swal.isVisible())
    done()
  }, 1000)
})
