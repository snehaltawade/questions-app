import { createStore } from "redux";

const dataReducer =(state={start: false},action)=>{
    console.log("inside reducer");
    if(action.type === 'startTest'){
        return {start: !state.start,}
    };
    return state;

}

const store = createStore(dataReducer);

export default store;