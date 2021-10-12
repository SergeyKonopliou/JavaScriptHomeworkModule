let xhr = new XMLHttpRequest();
xhr.open("GET", "Task2.xml", true);
xhr.responseType = 'document';
xhr.send();

//Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
    if (xhr.status != 200) {
        alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
    } else {
        let responseObj = xhr.response;
        let table = "";
        let x = responseObj.getElementsByTagName("client");
        for (i = 0; i < x.length; i++) {
            table += `<tr><th scope="row">${i+1}</th><td>
                ${x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue}
                </td><td>
                ${x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue}
                </td><td>
                ${x[i].getElementsByTagName("adress")[0].childNodes[0].nodeValue}
                </td><td>
                ${x[i].getElementsByTagName("lastVisitDate")[0].childNodes[0].nodeValue}
                </td></tr>`;
        }


        document.getElementsByClassName("body")[0].innerHTML = table;
    }
};
