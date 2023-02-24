import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { TechContext } from '../../contexts/TechContext/TechContext'
import { yupResolver } from '@hookform/resolvers/yup'


function CreateTech (){

    
    const {addTech, setModalForm} = useContext(TechContext)

    const validateCreateForm = yup.object({
        title: yup.string().required('Digite uma linguagem de programação'),
        status: yup.string().required('Escolha um nível')
    }).required()
    const {register, handleSubmit, formState: {errors}}  = useForm({
        resolver: yupResolver(validateCreateForm)
    })
    

    return (
        <div className="tecInfors">
                <form className='modal' onSubmit={handleSubmit(addTech)}>
                    <div>
                        <h3>Cadastrar Tecnologia</h3>
                        <p className='closeModal' onClick={()=> setModalForm(false)}>x</p>
                            <label htmlFor="title">nome</label>
                                <input type="text" placeholder="linguagem" {...register('title')}/>
                                <p>{errors.title ?.message}</p>
                            <label htmlFor="status">Selecionar status</label>
                                <select name="status" id="" {...register('status')}>
                                    <option value="iniciante">Iniciante</option>
                                    <option value="intermediário">intermediário</option>
                                    <option value="avançado">avançado</option>
                                </select>
                                <p>{errors.status ?.message}</p>
                        <button type='submit'>Cadastrar Tecnologia</button>    
                    </div>
                </form>
            </div>
    )
}

export default CreateTech
