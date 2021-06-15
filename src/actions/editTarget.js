export const editTarget = (target, engagement_id) => {
  console.log(target)
  console.log(engagement_id)
  return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/engagements/${engagement_id}/targets/${target.target_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(target)
      })
      .then(response => response.json())
      .then(target => dispatch({type: 'EDIT_TARGET', payload: target}))
    }
  
  }