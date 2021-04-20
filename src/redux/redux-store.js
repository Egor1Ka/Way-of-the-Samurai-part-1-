import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReduser from "./auth-reduser";
import dialogsReduser from "./dialogs-reduser";
import proileReduser from "./profile-reduser";
import sidebarReduser from "./sidebar-reduser";
import usersReduser from "./users-reduser";
import thunkMiddleware   from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import AppReduser from "./app-reduser";


let redusers = combineReducers({
    profilePage : proileReduser,
    dialogsPage :dialogsReduser,
    sidebar:sidebarReduser,
    usersPage:usersReduser,
    auth:authReduser,
    app:AppReduser,
    form:formReducer,
    
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;   