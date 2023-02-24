import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

export const userContext = createContext({})

function Provider ({children}){

    const navigate = useNavigate()

    const [user, setUser] = useState('')


    async function onSubmitLogin (data){
        try {
            const response = await api.post('/sessions', data)
            localStorage.setItem('user', response.data.token)
            setUser(response.data.user)
            toast('Login feito com sucesso')
            navigate('/dashboard')
           
            
        } catch (error) {
            console.log(error)
            toast('Ops ! algo deu errado.')
            }

        }
        
        async function onSubmit (data){
            try {
                await api.post('/users', data)
                navigate('/')
                toast('Conta criada com sucesso')
                
            } catch (error) {
                console.log(error)
                toast('Ops ! algo deu errado.')
            }

        }
                    
        
        const schema = yup.object({
            name : yup.string().required('nome obrigátorio'),
            email : yup.string().required('email obrigátorio').matches('@+\.'),
            password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter no mínimo 6 números'),
            bio : yup.string().required('fale sobre você'),
            contact : yup.string().required('Contato Obrigátorio'),
                }).required()

                const {register, handleSubmit, formState:{errors} } = useForm({
                    resolver: yupResolver(schema)
                })

                

        
            function toLogin (){
                navigate('/')
            }
                function toRegister (){
                    navigate('/register')
                }


         useEffect(()=>{
            const token = localStorage.getItem('user')
            if (token){
                const userAutoLogin = async () => {
                    try {
                        const response = await api.get('/profile', {
                            headers : {
                                Authorization: `Bearer ${token}`
                            }
                        })
                                setUser(response.data)
                                    navigate('/dashboard')
                    } catch (error) {
                        console.log(error)
                    }
                }
                userAutoLogin()
            }
            
        }, [])

        async function AttStateUser (){
            const token = localStorage.getItem('user')
            
            try {
                const response = await api.get('/profile', {
                    headers : {
                        Authorization: `Bearer ${token}`
                    }
                })
                        setUser(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        





    return(

        <userContext.Provider value={{ user,setUser,onSubmit, onSubmitLogin, register, handleSubmit, errors, toLogin, toRegister, navigate, AttStateUser}}>
            {children}
        </userContext.Provider>
    )
}
export default Provider