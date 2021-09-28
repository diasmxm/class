/* При клике на кнопку Get started появляется модальное окно возможно с анимациями */
let btn = document.getElementById('modal_btn');
let modal = document.getElementById('modal');
let x = document.getElementById('close');
btn.onclick = function(){
    modal.style.display = "flex"
}
x.onclick = function(){
    modal.style.display = "none";
}