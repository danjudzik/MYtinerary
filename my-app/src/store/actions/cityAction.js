const addProduct = newUser => dispatch => {
  fetch('http://localhost:5000/city', {
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


function getProducts() {
    return (dispatch,getState) => {
      console.log("getState()")
      console.log(getState())
      if(getState().length>0) return;
     return fetch('http://localhost:5000/city').then((res)=>{
        return res.json()
      }).then((data)=>{
        dispatch({
          type:'GET_PROD',
          payload:data
        });
      })
    };
  }
    export   {
        addProduct, getProducts
    }