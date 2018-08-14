var pageIndex = 0;
var pages = [
    'main',
    'introduction'
];
var pageButtons = [
    'btn-header-main',
    'btn-header-introduction'
];

function prevPage() {
    if (pageIndex > 0) {
        goToPage(pages[pageIndex - 1]);
    }
}

function nextPage() {
    if (pageIndex < pages.length - 1) {
        goToPage(pages[pageIndex + 1]);
    }
}

function goToPage(id) {
    var index = pages.indexOf(id);

    if (index >= 0) {
        pageIndex = index;
        location.href = location.pathname + '#' + id;


        var buttons = document.getElementsByClassName('btn-header')


        for (let index = 0; index < buttons.length; index++) {
            const element = buttons[index];
            element.className = 'btn btn-header'
        }


        var btn = document.getElementById(pageButtons[index]);
        btn.className += ' btn-pressed'


        hideMenu();
    }
}

function showOrHideMenu() {
    if (document.getElementById('div-header-buttons').className == 'div-header-buttons') {
        showMenu();
    }
    else {
        hideMenu();
    }
}

function showMenu() {
    var divButtons = document.getElementById('div-header-buttons');
    var btnExibeMenu = document.getElementById('btn-show-menu');
    divButtons.className += ' show-div-header-buttons-responsive'
    btnExibeMenu.classList += ' btn-pressed';
    btnExibeMenu.textContent = 'Ocultar'
}

function hideMenu() {
    var divButtons = document.getElementById('div-header-buttons');
    var btnExibeMenu = document.getElementById('btn-show-menu');
    divButtons.className = 'div-header-buttons'
    btnExibeMenu.classList = 'btn btn-show-menu';
    btnExibeMenu.textContent = 'Menu'
}

//#region ON LOAD

function getPage() {
    var id = location.hash.replace('#', '');

    if (id) {
        goToPage(id);
    }
    else {
        var btn = document.getElementById(pageButtons[0]);
        btn.className += ' btn-pressed'
    }
}

window.onload = () => {
    window.addEventListener('click', (e) => {
        var header = this.document.getElementById('page-header');
        if (!header.contains(e.target)) {
            hideMenu();
        }
    });

    getPage();
}

//#endregion