import { handleActions } from "redux-actions";
import * as actions from "./actions";

const INITIAL_STATE = {
    mensaje:null
};



const Saludar = handleActions(
    {
        [actions.HOLA]: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            return{
                mensaje: "HOLA" + action.payload
            }
        },
        [actions.CHAU]: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            return{
                mensaje: "CHAU" + action.payload
            }
        }
    },
    INITIAL_STATE
);

export default Saludar;