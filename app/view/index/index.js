require('../../static/avalon/mmRouter');
require('../../component/ms-index-login/ms-index-login.js');
require('../../component/ms-index-download/ms-index-download.js');

let vm = avalon.define({
    $id: 'index',

    currentPath: 'login',
    currentView: loadView('ms-index-login'),
});

avalon.router.add('/', function() {
    vm.currentPath = 'login';
    vm.currentView = loadView('ms-index-login');
});

avalon.router.add('/:id', function(id) {
    vm.currentPath = id;
    vm.currentView = loadView('ms-index-' + id);
});

avalon.history.start({
    root: '/',
    hashPrefix: '',
});

function loadView(view) {
    return '<xmp ms-widget="{is: \'' + view + '\', id: \'' + view + '\'}"></xmp>';
}
