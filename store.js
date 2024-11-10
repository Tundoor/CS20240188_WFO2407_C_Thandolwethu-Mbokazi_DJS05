// initial State sign in 

let state = {
    count: 0
}
// function to increment the count

function incrementCount(state) {
   return {
    ...state,
    count: state.count += 1
   } 
}

console.log(incrementCount(state))
console.log(incrementCount(state))

// resets the state to the initial state
function decrementCount(state) {
    return {
     ...state,
     count: state.count -= 1
    } 
 }
 
 console.log(decrementCount(state))

 // resets thee state to its initial state
 function resetCount(state) {
     return {
        ...state,
        count: 0
     }
 }

 console.log(resetCount(state))