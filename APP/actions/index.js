export const scoreUpdater =  (score) =>{
    return{
        type : 'update_score',
        payload : score
    }
}

//actions are sent to reducers 