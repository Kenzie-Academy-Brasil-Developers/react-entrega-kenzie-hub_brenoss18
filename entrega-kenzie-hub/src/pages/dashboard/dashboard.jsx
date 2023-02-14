import { Header, Main, Section } from "../../styled/styled"
import logo from '../../assets/Logo.svg'
import { useNavigate } from "react-router-dom";

function DashBoard (){
    const navigate = useNavigate()
    function logoOut (){
        
        localStorage.clear
        navigate('/')
    }
    return (
        <>
        <Header>
            <div className="itensHeader">
                <img src={logo} alt="" />
                <button onClick={logoOut}>Sair</button>
            </div>
        </Header>
        <Main>
            <h3>Olá, Breno</h3>
            <p>Terceiro módulo, React.</p>

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