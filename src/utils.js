export const getInitialState = (initialState, storageKey) => {
    try {
        const existingState = localStorage.getItem(storageKey)
        console.log('EXISTING STATE: ', JSON.parse(existingState))
        return existingState ? JSON.parse(existingState) : initialState
    } catch {
        return initialState
    }
}

export const persistState = (newState, storageKey) => {
    console.log('NEWSTATE: ', newState)
    try {
        const serializedState = JSON.stringify(newState)
        localStorage.setItem(storageKey, serializedState)
    } catch {
        console.log('Error persisting to state.')
    }
}