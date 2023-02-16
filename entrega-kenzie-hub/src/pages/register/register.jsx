import { RegisterSection } from '../../styled/globalStyled'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { api } from '../../services/api'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderComponent from '../../components/header/header'
import InputComponent from '../../components/inputs/inputs'


 const schema = yup.object({
    name : yup.string().required('nome obrigátorio'),
    email : yup.string().required('email obrigátorio').matches('@+\.'),
    password : yup.string().required('digite uma senha').matches(/(\d)/, 'Deve conter no mínimo 6 números'),
    bio : yup.string().required('fale sobre você'),
    contact : yup.string().required('Contato Obrigátorio'),

}).required()

function RegisterPage (){

    const {register, handleSubmit, formState:{errors} } = useForm({
        resolver: yupResolver(schema)
    })
    const navigate = useNavigate()

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
    function toLogin (){
        navigate('/')
    }

    return (
        <>
        <HeaderComponent toLogin={toLogin} TextButton={'Voltar'}/>

        <RegisterSection className='registerSection'>
            <h2>Crie sua conta</h2>
              <p>Rápido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='name'>nome</label>
                        <input type='text' placeholder='Digite aqui o seu nome' {...register('name')}/>
                            <p>{errors.name ?.message}</p>

                        <InputComponent emailRegister={register} senhaRegister={register} errors={errors}/>

                    <label htmlFor='passwordConfirm'>Confirmar Senha</label>
                        <input type='password' placeholder='Digite sua senha novamente'/>
                    <label htmlFor='bio'>Bio</label>
                        <input type='text' placeholder='Fale sobre você' {...register('bio')}/>
                            <p>{errors.bio ?.message}</p>
                    <label htmlFor='contact'>Contato</label>
                        <input type='text'placeholder='Opção para contato' {...register('contact')}/>
                        <p>{errors.contact ?.message}</p>
                    <label htmlFor='module'>Selecionar Módulo</label>
                        <select name='module' {...register('course_module')}>
                            <option value='moduleOne'>Primeiro Módulo</option>
                            <option value='moduleTwo'>Segundo Módulo</option>
                            <option value='moduleThree'>Terceiro Módulo</option>
                            <option value='moduleFour'>Quarto Módulo</option>
                            <option value='moduleFive'>Quinto Módulo</option>
                            <option value='moduleSix'>Sexto Módulo</option>
                        </select>
                    <button type='submit'>Cadastrar</button>
                    <ToastContainer/>                  
                </form>
        </RegisterSection>
        </>
    )
}
export default RegisterPage