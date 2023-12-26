import React, { createContext, useState } from 'react'

export const adddata = createContext("");
export const updatedata = createContext("");
export const deletedata = createContext("");
export const logindata=createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setudata] = useState("");
  const [updata, setupdatedata] = useState("");
  const [ddata, setdeletedata] = useState("");
  const [login,setlogindata]=useState("");

  return (
    <>
      <adddata.Provider value={{ udata, setudata }}>
        <updatedata.Provider value={{ updata, setupdatedata }} >
          <deletedata.Provider value={{ ddata, setdeletedata }}>
            <logindata.Provider value={{login,setlogindata}}>
            {children}
            </logindata.Provider>
          </deletedata.Provider>
        </updatedata.Provider>
      </adddata.Provider>

    </>


  )
}

export default ContextProvider;