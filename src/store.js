import {createStore} from "redux";

let initialState = {
    name: "",
    category:"",
    authorFirstName: "",
    authorLastName:"",
    ingredients: [],
    instruction: [],
    recipes: []
    
}

export const UPDATE_NAME = "UPDATE_NAME" ;
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_AUTHOR_FIRST_NAME = "UPDATE_AUTHOR_FIRST_NAME";
export const UPDATE_AUTHOR_LAST_NAME = "UPDATE_AUTHOR_LAST_NAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTION = "UPDATE_INSTRUCTION";
export const LIST = "LIST"


function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload,
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case UPDATE_AUTHOR_FIRST_NAME:
            return{
                ...state,
                authorFirstName: action.payload
            }
        case UPDATE_AUTHOR_LAST_NAME:
            return {
                ...state,
                authorLastName: action.payload
            }
        case UPDATE_INGREDIENTS:
            const newIngredients = [...state.ingredients, action.payload]
            return{
                ...state,
                ingredients: newIngredients
            }
        case UPDATE_INSTRUCTION:
            const newInstruction = [...state.instruction, action.payload]
            return{
                ...state,
                instruction: newInstruction
            }
        case LIST:
            const {
                name,
                category,
                authorFirstName,
                authorLastName,
                ingredients,
                instruction,
            } = state;
            const recipe = {
                name,
                category,
                authorFirstName,
                authorLastName,
                ingredients,
                instruction,
              };
            const newRecipes = [...state.recipes, recipe];
            return{
                ...state, recipes:newRecipes
            }
        default:
            return state
    }
}


export default createStore(reducer)