function validForm(){
    //alert("alert")

    var name = document.custom_form.name;
    var apellidop = document.custom_form.apellidop;
    var apellidom = document.custom_form.apellidom;
    var email = document.custom_form.email;
    var edad = document.custom_form.edad;
    var subject = document.custom_form.subject;
    var message = document.custom_form.message;
    var conditions = document.custom_form.conditions;

    //nombre y apellidos
    if(name.value == ""){
        name.nextElementSibling.style.display ="block";
        name.style.border ="1px solid #f00";
        return false
    }else{
        name.nextElementSibling.style.display ="none";
        name.style.border ="1px solid transparent";
    }
    if(apellidop.value == ""){
        apellidop.nextElementSibling.style.display ="block";
        apellidop.style.border ="1px solid #f00";
        return false
    }else{
        apellidop.nextElementSibling.style.display ="none";
        apellidop.style.border ="1px solid transparent";
    }
    if(apellidom.value == ""){
        apellidom.nextElementSibling.style.display ="block";
        apellidom.style.border ="1px solid #f00";
        return false
    }else{
        apellidom.nextElementSibling.style.display ="none";
        apellidom.style.border ="1px solid transparent";
    }
    //email
    if(!email.value.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email.value == ""){
        email.nextElementSibling.style.display ="block";
        email.style.border ="1px solid #f00";
        return false
    }else{
        email.nextElementSibling.style.display ="none";
        email.style.border ="1px solid transparent";
    }
    
    //edad
    if(!edad.value.match(/^[1-9]\d$/) || edad.value == ""){
        edad.nextElementSibling.style.display ="block";
        edad.style.border ="1px solid #f00";
        return false
    }else{
        edad.nextElementSibling.style.display ="none";
        edad.style.border ="1px solid transparent";
    }
    

    //subjet
    if(subject.value == ""){
        subject.nextElementSibling.style.display ="block";
        subject.style.border ="1px solid #f00";
        return false
    }else{
        subject.nextElementSibling.style.display ="none";
        subject.style.border ="1px solid transparent";
    }
    if(message.value == ""){
        message.nextElementSibling.style.display ="block";
        message.style.border ="1px solid #f00";
        return false
    }else{
        message.nextElementSibling.style.display ="none";
        message.style.border ="1px solid transparent";
    }
    if(conditions.checked == false){
        conditions.nextElementSibling.style.display ="block";
        conditions.style.border ="1px solid #f00";
        return false
    }else{
        conditions.nextElementSibling.style.display ="none";
        conditions.style.border ="1px solid transparent";
    }
}