import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  return (
    <>
      <AuthContext.Provider
        value={{
          email,
          setEmail,
          password,
          setPassword,
          phoneNumber,
          setPhoneNumber,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          createPassword,
          setCreatePassword,
          confirmPassword,
          setConfirmPassword
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  )
}

export default AuthContextProvider