
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscriber = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l != listener);
        };
    };

    dispatch({});
    return { getState, dispatch, subscriber };
};

// Reducer
function counterReducer(state = { count: 0, text: 'Default' }, action) {
    const count = state.count;
    switch (action.type) {
      case 'increase':
        return Object.assign({}, state, { count: count+1 });
      case 'decrease':
          return Object.assign({}, state, { count: count-1 });
      case 'input':
        return Object.assign({}, state, { text: action.payload });
      default:
        return state
    }
}


// create store
// const store = createStore(counterReducer);

// Action
const increaseAction = { type: 'increase' }

const decreaseAction = { type: 'decrease' }

const inputAction = text => ({
    type: 'input', 
    payload: text
})

const nestedReducerTwoCount = { type: 'nestedReducerTwoCount' }

// Combine reducer 
function combineReducers(reducers) {
    // First get an array with all the keys of the reducers (the reducer names)
    const reducerKeys = Object.keys(reducers);
  
    return function combination(state = {}, action) {
      // This is the object we are going to return.
      const nextState = {}
  
      // Loop through all the reducer keys
      for (let i = 0; i < reducerKeys.length; i++) {
      // Get the current key name
      const key = reducerKeys[i];
      // Get the current reducer
      const reducer = reducers[key]
      // Get the the previous state
      const previousStateForKey = state[key]
      // Get the next state by running the reducer
      const nextStateForKey = reducer(previousStateForKey, action)
      // Update the new state for the current reducer
      nextState[key] = nextStateForKey;
      }
      return nextState;
    }
  }


// const theDefaultReducer = (state = { count: 0 , value: 'theDefaultReducer 1' }, action) => state;
const firstNamedReducer = (state = { count: 0 , value: 'firstNamedReducer 2' }, action) => state;
const secondNamedReducer = (state = { count: 0 , value: 'secondNamedReducer 3' }, action) => state;

const nestedReducerOne = (state = { count: 0 , value: 'nestedReducerOne 1' }, action) => state;
function nestedReducerTwo(state = { count: 0, value: 'nestedReducerTwo 2' }, action) {
    const count = state.count;
    switch (action.type) {
      case 'nestedReducerTwoCount':
        return Object.assign({}, state, { count: count+1 });
      case 'decrease':
          return Object.assign({}, state, { count: count-1 });
      case 'input':
        return Object.assign({}, state, { text: action.payload });
      default:
        return state
    }
}

const nestedReducer = combineReducers({
    nestedReducerOne,
    nestedReducerTwo
  });

function theDefaultReducer(state = { count: 0, text: 'Default' }, action) {
    const count = state.count;
    switch (action.type) {
      case 'increase':
        return Object.assign({}, state, { count: count+1 });
      case 'decrease':
          return Object.assign({}, state, { count: count-1 });
      case 'input':
        return Object.assign({}, state, { text: action.payload });
      default:
        return state
    }
}


// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
  theDefaultReducer,
  firstNamedReducer,
  secondNamedReducer,
  counterReducer,
  nestedReducer
});

// console.log(rootReducer.toString());
const store = createStore(rootReducer);
console.log(store.getState());
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(increaseAction);
store.dispatch(nestedReducerTwoCount);
store.dispatch(nestedReducerTwoCount);
store.dispatch(nestedReducerTwoCount);
store.dispatch(inputAction('Hello from dispatch'));
console.log("\n\n ");
console.log(store.getState());