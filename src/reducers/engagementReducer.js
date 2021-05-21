export default function engagementReducer(state = {engagements: []}, action) {
    
    switch (action.type){
        case 'FETCH_ENGAGEMENTS':
            return {engagements: action.payload}
        case 'ADD_ENGAGEMENT':
            return {...state, engagements: [...state.engagements, action.payload]}
        default: 
            return state
    }  
}

