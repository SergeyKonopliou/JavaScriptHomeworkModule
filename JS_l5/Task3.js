(async () => { //код нужно запускать в асинхронной функциинужно запускать в асинхронной функции
    let url = 'JSON_Task3/users.json';
    let response = await fetch(url);

    if (response.ok) {
        let json = await response.json();
        createTable(json);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }

    function createTable(json) {
        let table = "";
        for (i = 0; i < json.length; i++) {
            table += `<tr><th scope="row">${i+1}</th><td>
                ${json[i].login}
                </td><td>
                ${json[i].email}
                </td><td>
                ${json[i].password}
                </td></tr>`;
        }

        document.getElementsByClassName("body")[0].innerHTML = table;
    }
})();
