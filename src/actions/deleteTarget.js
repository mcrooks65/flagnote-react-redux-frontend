export const deleteTarget = (targetId, engagementId) => {

    return dispatch => {
        return fetch(`http://localhost:3001/api/v1/engagements/${engagementId}/targets/${targetId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(engagement => dispatch({type: 'DELETE_TARGET', payload: engagement}))
    }
}