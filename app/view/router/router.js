// require('bootstrap-loader');
require('../../static/avalon/mmRouter');

function heredoc(fn) {
    return fn.toString().replace(/^[^\/]+\/\*!?\s?/, '').
    replace(/\*\/[^\/]+$/, '').trim().replace(/>\s*</g, '><');
}
avalon.component('ms-number', {
    template: heredoc(function() {
        /*
         <div cached="true">{{@num}}<input :duplex-number="@num"/>
         <button type="button" :on-click="@onPlus">+++</button>
         </div>
         */
    }),
    defaults: {
        num: 1,
        onPlus: function() {
            this.num++;
        },
        onDispose: function() {
            console.log('dispose');
        },
    },
});
avalon.component('ms-header', {
    template: heredoc(function() {
        /*
         <div cached="true">
         <h4>{{@title}}</h4>
         <p><button type="button" :on-click="@onChangeTitle">change</button></p>
         </div>
         */
    }),
    defaults: {
        title: '这是标题',
        onChangeTitle: function(e) {
            this.title = '改变了title' + (new Date - 0);
        },
        onDispose: function() {
            console.log('dispose');
        },
    },
});

var vm = avalon.define({
    $id: 'router',
    view: '',
});

avalon.router.add('/', function() {
    var id = 'ms-header';
    console.log(id);

    // vm.view = '<' + id + ' cached="true" ms-widget="{$id:\'' + id + '\'}"></' + id + '>';
    vm.view = '<xmp is="' + id + '"></xmp>';
});

avalon.router.add('/:id', function(id) {
    console.log(id);

    // vm.view = '<' + id + ' cached="true" ms-widget="{$id:\'' + id + '\'}"></' + id + '>';
    vm.view = '<xmp is="' + id + '"></xmp>';
});

avalon.history.start({
    root: '/',
    hashPrefix: '',
});

// window.addEventListener('hashchange', function(e) {
//     var hash = e.newURL.split('#/')[1];
//     vm.view = '<' + hash + ' cached="true" ms-widget="{$id:\'' + hash + '\'}"></' + hash + '>';
// });

// avalon.scan(document.body);

// avalon.router.navigate('ms-header', 1);
