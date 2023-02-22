import { Main, Section } from '../../styled/globalStyled'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'
import { useContext } from 'react'
import { userContext } from '../../contexts/userContexts/userContexts'
import { SectionTec } from './dashboardStyled'
import ModalCadastrarTech from '../../components/modal/modalCad'

function DashBoard (){

    const {user, setUser} = useContext(userContext)

    const navigate = useNavigate()

    function logoOut (){
        
        setUser('')
        localStorage.removeItem('user')
        navigate('/')
    }
    function HiddenModal (){
        const modal = document.querySelector('.modal')
        modal.classList.add('hidden')
    }
    
    return (
        <>
        <HeaderComponent toLogin={logoOut} TextButton={'sair'}/>

            <Main>
                <h3>Olá, {user.name}</h3>
                <p>{user.course_module}</p>

            </Main>
                    <Section>
                        <h3>Que Pena Estamos em desenvolvimento :( </h3>
                        <p>Nossa aplicação está em desenvolvimento,
                            em breve teremos novidades...
                        </p>
                    </Section>

        <SectionTec className='tec'>
            <div className="tecInfors">
                <p>Tecnologias</p>
                                    <form className='modal hidden'>
                                        <div>
                                        <h3>Cadastrar Tecnologia</h3>
                                        <p className='closeModal' onClick={HiddenModal}>x</p>
                                        <label htmlFor="name">nome</label>
                                            <input type="text" placeholder="linguagem"/>
                                        <label htmlFor="status">Selecionar status</label>
                                            <select name="status" id="">
                                                <option value="iniciante">Iniciante</option>
                                                <option value="intermediário">intermediário</option>
                                                <option value="avançado">avançado</option>
                                            </select>
                                        <button>Cadastrar Tecnologia</button>    
                                        </div>
                                    </form>

                <button onClick={() => ModalCadastrarTech()}>+</button>

            </div>



            <ul>
                <li>
                    <p>{}</p>
                    <p>{}</p>
                </li>
            </ul>

        </SectionTec>
        </>
    )
}
export default DashBoard