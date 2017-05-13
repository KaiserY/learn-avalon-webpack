// require('bootstrap-loader');
require('../../static/avalon/mmRouter');

var vm = avalon.define({
    $id: 'router',
    currPath: '',

    toggleMenu: function(e) {
        console.log([].slice.call(arguments).join(' '));
        $('#wrapper').toggleClass('toggled');
    },
});

avalon.router.add('/aaa', function(a) {
    vm.currPath = this.path;
});

avalon.router.add('/bbb', function(a) {
    vm.currPath = this.path;
});

avalon.router.add('/ccc', function(a) {
    vm.currPath = this.path;
});

avalon.router.add('/ddd/:ddd/:eee', function(a) { // :ddd为参数
    vm.currPath = this.path;
});

avalon.router.add('/side/:id', function(id) {
    vm.currPath = this.path;
    console.log(id);
});

avalon.history.start({
    root: '/mmRouter',
});

avalon.scan(document.body);
