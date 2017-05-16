avalon.component('ms-index-download', {
    template: require('./ms-index-download.html'),
    defaults: {
        onInit: function(e) {
            vm = e.vmodel;
            console.log('init');
        },

        onDispose: function(e) {
            console.log('dispose');
        },
    },
});
