//let addButton = document.getElementsByClassName('select');
//addButton.addEventListener('click',add_book);

//let buttons = document.getElementsByClassName("select");
//for (let i = 0; i < buttons.length; i++) {
//  buttons[i].addEventListener("click",add_book);
//}

//function add_book(event) {
////    let name = document.getElementsByClassName('title')[0].innerHTML;
//    document.forms[0].elements[0].value = name;
//    document.forms[0].elements[1].value = 1;
//    let name_author = document.getElementsByClassName('author')[0].innerHTML;
//    document.forms[0].elements[2].value = name_author;
//}

window.onload = function () {
    let buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++)
        buttons[i].onclick = function () {
            let count;
            if (this.className == 'select1') {
                count = 0;
            } else if (this.className == 'select2') {
                count = 1;
            } else if (this.className == 'select3') {
                count = 2;
            }
            let name = document.getElementsByClassName('title')[count].innerHTML;
            document.forms[0].elements[0].value = name;
            document.forms[0].elements[1].value = 1;
        }
}

function buy() {
    let message = "";
    let book = document.forms[0].elements[0].value;
    let name = document.forms[0].elements[2].value;
    let date = document.forms[0].elements[4].value;
    let adress = document.forms[0].elements[3].value;
    //    alert(name + ",thanks for the order!\n\nBook " + book + "wil be delivered on " + date + " to " + adress);
    message += '<div>';
    message += `${name},thanks for the order!`;
    message += '<br>';
    message += '<br>';
    message += `Book ${book} wil be delivered on ${date} to ${adress}`;
    message += '</div>';
    mess.innerHTML = message;
    mess.style.display = 'block';
}
Buy.onclick = buy;
