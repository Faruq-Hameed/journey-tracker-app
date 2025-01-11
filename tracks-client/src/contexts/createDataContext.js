import React, { useReducer } from "react";


/**This will be identical no matter the resource we are dealing with 
 * the actions will be an object that contains all the different callbacks to execute when dispatching action
*/
export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
 const boundAction = {}

 //actions = {add: {addBlogPost: (dispatch, {payload}) => dispatch({ type: "add_post", payload })}
 for(let key in actions) {
  boundAction[key] = actions[key](dispatch)
 }
    return <Context.Provider value={{state, ...boundAction}}>{children}</Context.Provider>;
  };

  return {Context, Provider}
};
