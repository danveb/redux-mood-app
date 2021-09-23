const h1 = document.querySelector('h1') 
const happyBtn = document.getElementById('happy') 
const sadBtn = document.getElementById('sad')
const angryBtn = document.getElementById('angry')
const confusedBtn = document.getElementById('confused') 

const showInitialMood = () => {
    h1.innerText = store.getState().mood
}

happyBtn.addEventListener('click', (e) => {
    // console.log('clicked') 
    // dispatch an action to make a change to state 
    store.dispatch({type: 'HAPPY', payload: '^_^'})
    // get store out 
    const state = store.getState() 
    h1.innerText = state.mood

})

sadBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'SAD', payload: 'T.T'})
    const state = store.getState()
    h1.innerText = state.mood 
})

angryBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'ANGRY', payload: 'ಠ_ಠ'})
    const state = store.getState() 
    h1.innerText = state.mood 
})

confusedBtn.addEventListener('click', (e) => {
    store.dispatch({type: 'CONFUSED', payload: '(@_@)'})
    const state = store.getState()
    h1.innerText = state.mood
})

showInitialMood() 