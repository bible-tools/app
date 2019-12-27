import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer'
import { loadState, saveState } from '../utilities'
import { logger } from './middleware'

import book from '../reducers/book'
import chapter from '../reducers/chapter'
import reference from '../reducers/reference'
import site from '../reducers/site'
import translation from '../reducers/translation'

import initialState from './initialState'

import throttle from 'lodash-es/throttle'
import thunk from 'redux-thunk'

// enable logging in development
const configureStore =
  process.env.NODE_ENV === 'development'
    ? preloadedState =>
        createStore(
          state => state,
          preloadedState,
          compose(lazyReducerEnhancer(combineReducers), applyMiddleware(logger, thunk))
        )
    : preloadedState =>
        createStore(
          state => state,
          preloadedState,
          compose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
        )

const persistedState = loadState()
const store = configureStore({ ...initialState, ...persistedState })

store.addReducers({ book, chapter, reference, site, translation })

store.subscribe(
  throttle(() => {
    const state = store.getState()

    saveState(state)
  }, 1000)
)

export { store }
