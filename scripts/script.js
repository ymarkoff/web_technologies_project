let menuOn = false;
let menuJustClosed = false;

function toggle_menu() {
    if (menuJustClosed) {
        menuJustClosed = false;
        return;
    }

    if (!menuOn) {
        var elements = document.getElementsByClassName("MenuButton");

        Array.prototype.forEach.call(elements, element => {
            element.classList.add("WideButton");
        });

        var textElements = document.getElementsByClassName("MenuText");
        Array.prototype.forEach.call(textElements, element => {
            element.classList.remove('Invisible');
        });

        let closeButton = document.getElementById('close_button');
        closeButton.classList.remove('Invisible');

        menuOn = true;
    }
}

function toggle_menu_desktop() {
    if (!menuOn) {
        var elements = document.getElementsByClassName("MenuButtonDesktop");

        Array.prototype.forEach.call(elements, element => {
            element.classList.add("WideButton");
        });

        var textElements = document.getElementsByClassName("MenuText");
        Array.prototype.forEach.call(textElements, element => {
            element.classList.remove('Invisible');
        });

        let closeButton = document.getElementById('close_button');
        closeButton.classList.remove('Invisible');

        menuOn = true;
    }
}

function close_menu () {
    var elements = document.getElementsByClassName("MenuButton");

    Array.prototype.forEach.call(elements, element => {
        element.classList.remove("WideButton");
    });

    var textElements = document.getElementsByClassName("MenuText");
    Array.prototype.forEach.call(textElements, element => {
        element.classList.add('Invisible');
    });

    let closeButton = document.getElementById('close_button');
    closeButton.classList.add('Invisible');

    menuOn = false;
    menuJustClosed = true;
}

function close_menu_desktop () {
    var elements = document.getElementsByClassName("MenuButtonDesktop");

    Array.prototype.forEach.call(elements, element => {
        element.classList.remove("WideButton");
    });

    var textElements = document.getElementsByClassName("MenuText");
    Array.prototype.forEach.call(textElements, element => {
        element.classList.add('Invisible');
    });

    menuOn = false;
}

function validate_form (e) {
    let formName = document.querySelector('#form_name');
    let formEmail = document.querySelector('#form_email');
    let formMotivation = document.querySelector('#form_motivation');

    // Let's check the value of each input to see if it's empty(validation)
    if (formName.value == '') {
        alert("Name must be filled out");

        return;
    }
    if (formEmail.value == '') {
        alert("Email must be filled out");

        return;
    }
    if (formMotivation.value == '') {
        alert("Motivation must be filled out");

        return;
    }
    return;

}
