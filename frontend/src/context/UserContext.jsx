import React, { createContext, useState } from "react";

// @ts-ignore
export const UserDataContext = createContext();

const UserContext = ({children}) => {

    const [user,setUser] = useState({
        fullname:{
          firstname:"",
          lastname:""
        },
        email:"",
        password:""
      })

  return (
    <UserDataContext.Provider value={[user,setUser]}>
       {children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
