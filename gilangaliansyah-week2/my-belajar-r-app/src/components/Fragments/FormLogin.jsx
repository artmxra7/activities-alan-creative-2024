import React from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
const FormLogin = () => {
    return (
        <form action="">
        <InputForm label="Email" name="email" type="email" placeholder="example@mail"/>
        <InputForm label="Password" name="password" type="password" placeholder="example123"/>

       <Button variant="bg-blue-500 w-full">Login</Button>
     </form>
    );
};

export default FormLogin;