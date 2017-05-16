avalon.component('ms-index-login', {
    template: require('./ms-index-login.html'),
    defaults: {
        onInit: function(e) {
            vm = e.vmodel;
            console.log('init');
        },

        onDispose: function(e) {
            console.log('dispose');
        },
        username: '',
        password: '',

        labelUserName: 'User Name',
        labelPassword: 'Password',

        labelUserNameClass: '',
        labelPasswordClass: '',

        validate: {
            onManual: avalon.noop,
            onSuccess: function(reasons, event) {
                reasons.forEach(function(reason) {
                    if (reason.element.id === 'index-login-username') {
                        vm.labelUserNameClass = '';
                        vm.labelUserName = 'User Name';
                    } else if (reason.element.id === 'index-login-password') {
                        vm.labelPasswordClass = '';
                        vm.labelPassword = 'Password';
                    }
                });
            },
            onError: function(reasons, event) {
                reasons.forEach(function(reason) {
                    if (reason.element.id === 'index-login-username') {
                        vm.labelUserNameClass = 'has-error';
                        vm.labelUserName = reason.message;
                    } else if (reason.element.id === 'index-login-password') {
                        vm.labelPasswordClass = 'has-error';
                        vm.labelPassword = reason.message;
                    }
                });
            },
        },

        login: function(event) {
            console.log(vm.username + '' + vm.password);
        },
    },
});
