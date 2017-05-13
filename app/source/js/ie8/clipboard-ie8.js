// eslint-disable-next-line no-unused-vars
function copyToClip(event) {
    var txt = event.getAttribute('data-clipboard-text');

    if (window.clipboardData && window.clipboardData.setData) {
        window.clipboardData.setData('Text', txt);
    }
}
