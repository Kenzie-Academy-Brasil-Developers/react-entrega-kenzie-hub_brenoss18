import { Main, Section } from '../../styled/globalStyled'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'

function DashBoard ({user}){
    const navigate = useNavigate()

    function logoOut (){
        
        localStorage.clear
        navigate('/')
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
        </>
    )
}
export default DashBoard