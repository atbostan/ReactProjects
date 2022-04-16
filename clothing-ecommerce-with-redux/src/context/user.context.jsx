import { createContext, useState,useEffect, useReducer } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase.utils";
import { createAction } from "../utils/reducer/reducer.util";


  //-------REDUCER---------


  const INITIAL_STATE = {
    currentUser:null
  }

  const userReducerAction = {
    SET_CURRENT_USER:'SET_CURRENT_USER'
  }

  const userReducer = (state,action)=>{
    const {type,payload}=action;

    switch (type) {
      case userReducerAction.SET_CURRENT_USER:
        return {
        ...state,
          currentUser:payload
        }
        
       
    
      default:
        throw new Error(`Unexpected action type in user-reducer-${type}`)
    }

  }



// as the actual value we want to access from the other any component
//Context needs initial value
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

//Actual component
export const UserProvider = ({ children }) => {
  
    //Hooks for reducer
      // state->current values been stored
      // dispatch -> its a function when you call pass the reducer object
    const [state,dispatch]=useReducer(userReducer,INITIAL_STATE)
    console.log(state)
    const {currentUser} = state
    const setCurrentUser = (user)=>{
      dispatch(createAction(userReducerAction.SET_CURRENT_USER,user))
    }
    const value = {currentUser,setCurrentUser}

  // By doing so this calls only when component mouth
  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user)=>{
     if(user){
       createUserDocumentFromAuth(user);
     }
     setCurrentUser(user);
  })
   
   return unsubscribe;  //Whenever unmount unsubscribe it
  }, [])
  



  // We can pass the any value inside of the UserContext.Provider by doing so any children component can access these value
  // which this case is the currentUser and SetCurrentUser
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
