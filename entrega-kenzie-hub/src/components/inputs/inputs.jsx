function InputComponent ({emailRegister, senhaRegister, errors}){
    return (
        <>
        <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Digite aqui seu Email' {...emailRegister('email')}/>
                    <p>{errors.email ?.message}</p>
        <label htmlFor='password'>Senha</label>
            <input type='password' placeholder='Digite aqui sua Senha' {...senhaRegister('password')} />
                    <p>{errors.password ?.message}</p>
        </>
    )
}
export default InputComponent