export default function engagementReducer(state = {engagements: []}, action) {
    
    switch (action.type){
        case 'FETCH_ENGAGEMENTS':
            return {engagements: action.payload}
        case 'ADD_ENGAGEMENT':
            return {...state, engagements: [...state.engagements, action.payload]}
        case 'ADD_TARGET':
            let engagements = state.engagements.map(engagement => {
                if (engagement.id === action.payload.id) {
                    return action.payload
                } else {
                    return engagement
                }
            })
            return {...state, engagements: engagements}
        case 'DELETE_TARGET':
            let engagements2 = state.engagements.map(engagement => {
                if (engagement.id === action.payload.id) {
                    return action.payload
                } else {
                    return engagement
                }
            })
            return {...state, engagements: engagements2}
        default: 
            return state
    }  
}

