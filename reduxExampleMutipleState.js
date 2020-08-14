
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

  function QE(state = { count: 0, text: 'Default' }, action) {
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
function CB(state = { count: 0, text: 'Default' }, action) {
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

  const keyMetric = (state = [], action) => {

    switch (action.type){
       case 'ADD_COMMENT_Y':
         return [...state, 
                {
                  qe: QE(undefined, action),
                  cb: CB(undefined, action)
                }]

        case 'ADD_COMMENT':
            return [...state, 
                    {
                        qe: QE(undefined, action),
                        cb: CB(undefined, action)
                    }]

    }     
} 

const addComment = { type: 'ADD_COMMENT' }
const increaseAction = { type: 'increase' }
const decreaseAction = { type: 'decrease' }

const commentRootReducer = combineReducers({
    keyMetric,
    QE,
    CB
});

const store = createStore(commentRootReducer);
console.log(store.getState());
store.dispatch(increaseAction);
store.dispatch(addComment);
console.log(store.getState());
store.dispatch(addComment);
console.log(store.getState());