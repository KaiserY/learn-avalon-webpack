var localforage = require('localforage');
var viewitems = require('./viewitems');

try {
    var Clipboard = require('clipboard');

    new Clipboard('#copy-clipboard-js');
} catch (ex) {
    console.log('clipboard.js not working, maybe ie8 ?');
    console.log(ex);
}

$('[data-toggle=offcanvas]').click(function() {
    $('.row-offcanvas-left').toggleClass('active');
});

$('[data-toggle=offcanvas-right]').click(function() {
    $('.row-offcanvas-right').toggleClass('active');
});

localforage.config({
    name: 'app',
    version: 1.0,
    storeName: 'db',
});

localforage.setItem('key', 'value', function(err) {
    localforage.getItem('key', function(err, value) {
        console.log(value);
    });
});

let vm = avalon.define({
    $id: 'files',

    copyText: 'aaa',
    logoItem: viewitems.logoItem,
    sidenavItems: viewitems.sidenavItems,
    userItem: viewitems.userItem,
});

console.log(vm.logoItem.src);
