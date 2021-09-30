(function () {

    //Задание 1
    //Создать html-страницу со светофором и кнопкой, которая
    //переключает светофор на следующий цвет.
    let masColor = ['red', 'yellow', 'green'];
    let count = 0;

    function changeColor() {
        if (count == 3) count = 0;
        console.log(count);
        for (let i = 0; i < 3; i++) {
            if (i == count) {
                document.getElementById(`${masColor[count]}`).style =
                    `background-color:${masColor[count]}`;
            } else {
                document.getElementById(`${masColor[i]}`).style =
                    'gray';
            }

        }
        count++;
    }

    next.onclick = changeColor;

    //------------------------------------------------------------

    //Задание 2
    //Создать html-страницу для отображения/редактирования текста.
    //При открытии страницы текст отображается с помощью тега
    //div. При нажатии Ctrl+E, вместо div появляется textarea с тем
    //же текстом, который теперь можно редактировать. При нажатии
    //Ctrl+S, вместо textarea появляет div с уже измененным текстом.
    //Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
    let viewElement = document.getElementById("view"),
        areaElement = document.getElementById("area");
    document.body.onkeydown = keyHandler;

    function keyHandler(event) {
        if (event.ctrlKey && (event.code === "KeyS" || event.code === "KeyE")) {
            //Предотвращение стандартного действия в Windows при нажатии этих сочетаний клавиш
            event.preventDefault();
            if (event.code === "KeyS") {
                area.style.display = "";
                view.style.display = "block";
                view.textContent = areaElement.value;
            } else {
                //доп проверка что при повторном нажатии Ctrl+E изменения не удалятся
                if (!area.style.display) {
                    area.style.display = "block";
                    view.style.display = "none";
                    areaElement.value = view.textContent;
                }
            }
        }
        //если активен режим редактирования и нажать Esc,то выйдем из режима редактирования
        if (event.code === "Escape" && area.style.display) {
            area.style.display = "";
            view.style.display = "block";
        }
    }

    //------------------------------------------------------------

    //Задание 3

    function createCalendar() {
        //считываем значения месяца и года после нажатия кнопки,иначе не запишутся(проинициализируются как пустые до ввода и нажатия кнопки)
        let month = +entermonth.value;
        let year = +enteryear.value;

        let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
        let d = new Date(year, mon);

        let table = '<table><tr><th>MON</th><th>TUE</th><th>WED</th><th>THU</th><th>FRI</th><th>SUT</th><th>SUN</th></tr><tr>';

        // пробелы для первого ряда
        // с понедельника до первого дня месяца
        // * * * 1  2  3  4
        for (let i = 0; i < getDay(d); i++) {
            table += '<td style ="background-color:grey"></td>';
        }

        // <td> ячейки календаря с датами
        while (d.getMonth() == mon) {
            table += '<td>' + d.getDate() + '</td>';

            if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
                table += '</tr><tr>';
            }
            //getDate возвращает день месяца (от 1 до 31) ввиде числа,setDate устанавливает переданное число дня 
            d.setDate(d.getDate() + 1);
        }

        // добить таблицу пустыми ячейками, если нужно
        // 29 30 31 * * * *
        if (getDay(d) != 0) {
            for (let i = getDay(d); i < 7; i++) {
                table += '<td style ="background-color:grey"></td>';
            }
        }

        // закрыть таблицу
        table += '</tr></table>';

        calendar.innerHTML = table;
    }

    function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
        let day = date.getDay();
        if (day == 0) day = 7; // сделать воскресенье (0) последним днем
        return day - 1;
    }

    generate.onclick = createCalendar;

}());
