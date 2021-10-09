if (getCookie("name") != null) {
    location.assign('/JS_l4/userpage.html');
}
regForm.onsubmit = validateRegistrationInfo;


function validateRegistrationInfo() {
    let email = document.forms[0].email.value;
    let emailText = document.getElementsByClassName('alertEmail');
    let password = document.forms[0].pass.value;
    let passwordText = document.getElementsByClassName('alertPassword');
    let repeatePassword = document.forms[0].repeatPass.value;
    let repeatePasswordText = document.getElementsByClassName('alertRepeatePassword');

    if (!validateEmail(email)) {
        emailText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        emailText[0].style.opacity = 0;
    }

    if (!validatePassword(password) || password.length < 6) {
        passwordText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        if (document.querySelector(".alertPassword")) {
            passwordText[0].style.opacity = 0;
        }
    }

    if (validatePassword(password) && !validateRepeatePassword(password, repeatePassword)) {
        repeatePasswordText[0].style.opacity = 1;
        event.preventDefault();
    } else {
        repeatePasswordText[0].style.opacity = 0;
    }

    if (validateEmail(email) && validatePassword(password) && password.length > 6 && validateRepeatePassword(password, repeatePassword)) {
        let now = new Date();
        now.setTime(now.getTime() + 1 * 3600 * 4000);
        setCookie('name', email, now, "/");
        setCookie('password', password, now, "/");
        location.assign('/JS_l4/userpage.html');
    }
}


function validateEmail(email) {
    let validEmail = /^[\w.-]{3,}@[^\s@]+\.[^\s@]+$/;
    return validEmail.test(email);
}

function validatePassword(password) {
    let validPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/g;
    return validPassword.test(password);
}

function validateRepeatePassword(password, repeatePassword) {
    return password === repeatePassword;

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
