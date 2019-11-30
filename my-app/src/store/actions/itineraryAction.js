function getProducts(idCity) {
  console.log("idCity")
  console.log(idCity)
  return (dispatch,getState) => {
      console.log("getState()")
      console.log(getState())
      if(getState().length>0) return;
     return fetch('http://localhost:5000/city/'+idCity).then((res)=>{
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
 getProducts
}