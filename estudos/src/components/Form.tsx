import React, { useState } from "react";

export const Form = () => {
    const [name, setName] = useState('')
    const [LastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    

    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    
    }
    const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value)
    }
    const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAge(event.target.value)
    }

    return (
        <div>
            Nome: <input type="text" onChange={handleChangeName} /> <br/>
            Sobrenome: <input type="text" onChange={handleChangeLastName} /> <br/>
            Idade: <input type="text" onChange={handleChangeAge} /> <br/>
            <hr/>
            Olá, {`${name} ${LastName}`}, tudo bem? <br/>
            Você tem {age} anos!
        </div>
    );  
}