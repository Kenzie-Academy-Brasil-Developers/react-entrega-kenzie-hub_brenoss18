import logo from '../../assets/Logo.svg'
import { FormLogin, HeaderLogin, LogoImg } from '../../styled/styled'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'

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
        console.log(data)

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
        navigate('/')
    }

    return (
        <>
        <HeaderLogin>
            <img src={logo} alt='logo' />
        </HeaderLogin>
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
                <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Digite seu email' {...register('email')}/>
                    <p>{errors.email ?.message}</p>
                <label htmlFor='password'>Senha</label>
                    <input type='password' placeholder='Digite sua senha' {...register('password')}/>
                    <p>{errors.password ?.message}</p>
                <button type='submit' className='enter'>Entrar</button>

                    <p>Ainda não possui uma conta ?</p>
                <button onClick={toRegister}>Cadastre-se</button>
        </FormLogin>
        </>
    )
}
export default LoginPage