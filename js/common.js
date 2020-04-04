var poppup = document.querySelector('.poppup');
var poppupClose = document.querySelector('.poppup__bg');
var poppup2 = document.querySelector('.poppup2');
var poppupClose2 = document.querySelector('.poppup2__bg');
var close = document.querySelector('.poppup__content-image');
var close2 = document.querySelector('#poppup__close');

(function () {
    var btn = document.querySelector('.btn');

    var callback = document.querySelector('#callback');
    var request = document.querySelector('#request');

    btn.addEventListener('click', function (event) {
        addPoppup();
    });

    poppupClose.addEventListener('click', function (event) {
        removePoppup();
    });

    callback.addEventListener('click', function (event) {
        event.preventDefault();
        addPoppup();
    });

    request.addEventListener('click', function (event) {
        event.preventDefault();
        addPoppup2();
    });

    poppupClose2.addEventListener('click', function (event) {
        removePoppup2();
    });

    close.addEventListener('click', function (event) {
        removePoppup();
    });

    close2.addEventListener('click', function (event) {
        removePoppup2();
    });
})();

function addPoppup() {
    return poppup.classList.add('poppup--active');
}

function removePoppup() {
    return poppup.classList.remove('poppup--active');
}

function addPoppup2() {
    return poppup2.classList.add('poppup2--active');
}

function removePoppup2() {
    return poppup2.classList.remove('poppup2--active');
}