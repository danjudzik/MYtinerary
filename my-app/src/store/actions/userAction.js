export const createUser = newUser => dispatch => {
    fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(user => dispatch({
            type: "CREATE_USER",
            payload: user
        }))
    }