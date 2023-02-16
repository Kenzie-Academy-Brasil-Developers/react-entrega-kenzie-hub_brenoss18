import styled, {createGlobalStyle} from "styled-components";

  const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    body {
        background-color: #121214;
        font-family: 'Inter', sans-serif;
        width: 100vw;
        height: 100vh;
        overflow-x: hidden;
    }
 ` 
export default GlobalStyle

 export const DivApp = styled.div`
    width: 100vw;
    height: 100vh;
`
export const HeaderDashboard = styled.header`
   
    margin : 0 auto;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

    @media(min-width: 768px){
        justify-content: space-around;
    }
    }

    img {
        margin-top: 57px;
        margin-left: 25px;
        @media (min-width: 768px){
            margin-left: 35px;
        }
    }
    button {
        margin-top: 57px;
        margin-right: 12px;
        width: 79px;
        height: 31px;
        background-color: #212529;
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
        background-color: #6E6E6E;
    }
`   
export const Header = styled.header`
    
    width: 370px;
    margin : 0 auto;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

    @media(min-width: 768px){
        justify-content: space-around;
    }
    }

    img {
        margin-top: 57px;
        margin-left: 25px;
        @media (min-width: 768px){
            margin-left: 35px;
        }
    }
    button {
        margin-top: 57px;
        margin-right: 12px;
        width: 79px;
        height: 31px;
        background-color: #212529;
        border: none;
        color: #fff;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }
    button:hover{
        background-color: #6E6E6E;
    }
`
export const RegisterSection = styled.section`
    width: 295px;
    margin: 38px auto;
    color: #fff;
    background-color: #212529;
    h2 {
        font-size: 14px;
        font-weight: 700;
        text-align: center;
        padding-top: 33px;
    }
    p {
        font-size: 9px;
        color: #868E96;
        text-align: center;
    }
    form {
        display: flex;
        flex-direction: column;

        label {
            margin-left: 17px;
            margin-bottom: 17px;
        }
        input {
            margin-left: 17px;
            width: 263px;
            margin-bottom: 21px;
            height: 38px;
            background-color: #343B41;
            border: none;
            border-radius: 4px;
        }
        input::placeholder {
            padding-left: 12px;
        }
        select {
            margin-left: 17px;
            width: 263px;
            margin-left: 17px;
            width: 263px;
            margin-bottom: 21px;
            height: 38px;
            background-color: #343B41;
            border: none;
            border-radius: 4px;
            color: #fff;
        }
        button {
            width: 260px;
            height: 38px;
            margin: 20px auto;
            background-color: #59323F;
            border: none;
            border-radius: 4px;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #803B3B;
        }
    }
`

export const HeaderLogin = styled.header`
       display: flex;
       justify-content: center;
       margin-top: 81px;
        
`
export const LogoImg = styled.img`
    
    margin-top: 81px;
    margin-left: 37%;
`
export const FormLogin = styled.form`
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #212529;
    width: 296px;
    height: 500px;
    margin: 20px auto;
    padding-bottom: 33px;
    border-radius: 6px;
    
    h2 {
        text-align: center;
    }
    label {
        margin-bottom: 17px;
        align-items: flex-start;
        align-self: flex-start;
        margin-left: 15px;
    }
    input {
        
        width: 264px;
        height: 38px;
        border: 1.5px solid #fff;
        border-radius: 4px;
        background-color: #343B41;
        margin-bottom: 21px;
        padding-left: 13px;
        color: #fff;
    }
    input::placeholder {
        padding-left: 13px;
    }
    .enter {
        width: 264px;
        margin-top: 24px;
        height: 38px;
        color: #fff;
        background-color: #FF577F;
        border: none;
        border-radius: 4px;
        margin-bottom: 27px;
        cursor: pointer;
    }
    .enter:hover{
        background-color: #DE749B;
    }
    button {
        width: 264px;
        margin-top: 24px;
        height: 38px;
        color: #fff;
        background-color: #868E96;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: 1s;
    }
    button:hover {
        background-color: #343B41;
    }
    p {
        text-align: center;
        font-size: 9px;
        color: #868E96;
    }
    
`
export const Main = styled.main`
    display: flex;
    flex-direction: column;
    color: #fff;
    border-top: 1px solid #212529;
    border-bottom: 1px solid #212529;
    margin-top: 32px;

    @media(min-width: 768px){
        flex-direction : row;
        align-items: center;
        justify-content: space-around;
    }
    h3 {
        margin-left: 8%;
    }
    p {
        margin-left: 8%;
        font-size: 12px;
        color: #868E96;
    }
    
`
export const Section = styled.section`
    color: #fff;
    text-align: center;
    margin-top: 100px;
`