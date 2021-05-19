let lastnameConsole = document.querySelector('#lastname-wrong');
let firstnameConsole = document.querySelector('#firstname-wrong');
let birthdayConsole = document.querySelector('#birthday-wrong');
let regnumberConsole = document.querySelector('#regnumber-wrong');
let passwordConsole = document.querySelector('#password-wrong');

function validateForm(){
    console.log("validate form is activated;");
    let lastname = document.forms["form"]["lastname"].value;
    let firstname = document.forms["form"]["firstname"].value;
    let date = new Date(document.forms["form"]["birthday"].value);
    let regnumber = document.forms["form"]["regnumber"].value;
    let password = document.forms["form"]["password"].value;
    let correct = true;
    
    
// checking if it's empty; (minimal requirement)

    if(lastname.length < 6){
        lastnameConsole.innerText = "5 аас дээш үсэг байх хэрэгтэй";
        correct= false;
    }
    if(firstname.length < 6){
        firstnameConsole.innerText = "5 аас дээш үсэг байх хэрэгтэй";
        correct = false;
    }
    if(date.length == 0){
        birthdayConsole.innerText = "Төрсөн он сараа оруулна уу.";
        correct = false;
    }
    if(regnumber.length < 6){
        regnumberConsole.innerText = "10 аас дээш үсэг ба тоо холилдсон байх";
        correct= false;
    }
    if(password.length == 0){
        passwordConsole.innerText = "Password хоосон байна.";
        correct = false;
    }
    else if(password.length < 6){
        passwordConsole.innerText = "6 аас дээш үсэг ба тооноос бүрдсэн байх хэрэгтэй";
        correct = false;
    }


// Password validator
    if(password.search(/[0-9]/) < 0){
        passwordConsole.innerText = "Тоо алга байна.";
        correct = false;
    }
    else if(password.search(/[A-Z]/)<0){
        passwordConsole.innerText = "Том үсэг байхгүй байна";
        correct = false;
    }
    else if(password.search(/[a-z]/)<0){
        passwordConsole.innerText = "Жижиг үсэг олдсонгүй";
        correct = false;
    }
    
// ID and Date validate;
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    
    // checking if regnumber is valid
    if(regnumber.length == 10){
        let regYear = regnumber.substring(2, 4);
        let regMonth = regnumber.substring(4, 6);
        let regDay = regnumber.substring(6, 8);
        
        if(parseInt(year) > 1999){
            regMonth = regMonth - 20;
        }
        
        if( year % 100 != parseInt(regYear)){
            regnumberConsole.innerText = "Он зөрж байна.";
            console.log(year.toString().substring(3,5));
            correct = false;
        }
        else if(month != regMonth){
            regnumberConsole.innerText = "Сар зөрж байна.";
            correct = false;
        }
        else if(day != regDay){
            regnumberConsole.innerText = "Өдөр зөрж байна.";
            correct = false;
        }
    }
    else{
        regnumberConsole.innerText = "Буруу Рэгистэрийн дугаар";
    }    
// Final logic
    if(correct){
        alert("goodjob");
        return true;
    }
    else{
        return false;
    }
}
