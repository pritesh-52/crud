import React, { createContext, useState } from 'react'

export const adddata = createContext("");
export const updatedata = createContext("");
export const deletedata = createContext("");

const ContextProvider = ({ children }) => {
  const [udata, setudata] = useState("");
  const [updata, setupdatedata] = useState("");
  const [ddata, setdeletedata] = useState("");

  return (
    <>
      <adddata.Provider value={{ udata, setudata }}>
        <updatedata.Provider value={{ updata, setupdatedata }} >
          <deletedata.Provider value={{ ddata, setdeletedata }}>
            {children}
          </deletedata.Provider>
        </updatedata.Provider>
      </adddata.Provider>

    </>


  )
}

export default ContextProvider;