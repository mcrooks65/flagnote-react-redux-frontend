export default function engagementReducer(state = {engagements: []}, action) {
    
    switch (action.type){
        case 'FETCH_ENGAGEMENTS':
            return {engagements: action.payload}
        default: 
            return state
    }  
}

