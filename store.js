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

 // This function gets the state of the store

 function getState() {
    return state;
 }
 

 console.log(getState())

 function actionDispatcher(action) {
    switch (action.type) {
        case 'INCREMENT':
            state = incrementCount(state);
            break;
        case 'DECREMENT':
            state = decrementCount(state);
            break;
        case 'RESET':
            state = resetCount(state);
            break;}
            console.log(getState())}

// Dispatching actions
actionDispatcher({ type: 'INCREMENT' }); 
actionDispatcher({ type: 'INCREMENT' }); 
actionDispatcher({ type: 'DECREMENT' }); 
actionDispatcher({ type: 'RESET' });     