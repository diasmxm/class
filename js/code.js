/* При клике на кнопку Get started появляется модальное окно возможно с анимациями */
let str = "Hello";
let number = 42;
let y;
let bool = true;
let bool2 = false;
let obj = {
    id: 1,
    name: "Имя",
    price: 2000,
    newPrice: 1600,
    getDiscount: function () {
        return `ваша скидка ${(this.price - this.newPrice) / (this.price / 100)}%`;
    },
};
console.log(obj.id);
console.log(obj.name);
console.log(obj.price);
console.log(obj.newPrice);
console.log(obj.getDiscount());
console.log(obj.y);

const btn = document.getElementById('modal_btn');
const modal = document.getElementById('modal');
const x = document.getElementById('close');
const btn_submit = document.querySelector("form button");
const inputs = document.querySelectorAll("form input");
btn.onclick = function(){
    modal.style.display = "flex"
}
x.onclick = function(){
    modal.style.display = "none";
}
btn_submit.onclick = function (event) {
    console.log(event);
    event.preventDefault();
    if(inputs[0].value == ''){
        alert("Вы забыли ввести имя")
    }
    if(inputs[1].value == ''){
        alert("Вы забыли ввести почту")
    }
};