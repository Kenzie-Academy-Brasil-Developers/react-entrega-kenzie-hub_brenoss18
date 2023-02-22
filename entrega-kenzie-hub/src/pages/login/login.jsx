import logo from '../../assets/Logo.svg'
import { FormLogin, HeaderLogin, LogoImg } from '../../styled/globalStyled'
import InputComponent from '../../components/inputs/inputs'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContexts/userContexts'


function LoginPage (){

    const {onSubmitLogin, register, handleSubmit, errors, toRegister} = useContext(userContext)

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
                                <button onClick={toRegister}>Cadastre-se</button>
            </FormLogin>
        </>
    )
}
export default LoginPage