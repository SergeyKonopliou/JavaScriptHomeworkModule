let count = 0;
let masImage = ["img/zaichiki-5.jpg", "img/hand.jpg", "img/lavenders.jpg", "img/spring-bird.jpg", "img/garden.jpg", "img/purple-flowers.jpg", "img/tree.jpg"];
let masNameImage = ["Bunny","Bouquet","Lavenders","Spring bird","Garden","Purple flowers","Tree"];

function changeImage() {
    if (count >= masImage.length) count = 0;
    else if (count == -1) count = 6;
    gallery_picture.innerHTML = `<img src=${masImage[count]} alt="picture" width="750" height="500">`;
    document.getElementsByClassName('bg-image')[0].style =
        `background-image:url(${masImage[count]})`;
    sign_picture.innerHTML = `${masNameImage[count]}`;
}
//можно реализовать пов = торное выполнение через setInterval или через рекурсивный setTimeout(создаем левую функцию например tick,внутри её вызываем или выполняем что нам нужно и setTimeout(tick, 5000) - рекурсивно опять вызываем её)
//let timerId = setInterval(() => changeImage(count++), 5000);
let timerId = setTimeout(function tick() {
    changeImage(count++);
    setTimeout(tick, 3000);
}, 3000);
right.onclick = () => changeImage(count++);
left.onclick = () => changeImage(count--);
