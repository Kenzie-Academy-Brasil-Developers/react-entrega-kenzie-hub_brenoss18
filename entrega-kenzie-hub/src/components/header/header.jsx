import { Header } from "../../styled/globalStyled"
import logo from '../../assets/Logo.svg'

function HeaderComponent ({toLogin, TextButton}){
    return (
        <Header>
        <div className='itensHeader'>
            <img src={logo} alt="" />
            <button onClick={toLogin}>{TextButton}</button>
        </div>
        </Header>
    )
}
export default HeaderComponent