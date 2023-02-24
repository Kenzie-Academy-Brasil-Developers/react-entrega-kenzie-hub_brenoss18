import logo from '../../assets/Logo.svg'
import { FormLogin, HeaderLogin, LogoImg } from '../../styled/globalStyled'
import InputComponent from '../../components/inputs/inputs'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContexts/userContexts'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'


function LoginPage (){

    const schemaLogin = yup.object({  
        email : yup.string().required('email obrigátorio').matches('@+\.'),
        password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter no mínimo 6 números'),
            }).required()
            const {register, handleSubmit, formState:{errors} } = useForm({
                resolver: yupResolver(schemaLogin)
            })

    const {onSubmitLogin, toRegister} = useContext(userContext)
    
    return (
        <>
        <HeaderLogin>
            <img src={logo} alt='logo' />
        </HeaderLogin>
            <FormLogin onSubmit={handleSubmit(onSubmitLogin)}>
                <h2>Login</h2>
                    <InputComponent emailRegister={register} senhaRegister={register} errors={errors}/>
                        <button type='submit' className='enter'>Entrar</button>
                            <p>Ainda não possui uma conta ?</p>
                                <button type='button' onClick={toRegister}>Cadastre-se</button>
            </FormLogin>
        </>
    )
}
export default LoginPage