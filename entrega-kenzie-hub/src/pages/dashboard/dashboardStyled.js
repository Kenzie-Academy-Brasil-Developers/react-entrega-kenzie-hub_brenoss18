import styled from 'styled-components'

export const SectionTec = styled.section`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    div {
        display: flex;
        color: #fff;
        margin-top: 51px;
        justify-content: space-around;
        align-items: center;

        button {
            padding: 5px 10px;
            background-color: #212529;
            color: #fff;
            border: none;
            font-weight: 700;
            font-size: 20px;
            cursor: pointer;
        }
    }
    .hidden {
        display: none;
    }
    form {
        
        height: 100%;
        width: 100%;
        background-color: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        left: 0;
        margin: 0 auto;

        div {
        position: relative;
        display: flex;
        flex-direction: column;
        border-radius: 8px;
        margin: 200px auto;
        width: 296px;
        background-color: #212529;
        @media(max-width : 425px){
            margin-left: 12%;
        }
        p {
            position: absolute;
            right: 10px;
            top: 15px;
            cursor: pointer;
        }
        h3 {
            background-color: #343B41;
            width: 100%;
            padding: 20px 0;
            font-size: 11px;
            font-weight: 700;
            padding-left: 10px;
        }
        label {
            font-size: 9px;
            margin: 19px 0;
            align-self: flex-start;
            margin-left: 15px;
            font-weight: 400;
        }
        input {
            align-self: flex-start;
            margin-left: 15px;
            width: 264px;
            height: 38px;
            background-color: #343B41;
            border: none;
            color: #fff;
            border-radius: 4px;
        }
        input::placeholder {
            color: gray;
            padding-left: 10px;
        }
        select {
            align-self: flex-start;
            margin-left: 15px;
            width: 264px;
            height: 38px;
            background-color: #343B41;
            border: none;
            color: #fff;
            border-radius: 4px;

        }
        button {
            font-size: 12px;
            width: 264px;
            height: 38px;
            background-color: #FF577F;
            border: none;
            color: #fff;
            margin: 16px auto;
            border-radius: 4px;
            cursor: pointer;
        }
        }
        .saverAlt {
            background-color: #59323F;
        }
        .btnExcluir {
            background-color: #868E96;
        }
    }
    ul {
        background-color: #212529;
        margin: 28px auto;
        width: 90%;
        height: 416px;
        @media (min-width: 700px) {
            width: 70%;
        }
        li {
            color: #fff;
            list-style: none;
            display: flex;
            justify-content: space-around;
            width: 90%;
            padding: 12px 5px;
            text-align: center;
            background-color: #121214;
            margin: 22px auto;
            
            p{
                font-size: 14px;
                font-weight: 700;
                cursor: pointer;
            }
            .statusTech {
                font-size: 12px;
                font-weight: 400;
                color: #868E96;
                cursor: pointer;
            }
            .statusTech:hover {
                color: #fff;
            }
        }
        
    }

`