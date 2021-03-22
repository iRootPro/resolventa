export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('favorites')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (e) {
        return undefined
    }
}

export const saveState = (state: Array<number>) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('favorites', serializedState)
    } catch (e) {

    }
}
