var localforage = require('localforage');
var viewitems = require('./viewitems');
var BootstrapDialog = require('bootstrap3-dialog');
require('bootstrap-notify');

try {
    var Clipboard = require('clipboard');

    new Clipboard('#copy-clipboard-js');
} catch (ex) {
    console.log('clipboard.js not working, maybe ie8 ?');
    console.log(ex);
    document.getElementById('copy-clipboard-js').setAttribute('onclick', 'copyToClip4ie8(this)');
}

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

    notify: function() {
        $.notify('Hello World');
    },

    openDialog: function() {
        var shortContent = '<p>Something here.</p>';
        var longContent = '';
        for (var i = 1; i <= 200; i++) {
            longContent += shortContent;
        }
        BootstrapDialog.show({
            title: 'Another long dialog',
            message: longContent,
        });
        BootstrapDialog.show({
            title: 'Another short dialog',
            message: shortContent,
            draggable: true,
        });
        BootstrapDialog.show({
            title: 'A long dialog',
            message: longContent,
            draggable: true,
        });
        BootstrapDialog.show({
            title: 'A short dialog',
            message: shortContent,
        });
    },

    changeInput: function() {

    },
});

console.log(vm.logoItem.src);
