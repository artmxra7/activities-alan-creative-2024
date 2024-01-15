import React from 'react';
import Button from '../Elements/Button';
import InputForm from '../Elements/Input';
const FormRegister = () => {
    return (
        <form action="">
            <InputForm label="fullname" name="fullname" type="text" placeholder="isnsert your name here"/>
            <InputForm label="Email" name="email" type="email" placeholder="example@mail"/>
            <InputForm label="Password" name="password" type="password" placeholder="example123"/>
            <InputForm label="confirm password" name="confirm password" type="password" placeholder="confirm password"/>

            <Button variant="bg-blue-500 w-full">Register</Button>
     </form>
    );
};

export default FormRegister;