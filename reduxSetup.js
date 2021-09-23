// initialize INITIAL_STATE object 
const INITIAL_STATE = { mood: '(￣ー￣)' } 

// initialize Reducer 
const moodReducer = (state = INITIAL_STATE, action) => {
    // switch statement for different actions 
    switch(action.type) {
        // cases 
        // - return existing state and new state object 
        // - use payload (mood: action.payload)
        case 'HAPPY': 
            return {...state, mood: action.payload} 
        case 'SAD': 
            return {...state, mood: action.payload}
        case 'ANGRY': 
            return {...state, mood: action.payload}
        case 'CONFUSED':
            return {...state, mood: action.payload}
        default: 
            return state 
    }
}

// pass reducer to Redux Store 
const store = Redux.createStore(moodReducer) 