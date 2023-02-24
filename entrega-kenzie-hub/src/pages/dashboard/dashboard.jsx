import { Main, Section } from '../../styled/globalStyled'
import { useNavigate } from 'react-router-dom'
import HeaderComponent from '../../components/header/header'
import { useContext, useEffect, useState } from 'react'
import { userContext } from '../../contexts/userContexts/userContexts'
import { SectionTec } from './dashboardStyled'
import { TechContext } from '../../contexts/TechContext/TechContext'
import CreateTech from '../../components/CreateTech/CreateTech'
import UpTech from '../../components/UpTech/upTech'

function DashBoard (){

    const {user, setUser} = useContext(userContext)
    const {modalAtt, modalForm, setModalAtt, setModalForm, currentTech, setCurrentTech} = useContext(TechContext)

    const navigate = useNavigate()

    function logoOut (){ 
        setUser('')
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <>
        <HeaderComponent toLogin={logoOut} TextButton={'sair'}/>

            <Main>
                <h3>Olá, {user.name}</h3>
                <p>{user.course_module}</p>

            </Main>

        <SectionTec className='tec'>
            <div>
                <p>Tecnologias</p>
                <button onClick={()=>setModalForm(true)}>+</button>
            </div>
            {modalForm ? <CreateTech/>: null}
            {modalAtt ? <UpTech/>: null}
            

            <ul>
                {user.techs.map((element, index) => {
                return  <li key={index} onClick={()=> {
                    setCurrentTech(element)
                    setModalAtt(true)
                    }}>
                            <p>{element.title}</p>
                            <p className='statusTech'>{element.status}</p>
                        </li>
                })}
                
            </ul>

        </SectionTec>
        </>
    )
}
export default DashBoard