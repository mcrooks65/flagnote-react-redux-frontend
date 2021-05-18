export function fetchEngagements() {
    return (dispatch) => {
        fetch('http://localhost:3001/api/v1/engagements') 
        .then(response => response.json())
        .then(engagements => dispatch({
            type: 'FETCH_ENGAGEMENTS',
            payload: engagements
        }))
    }
}

