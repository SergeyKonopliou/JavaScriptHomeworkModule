let email = getCookie("name");
let password = getCookie("password");
let welcomeText = document.getElementById('hello');
welcomeText.innerText = `Hello,${email}!\u00A0`;


function exitAction() {
//    document.cookie = "path=/;name=;expires=" + new Date(0).toUTCString();
//    document.cookie = "path=/;password=;expires=" + new Date(0).toUTCString();
    delete_cookie("name");
    delete_cookie("password")
    location.assign(document.getElementsByClassName('head')[0].childNodes[2].href = `/JS_l4/regpage.html`);
}

//чтобы удалить куки с другой страницы,нужно указывать путь
function delete_cookie(name) {
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset)
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return (setStr);
}

document.getElementsByClassName('head')[0].childNodes[2].onclick = exitAction;
