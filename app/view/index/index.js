alert($('div')[0]);

let vm = avalon.define({
    $id: 'test',
    name: '司徒正美',
    array: [11, 22, 33444],
});

setTimeout(function() {
    vm.array.set(0, 444);
}, 3000);
