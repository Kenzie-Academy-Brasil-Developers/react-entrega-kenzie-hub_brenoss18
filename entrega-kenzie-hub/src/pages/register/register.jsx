import { RegisterSection } from '../../styled/globalStyled'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import HeaderComponent from '../../components/header/header'
import InputComponent from '../../components/inputs/inputs'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContexts/userContexts'

 

function RegisterPage (){
    
    const {onSubmit, register, handleSubmit, errors, toLogin} = useContext(userContext)

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
                            <option value='Primeiro Módulo'>Primeiro Módulo</option>
                            <option value='Segundo Módulo'>Segundo Módulo</option>
                            <option value='Terceiro Módulo'>Terceiro Módulo</option>
                            <option value='Quarto Módulo'>Quarto Módulo</option>
                            <option value='Quinto Módulo'>Quinto Módulo</option>
                            <option value='Sexto Módulo'>Sexto Módulo</option>
                        </select>
                    <button type='submit'>Cadastrar</button>
                    <ToastContainer/>                  
                </form>
        </RegisterSection>
        </>
    )
}
export default RegisterPage