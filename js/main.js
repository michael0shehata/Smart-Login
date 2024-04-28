let LOGIN = document.querySelector("#LOGIN");
let REGISTER = document.querySelector("#REGISTER");
let User = document.querySelector("#User");
let GETSTARTED = document.querySelector("#GETSTARTED");
let GETSTARTEDlist = document.querySelector("#GETSTARTEDlist");
let UserNameInput = document.querySelector("#UserNameInput");
let UserEmailInput = document.querySelector("#UserEmailInput");
let PasswordInput = document.querySelector("#PasswordInput");
let Feedback= document.querySelectorAll("#validationServerUsernameFeedback");
let UserEmailUp = document.querySelector("#UserEmailUp");
let Passwordup = document.querySelector("#Passwordup");
let faled=document.querySelector("#faled");




let arrUserList;
if(localStorage.getItem("UserList") !=null){
    arrUserList=JSON.parse(localStorage.getItem("UserList"));
}
else{
    arrUserList=[];
}

LOGIN.addEventListener("click",function(){
    User.classList.replace("d-block","d-none");
    GETSTARTEDlist.classList.replace("d-block","d-none");
    GETSTARTED.classList.replace("d-none","d-block");
    for(let i=0;i<Feedback.length;i++){
        Feedback[i].classList.replace("null","d-none");
    }
    UserEmailUp.classList.replace("d-none","d-block");
    Passwordup.classList.replace("d-none","d-block");
    UserEmailInput.classList.replace("d-block","d-none");
    PasswordInput.classList.replace("d-block","d-none");
});
REGISTER.addEventListener("click",function(){
    User.classList.replace("d-none","d-block");
    GETSTARTEDlist.classList.replace("d-none","d-block");
    GETSTARTED.classList.add("d-none");
    for(let i=0;i<Feedback.length;i++){
        Feedback[i].classList.replace("d-none","null");  
    }
    UserEmailUp.classList.add("d-none");
    Passwordup.classList.add("d-none");
    UserEmailInput.classList.replace("d-none","d-block");
    PasswordInput.classList.replace("d-none","d-block");
    });

function REGISTERon(){
    if(UserName()==true&Passwordlist()==true&UserEmai()==true){
        let username={
            "UserNameInput":UserNameInput.value,
            "UserEmailInput":UserEmailInput.value,
            "PasswordInput":PasswordInput.value,
        }
        arrUserList.push(username);
        localStorage.setItem("UserList",JSON.stringify(arrUserList));
        clear();
    }
}   
function clear(){
    UserNameInput.value="";
    UserEmailInput.value="";
    PasswordInput.value="";
    UserEmailUp.value="";
    Passwordup.value="";
}
GETSTARTEDlist.addEventListener("click",REGISTERon);

function UserName(){
    const x=/^[A-Z]{0,1}[a-z]{3,8}$/;
    if(x.test(UserNameInput.value)==true){
        UserNameInput.classList.replace("is-invalid","is-valid");
        return true;
    }
    else{
        UserNameInput.classList.add("is-invalid");
        return false;
    }
}
function UserEmai(){
    const x=/@[a-z]{4,8}(.com)$/;
    if(x.test(UserEmailInput.value)==true){
        UserEmailInput.classList.replace("is-invalid","is-valid");
        return true;
    }
    else{
        UserEmailInput.classList.add("is-invalid");
        return false;
    }
}
function Passwordlist(){
    const x=/^([a-z]{4,8}[0-9]{1}||[0-9]{4,8}[a-z]{1})$/;
    if(x.test(PasswordInput.value)==true){
        PasswordInput.classList.replace("is-invalid","is-valid");
        return true;
    }
    else{
        PasswordInput.classList.add("is-invalid");
        return false;
    }
}
UserNameInput.addEventListener("input",function(){
    UserName();
});
UserEmailInput.addEventListener("input",function(){
    UserEmai();
});
PasswordInput.addEventListener("input",function(){
    Passwordlist();
});

function search(){
for(let i=0;i<arrUserList.length;i++){
if(arrUserList[i].UserEmailInput==UserEmailUp.value&&arrUserList[i].PasswordInput==Passwordup.value){
    localStorage.setItem("name",arrUserList[i].UserNameInput);
    clear();
    GETSTARTED.setAttribute("href","Home.html");
    faled.classList.replace("d-block","d-none");
    return true;
}
}
faled.classList.replace("d-none","d-block");
}
GETSTARTED.addEventListener("click",search);

