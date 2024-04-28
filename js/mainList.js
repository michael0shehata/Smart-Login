let LogOut=document.querySelector("#LogOut");
let come=document.querySelector("h1");



let arrUserList;
if(localStorage.getItem("name") !=null){
    arrUserList=localStorage.getItem("name");
    console.log(arrUserList);
}
else{
    arrUserList="";
}

come.innerHTML=`welcome ${arrUserList}`;

LogOut.addEventListener("click",function(){
    LogOut.setAttribute("href","index.html");
});
