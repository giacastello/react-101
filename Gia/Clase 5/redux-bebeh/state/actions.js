import { createAction } from "redux-actions";

//Definir acciones

// Actions
export const HOLA = "HOLA";
export const CHAU = "CHAU";

// Action Creators (los que despacho a traves de props)
export const decirHola = createAction(HOLA);
export const decirChau = createAction(CHAU);