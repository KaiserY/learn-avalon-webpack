console.log($('div')[0]);

let vm = avalon.define({
    $id: 'bootflat',
    name: '司徒正美',
    array: [11, 22, 33],
});

setTimeout(function() {
    vm.array.set(0, 444);
}, 3000);
