
export default (state = null,action) => {
   console.log(action.payload)
   switch(action.type){
       case 'update_score':
       return state + action.payload

       default:
       return 0
   }


   
}