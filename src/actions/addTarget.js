export const addTarget = (target, engagementId) => {
    return (dispatch) => {
        fetch(`http://localhost:3001/api/v1/engagements/${engagementId}/targets`, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(target)
        })
        .then(response => response.json())
        .then(engagement => dispatch({type: 'ADD_TARGET', payload: engagement}))
      }
}