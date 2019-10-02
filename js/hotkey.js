function onKeyDown(event) {
    if (!document.getElementById('answer-box')) return;
    let key = event.key;
    let serial = parseInt(document.getElementById('jump-btn-group').getElementsByClassName('mdui-btn-active')[0].innerHTML) - 1;
    switch(key) {
        case 'A':
        case 'B':
        case 'C':
        case 'D':
        case 'E':
        case 'F':
            if (key.charCodeAt(0) - 'A'.charCodeAt(0) >= answer_object.data[serial].options.length) break;
            document.getElementById('answer-form').getElementsByTagName('label')[key.charCodeAt(0) - 'A'.charCodeAt(0)].click();
            break;

        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        case 'f':
            if (key.charCodeAt(0) - 'a'.charCodeAt(0) >= answer_object.data[serial].options.length) break;
            document.getElementById('answer-form').getElementsByTagName('label')[key.charCodeAt(0) - 'a'.charCodeAt(0)].click();
            break;
        
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            if (parseInt(key) > answer_object.data[serial].options.length) break;
            document.getElementById('answer-form').getElementsByTagName('label')[parseInt(key) - 1].click();
            break;

        case 'ArrowLeft':
            document.getElementById('answer-box').getElementsByClassName('mdui-btn')[0].click();
            break;

        case 'ArrowRight':
            document.getElementById('answer-box').getElementsByClassName('mdui-btn')[1].click();
            break;
        
        default:
            break;
    }
}

(function() {
    window.addEventListener('keydown', onKeyDown, false);
})();
