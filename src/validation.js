export default function Validation(values) {
    const errors ={}

    const namePattern =/^[^\s@]{0,32}$/;
    const surnamePattern =/^[^\s@]{0,48}$/; 
    const emailPattern =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;
    const phonePattern = /^[0-9]{6,15}$/;
    const phonePattern2 = /^[+]+[0-9]{6,15}$/;
    const messagePattern =/^.{0,250}$/;    

    if(!namePattern.test(values.name)){
        errors.name = "Imię jest za długie"
    }

    if(!surnamePattern.test(values.surname)){
        errors.surname = "Nazwisko jest za długie"
    }

    if(values.email === "") {
        errors.email = "Email jest wymagany";
    } else if (!emailPattern.test(values.email)){
        errors.email = "Podany email jest niepoprawny";
    }

    if(values.phone === ""){
        errors.phone = "Numer telefonu jest wymagany";
    } else if(!phonePattern.test(values.phone) && !phonePattern2.test(values.phone)){
        errors.phone = "Podany numer jest nieprawidłowy";
    }

    if(!messagePattern.test(values.message)){
        errors.message = "Wiadomość jest za długa"
    }

    if(values.agree !== "on"){
        errors.agree = "Pole jest wymagane";
        document.querySelector(".form-checkbox-label").style.color = "red";
        document.querySelector(".form-checkbox-label-link").style.color = "red";
    } else{
        document.querySelector(".form-checkbox-label").style.color = "";
        document.querySelector(".form-checkbox-label-link").style.color = "";
    }

    return errors
}