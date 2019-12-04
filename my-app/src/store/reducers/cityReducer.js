const initialState = {
  users: [],
};


const productsReducer = (state = [], action) => {
  console.log("addProd", action)
      switch (action.type) {
        case "CREATE_USER":
                console.log("CREATE_USER")
                return {
                    ...state,
                    users: action.payload,
                };
        case 'DELETE_PROD':
              let state2=state.slice();
              return state2.filter((prod)=>{return prod._id!==action.payload});
            
        case'GET_PROD':
            return action.payload
        default:
          return state
      }
    }
    
    export default productsReducer