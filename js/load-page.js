function loadPage() {
    let cmds = getArgs(['list', 'exam']);
    switch(Object.keys(cmds).length) {
        case 0:
            window.addEventListener('load', loadExamPack, false);
            break;

        case 1:
            window.addEventListener('load', function() { loadExamList(cmds.list); }, false);
            break;

        case 2:
            window.addEventListener('load', function() { loadExam(cmds.list, cmds.exam); }, false);
            break;

        default:
            break;
    }
}

function getArgs(keys) {
    let link = window.location.href;
    if (link.split('?').length < 2) return {};
    let command_line = link.split('?')[1].split('&');
    let cmds = {};
    for (let i = 0; i < command_line.length; i ++) {
        if (keys.indexOf(command_line[i].split('=')[0]) == -1) continue;
        cmds[command_line[i].split('=')[0]] = command_line[i].split('=')[1];
    }
    return cmds;
}

(function() {
    loadPage();
})();
