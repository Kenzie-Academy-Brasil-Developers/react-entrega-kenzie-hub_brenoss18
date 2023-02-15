import { Header, HeaderDashboard, Main, Section } from '../../styled/styled'
import logo from '../../assets/Logo.svg'
import { useNavigate } from 'react-router-dom'

function DashBoard ({user}){
    const navigate = useNavigate()
    function logoOut (){
        
        localStorage.clear
        navigate('/')
    }
    return (
        <>
        <HeaderDashboard>
            <div className='itensHeader'>
                <img src={logo} alt='' />
                <button onClick={logoOut}>Sair</button>
            </div>
        </HeaderDashboard>

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