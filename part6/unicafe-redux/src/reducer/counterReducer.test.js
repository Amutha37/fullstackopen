import counterReducer from './counterReducer'
import deepFreeze from 'deep-freeze'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0,
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING',
      payload: initialState,
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD',
      payload: {
        good: 1,
        ok: 0,
        bad: 0,
      },
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0,
    })
  })

  test('ok is incremented', () => {
    const action = {
      type: 'OK',
      payload: {
        good: 0,
        ok: 1,
        bad: 0,
      },
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 1,
      bad: 0,
    })
  })

  test('bad is incremented', () => {
    const action = {
      type: 'BAD',
      payload: {
        good: 0,
        ok: 0,
        bad: 1,
      },
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 0,
      ok: 0,
      bad: 1,
    })
  })

  test('Zero is initialState', () => {
    const action = {
      type: 'ZERO',
      payload: {
        good: 0,
        ok: 0,
        bad: 0,
      },
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual(initialState)
  })
})
