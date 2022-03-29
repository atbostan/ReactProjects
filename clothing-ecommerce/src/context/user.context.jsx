import { createContext, useState } from "react";

// as the actual value we want to access from the other any component
//Context needs initial value
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
});

//Actual component
export const UserProvider = ({ children }) => {

    //Sets the inital currentUserState
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  // We can pass the any value inside of the UserContext.Provider by doing so any children component can access these value
  // which this case is the currentUser and SetCurrentUser
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
