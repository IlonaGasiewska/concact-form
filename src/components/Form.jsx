import React, { useEffect, useState } from "react";
import FormHeading from "./FormHeading.jsx";
import Validation from "../validation.js";

function Form (){


    const [values, setValues] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: "",
        agree: ""
    });


    const [errors, setErrors] = useState({});
   
    function handleInput (event){
        const newObj = {...values,[event.target.name]: event.target.value}
        setValues(newObj)
    }
    
    function handleValidation (event){
        event.preventDefault()
        setErrors(Validation(values));
        const form = document.querySelector(".form");
        form.reset();
        setValues({
            name: "",
            surname: "",
            email: "",
            phone: "",
            message: "",
            agree: ""
        })
    }
    

    return (
        <form onSubmit={handleValidation} noValidate={true} method="post" acction="/" className="form" id="form">
            <FormHeading />
            <input onChange={handleInput} className="form-content-items" type="text" name="name" id="name" placeholder="Imię"/>
            {errors.name && <p className="error">{errors.name}</p>} 
            <input onChange={handleInput} className="form-content-items" type="text" name="surname" id="surname" placeholder="Nazwisko"/>
            {errors.surname && <p className="error">{errors.surname}</p>} 
            <input onChange={handleInput} className="form-content-items email" type="email" name="email" id="email" placeholder="Email *"/>
            {errors.email && <p className="error">{errors.email}</p>} 
            <input onChange={handleInput} className="form-content-items" type="tel"  name="phone" id="phone" placeholder="Numer telefonu *"/>
            {errors.phone && <p className="error">{errors.phone}</p>} 
            <textarea onChange={handleInput} className="form-content-items message" type="text" name="message" id="message" placeholder="Wiadomość"/>
            {errors.message && <p className="error">{errors.message}</p>} 
            <p className="require-information">* Pole wymagane</p>
            <input onChange={handleInput} className="form-checkbox agree" type="checkbox" name="agree" id="agree"/>
            <label className="form-checkbox-label" htmlFor="checkbox">Zapoznałam/em się z <a className="form-checkbox-label form-checkbox-label-link" href="/#">polityką prywatności</a>. *</label> 
            <input className="form-button" type="submit" value="Wyślij" />
        </form>
    );
}


export default Form;