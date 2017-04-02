var React = require('react')
var ReactDOM = require('react-dom')
var expect = require('expect')
var $ = require('jQuery')
var TestUtils = require('react-addons-test-utils')

var Timer = require('Timer')

describe('Timer', () => {
  it('should exist', () => {
    expect(Timer).toExist()
  })

  it('should set state to started and count up', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />)
    timer.handleStatusChange('started')

    expect(timer.state.countdownStatus).toBe('started')

    setTimeout(() => {
      expect(timer.state.count).toBe(2)
      done()
    }, 2001)
  })

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />)
    timer.startTimer()
    timer.handleStatusChange('paused')

    setTimeout(() => {
      expect(timer.state.count).toBe(0)
      expect(timer.state.countdownStatus).toBe('paused')
      done()
    }, 1001)
  })

  it('should reset count on stopped', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer />)
    timer.handleStatusChange('started')
    timer.handleStatusChange('stopped')

    setTimeout(() => {
      expect(timer.state.count).toBe(0)
      expect(timer.state.countdownStatus).toBe('stopped')
      done()
    }, 1001)
  })
})
