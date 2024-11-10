// initial State sign in 

let state = {
    count: 0
}
// function to increment the count

function incrementCount(state) {
    return {
        ...state,
        count: state.count + 1
    }
}

// resets the state to the initial state
function decrementCount(state) {
    return {
        ...state,
        count: state.count - 1
    }
}
// resets thee state to its initial state
function resetCount(state) {
    return {
        ...state,
        count: 0
    }
}

// Store the current state
let subscribers = [];

// This function gets the state of the store
function getState() {
    return state;
}

function dispatch(action) {
    switch (action.type) {
        case 'INCREMENT':
            state = incrementCount(state);
            break;
        case 'DECREMENT':
            state = decrementCount(state);
            break;
        case 'RESET':
            state = resetCount(state);
            break;
        default:
            return state
    }

    notifySubscribers();
}   // Adds a new subscriber function that listens to state changes
function subscribe(callback) {
    subscribers.push(callback);
}

// Calls all subscriber functions with the updated state
function notifySubscribers() {
    subscribers.forEach(callback => callback(state));
}

// subscription to code
subscribe((newState) => {
    console.log("State changed:", newState);
});

// Dispatching actions
dispatch({ type: 'INCREMENT' });
dispatch({ type: 'INCREMENT' });
dispatch({ type: 'DECREMENT' });
dispatch({ type: 'RESET' });     