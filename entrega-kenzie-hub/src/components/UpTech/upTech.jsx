import { useContext, useState } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { TechContext } from '../../contexts/TechContext/TechContext'


function UpTech (){

    const validateFormEdit = yup.object({
        status: yup.string().required('Escolha um nível')
    }).required()
    const {register, handleSubmit, formState: {errors}}  = useForm({
        resolver: yupResolver(validateFormEdit)
    })
    

    const {setModalAtt, attTech, currentTech, user, setUser, DeleteTech} = useContext(TechContext)

    return (
        <div>
        <form className='modal' onSubmit={handleSubmit((data)=> attTech(data, currentTech.id))}>
            <div>
                <h3>{currentTech.title}</h3>
                <p className='closeModal' onClick={()=> setModalAtt(false)}>x</p>
                    <label htmlFor="status">Selecionar status</label>
                        <select name="status" id="" {...register('status')}>
                            <option value="iniciante">Iniciante</option>
                            <option value="intermediário">intermediário</option>
                            <option value="avançado">avançado</option>
                        </select>
                        <p>{errors.status ?.message}</p>
                <button type='submit' className='saverAlt' >Salvar Alterações</button>
                <button className='btnExcluir' onClick={()=>DeleteTech(currentTech.id)}>Excluir</button>    
            </div>
        </form>

        </div>
             
    )
}
export default UpTech