let button=document.querySelector(".get-in-touch-form__button");
button.addEventListener("click",(e)=>{
    e.preventDefault;
    const inputs=document.querySelectorAll(".get-in-touch-form__input");
    inputs.forEach((input)=>{
        if(input.value.length==0){
            input.style.border="2px solid #FF0000";
        }
    });
});
let cookieBlock=document.querySelector(".wrapper-cookie");
document.querySelector(".cookie__accept-button").addEventListener("click",()=>{
    cookieBlock.style.opacity=0;
    setInterval(()=>{
        cookieBlock.remove();
    },500)
})