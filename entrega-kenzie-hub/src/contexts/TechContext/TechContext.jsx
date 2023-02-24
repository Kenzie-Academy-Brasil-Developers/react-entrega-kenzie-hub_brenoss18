import { createContext, useContext, useState } from "react";
import { api } from "../../services/api";
import { userContext } from "../userContexts/userContexts";

export const TechContext = createContext({})

function TechProvider ({children}){

    const [modalForm, setModalForm] = useState(false)
    const [modalAtt, setModalAtt] = useState(false)
    const [currentTech, setCurrentTech] = useState({})
    
    const {AttStateUser} = useContext(userContext)


    async function addTech (data){
        const token = localStorage.getItem('user')
        try {
            const response = await api.post('/users/techs', data,{
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    async function attTech (data, id){
        const token = localStorage.getItem('user')
        try {
            await api.put(`/users/techs/${id}`, data, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            await AttStateUser()
            setModalAtt(false)
        } catch (error) {
            console.log(error)
        }
    }

    async function DeleteTech (id){
        const token = localStorage.getItem('user')
        try {
            await api.delete(`/users/techs/${id}`, {
                headers : {
                    Authorization: `Bearer ${token}`
                }
            })
            await AttStateUser()
            setModalAtt(false)
            
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <TechContext.Provider value={{addTech, DeleteTech, attTech, modalAtt, modalForm, setModalAtt, setModalForm,currentTech, setCurrentTech}}>
            {children}
        </TechContext.Provider>
    )
}
export default TechProvider