function loadPage() {
    let cmds = getArgs(['list', 'exam']);
    switch(Object.keys(cmds).length) {
        case 0:
            loadExamPack();
            let wish_dlg = new mdui.Dialog('#wish-dialog');
            wish_dlg.open();
            break;

        case 1:
            loadExamList(cmds.list);;
            break;

        case 2:
            loadExam(cmds.list, cmds.exam);
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
    window.addEventListener('load', loadPage, false);
})();
