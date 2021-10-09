let email = getCookie("name");
let password = getCookie("password");
let welcomeText = document.getElementById('hello');
welcomeText.innerText = `Hello,${email}!\u00A0`;

if (getCookie("firstName") != null) {
    document.forms[0].fname.value = getCookie("firstName");
    document.forms[0].lname.value = getCookie("lastName");
    document.forms[0].year.value = getCookie("year");
    document.forms[0].phone.value = getCookie("phone");
    document.forms[0].gender.value = getCookie("gender");
    document.forms[0].skype.value = getCookie("skype");

}

function exitAction() {
    delete_cookie("name");
    delete_cookie("password");
    delete_cookie("firstName");
    delete_cookie("lastName");
    delete_cookie("year");
    delete_cookie("phone");
    delete_cookie("gender");
    delete_cookie("skype");
    location.assign(document.getElementsByClassName('head')[0].childNodes[2].href = `/JS_l4/regpage.html`);
}

//чтобы удалить куки с другой страницы,нужно указывать путь
function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name) {
    let cookie = " " + document.cookie;
    let search = " " + name + "=";
    let setStr = null;
    let offset = 0;
    let end = 0;
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

function setCookie(name, value, max, path, domain, secure) {
    document.cookie = name + "=" + escape(value) +
        ((max) ? "; expires=" + max.toUTCString() : "") +
        ((path) ? "; path=" + path : "") +
        ((domain) ? "; domain=" + domain : "") +
        ((secure) ? "; secure" : "");
}

function validateUserInfo() {
    let firstName = document.forms[0].fname.value;
    let firstNameText = document.getElementsByClassName('alertFirstName');
    let lastName = document.forms[0].lname.value;
    let lastNameText = document.getElementsByClassName('alertLastName');
    let year = document.forms[0].year.value;
    let yearText = document.getElementsByClassName('alertYear');
    let phone = document.forms[0].phone.value;
    let phoneText = document.getElementsByClassName('alertPhone');
    let gender = document.forms[0].gender.value;
    let skype = document.forms[0].skype.value;

    if (!validateName(firstName)) {
        firstNameText[0].style.opacity = 1
        event.preventDefault();
    } else {
        firstNameText[0].style.opacity = 0;
    }

    if (!validateName(lastName)) {
        lastNameText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        lastNameText[0].style.opacity = 0;
    }


    if (!validateYear(year)) {
        yearText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        yearText[0].style.opacity = 0;
    }
    
    if (!validatePhone(phone) || phone.length < 10 || phone.length > 12) {
        phoneText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        phoneText[0].style.opacity = 0;
    }

    if (validateName(firstName) && validateName(lastName) && validateYear(year)&&
       validatePhone(phone)) {
        let now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 4000);
        setCookie('firstName', firstName, now, "/");
        setCookie('lastName', lastName, now, "/");
        setCookie('year', year, now, "/");
        setCookie('phone', phone, now, "/");
        setCookie('gender', gender, now, "/");
        setCookie('skype', skype, now, "/");
        document.forms[0].fname.value = "";
        document.forms[0].lname.value = "";
        document.forms[0].year.value = "";
        document.forms[0].phone.value = "";
        document.forms[0].gender.value = "";
        document.forms[0].skype.value = "";
    }
}

function validateName(name) {
    let validName = /^[a-zа-я]*$/i;
    return validName.test(name);
}

function validateYear(year) {
    let validYear = /^([\d]{2}\.){2}[\d]{4}$/;
    return validYear.test(year);
}

function validatePhone(phone) {
    let validPhone = /^[\d\ \(\)\-]*$/;
    return validPhone.test(phone);
}

document.getElementsByClassName('head')[0].childNodes[2].onclick = exitAction;
saveButton.onclick = validateUserInfo;
