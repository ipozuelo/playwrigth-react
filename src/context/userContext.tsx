
import { onAuthStateChanged } from 'firebase/auth'
import {createContext, useState, useEffect, useContext} from 'react'
import { auth } from '../config/firebase'

const UserContext = createContext()

export default function UserContextPorvider({children}){

    const [user,setUser] = useState(false)

    useEffect(()=>{

        const unsuscribe = onAuthStateChanged(auth, (user)=>{
            console.log(user)
            setUser(user)
        })
        return unsuscribe
    },[])

    return(
        <UserContext.Provider value={user}>{children}</UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)