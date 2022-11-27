import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type && action.payload) {
        case 'sort' && 'up': { // by name
            const sortState = [...state]
            return sortState.sort((a, b) => a.name < b.name ? -1 : 0)// need to fix
        }
        case 'sort' && 'down': {
            let copyState = [...state]
            return copyState.sort((a, b) => a.name > b.name ? -1  : 0)// need to fix
        }
        case 'check' && 18: {
            let copyState = [...state]
            return copyState.filter(el => el.age > 18)
        }
        default:
            return state
    }
}
