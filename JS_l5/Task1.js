//все методы jQuery находятся внутри события готовности документа для предотвращения запуска любого кода jQuery до того, как документ завершит загрузку
$(document).ready(function () {

    let dishes = ['Греческий', 'Цезарь', 'Тёплый салат с куриной печенью', 'Оливье', 'Морской'];
    let prices = [320, 430, 300, 350, 450];
    $("h1").css("width", "400px");
    $("h1").css("height", "45px");
    $("h1").css("padding-left", "80px");
    $("h1").css("color", "#3D9CC0");
    $("h1").css("border-bottom", "1px solid gray");
    $("h1").css("border-radius", "20px");
    $("h1").css("box-shadow", "6px 6px 6px #a7a7a7");
    $("body").append('<img style="position:absolute; left:40px; top:20px;width:40px; height:40px;" src="img/images.png"; />');
    $("#menu").css("list-style-image", "none");
    for (let i = 0; i < dishes.length; i++) {
        let dishName = $("<li></li>");
        let name = $("<span></span>").text(`"${dishes[i]}"`);
        $(name).attr('class', 'name');
        let price = $("<span></span>").text(`${prices[i]}`);
        $(price).attr('class', 'price');
        dishName.append(name, price);
        $("#menu").append(dishName);
        $(".name").css("color", "#767778");
        $(".price").css("color", "#CF9B77");
        $(dishName).css("width", "400px");
        $(dishName).css("display", "flex");
        $(dishName).css("justify-content", "space-between");
        $(dishName).css("font-size", "22px");
    }

});
