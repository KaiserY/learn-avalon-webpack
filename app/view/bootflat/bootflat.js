// require('../../static/bootstrap/js/bootstrap.js');
// require('bootstrap-loader');

console.log($('div')[0]);

avalon.define({
    $id: 'bootflat',
    name: '司徒正美',
    array: [11, 22, 33],

    buttonOnClick: function(e, a, b) {
        alert([].slice.call(arguments).join(' '));
    },
});
