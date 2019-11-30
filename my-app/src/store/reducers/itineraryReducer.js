const itineraryReducer = (state = [], action) => {
    console.log("addProd", action)
        switch (action.type) {

          case'GET_PROD':
              return action.payload
          default:
            return state
        }
      }
      
      export default itineraryReducer