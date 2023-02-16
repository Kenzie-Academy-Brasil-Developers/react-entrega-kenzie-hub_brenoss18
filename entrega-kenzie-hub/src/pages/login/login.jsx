import logo from '../../assets/Logo.svg'
import { FormLogin, HeaderLogin, LogoImg } from '../../styled/globalStyled'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import InputComponent from '../../components/inputs/inputs'

const schema = yup.object({    
    email : yup.string().required('email obrigátorio').matches('@+\.'),
    password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter 1 número')

}).required()


function LoginPage ({setUser}){

    const {register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()

   async function onSubmit (data){

        try {
            await api.post('/sessions', data)
            .then(response => {
                localStorage.setItem('user', response.data.token)
                setUser(response.data.user)
            })
            
            navigate('/dashboard')
            
        } catch (error) {
            console.log(error)
        }

    }

    function toRegister (){
        navigate('/register')
    }

    return (
        <>
        <HeaderLogin>
            <img src={logo} alt='logo' />
        </HeaderLogin>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
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