
import { onAuthStateChanged } from 'firebase/auth'
import {createContext, useState, useEffect, useContext} from 'react'
import { auth } from '../config/firebase'

export const UserContext = createContext()

export  function UserProvider({children}:any){

    const [user,setUser] = useState(false)

    useEffect(()=>{

        const unsuscribe = onAuthStateChanged(auth,(user)=>{
            console.log(user)
            setUser(user)
        })
        return unsuscribe

    },[])

    if (user === false) return <p>Loading user...</p>

    return(
        <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    )
}

export default UserProvider;

export const  useUserContext = () => useContext(UserContext)