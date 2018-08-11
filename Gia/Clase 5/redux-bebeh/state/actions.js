import { createAction } from "redux-actions";

//Definir acciones

// Actions
export const HOLA = "HOLA";
export const CHAU = "CHAU";

// Action Creators
export const decirHola = createAction(HOLA);
export const decirChau = createAction(CHAU);