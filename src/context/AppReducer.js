export default (state, action) => {
    switch(action.type) {

        case "DELETE":
            return {
               ...state,
               transaction: state.transactions.filter(t => t.id !== action.payload) 
            }
        case "ADD_TRANSACTION":
            return {
               ...state,
               transactions: [action.payload, ...state.transactions]
            }
        default:
            return state
    }
}