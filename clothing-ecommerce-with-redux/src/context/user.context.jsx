import { createContext} from "react";


  //-------REDUCER---------





// as the actual value we want to access from the other any component
//Context needs initial value
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});


