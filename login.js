let userName=document.getElementById("txtUserName");
let pwd=document.getElementById("txtPwd");
let form=document.querySelector("form");

function validateInput(){

  //check username is empty
  if(userName.value.trim()===""){
     onError(userName, "Username cannot be empty");
  
  }else{
    onSuccess(userName);
  
  }
  //password check
if(pwd.value.trim()===""){
  onError(pwd, "password cannot be empty");

}else{
   
 onSuccess(pwd); 
}

if(userName.value.trim() && pwd.value.trim() != '' ) {
  window.location.href = "/";
  alert("Login successful") 
}
}
   



document.querySelector("button")
.addEventListener("click" , (event)=>{
    event.preventDefault();
validateInput();

});

function onSuccess(input){

  let parent=input.parentElement;
  let messageEle=parent.querySelector("small");
  messageEle.style.visibility="hidden";
  parent.classList.remove("error");
  parent.classList.add("success");

}
  function onError(input,message){
      let parent=input.parentElement;
      let messageEle=parent.querySelector("small");
      messageEle.style.visibility="visible";
      messageEle.innerText=message;
      parent.classList.add("error");
      parent.classList.remove("success");
  
}