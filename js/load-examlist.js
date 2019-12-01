function loadExamPack() {
    let card_container = document.getElementById('card-container');
    card_container.innerHTML = '';
    for (let i = 0; i < examlist.length; i ++) {
        card_container.innerHTML += 
        '<div class="mdui-card mdui-hoverable">' +
        '    <div class="mdui-card-primary">' +
        '        <div class="mdui-row">' +
        '            <span class="mdui-float-left mdui-card-primary-title">' + examlist[i].name + '</span>' +
        '            <div class="tags-group">' +
        '               <div class="mdui-chip"><a class="mdui-chip-title" onclick="loadExamPackType(\'' + examlist[i].type + '\')">' + examlist[i].type + '</a></div>' +
        '               <div class="mdui-chip"><a class="mdui-chip-title" onclick="loadExamPackGrade(this.innerHTML)">' + examlist[i].grades.join('</a></div><div class="mdui-chip"><a class="mdui-chip-title" onclick="loadExamPackGrade(this.innerHTML)">') + '</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="mdui-card-actions">' +
        '        <button class="mdui-btn mdui-color-theme-accent" onclick="loadExamList(' + i + ')">进入题库</button>' +
        '    </div>' +
        '</div>';
    }
    let here = document.getElementsByClassName('mdui-toolbar')[0].getElementsByClassName('mdui-typo-title')[0];
    here.innerHTML = '题库列表';
    document.getElementsByTagName('title')[0].innerHTML = '四川教育测评平台题库';
    document.getElementById('show-submit-btn').classList.add('mdui-hidden');
    window.history.pushState('', '', 'index.html');
}

function loadExamList(serial) {
    let card_container = document.getElementById('card-container');
    card_container.innerHTML = '';
    card_container.innerHTML += '<button class="mdui-btn" onclick="loadExamPack()"><i class="mdui-icon material-icons">arrow_back</i> 返回</button>'
    for (let i = 0; i < examlist[serial].list.length; i ++) {
        card_container.innerHTML += 
        '<div class="mdui-card mdui-hoverable">' +
        '    <div class="mdui-card-primary">' +
        '        <div class="mdui-row">' +
        '            <span class="mdui-float-left mdui-card-primary-title">' + examlist[serial].list[i].name + '</span>' +
        '            <div class="tags-group">' +
        '               <div class="mdui-chip"><a class="mdui-chip-title">' + examlist[serial].list[i].tags.join('</a></div><div class="mdui-chip"><a class="mdui-chip-title">') + '</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="mdui-card-actions">' +
        '        <button class="mdui-btn mdui-color-theme-accent" onclick="loadExam(' + serial + ', ' + i + ')">进入试题</button>' +
        '    </div>' +
        '</div>';
    }
    let here = document.getElementsByClassName('mdui-toolbar')[0].getElementsByClassName('mdui-typo-title')[0];
    here.innerHTML = '试题列表';
    backList = serial;
    document.getElementsByTagName('title')[0].innerHTML = '试题列表 - 四川教育测评平台题库';
    document.getElementById('show-submit-btn').classList.add('mdui-hidden');
    window.history.pushState('', '', '?list=' + serial);
}

function loadExamPackType(type) {
    let card_container = document.getElementById('card-container');
    card_container.innerHTML = '';
    for (let i = 0; i < examlist.length; i ++) {
        if (examlist[i].type != type) continue;
        card_container.innerHTML += 
        '<div class="mdui-card mdui-hoverable">' +
        '    <div class="mdui-card-primary">' +
        '        <div class="mdui-row">' +
        '            <span class="mdui-float-left mdui-card-primary-title">' + examlist[i].name + '</span>' +
        '            <div class="tags-group">' +
        '               <div class="mdui-chip mdui-color-blue-accent"><a class="mdui-chip-title" onclick="loadExamPack()">' + examlist[i].type + '</a></div>' +
        '               <div class="mdui-chip"><a class="mdui-chip-title">' + examlist[i].grades.join('</a></div><div class="mdui-chip"><a class="mdui-chip-title">') + '</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="mdui-card-actions">' +
        '        <button class="mdui-btn mdui-color-theme-accent" onclick="loadExamList(' + i + ')">进入题库</button>' +
        '    </div>' +
        '</div>';
    }
    let here = document.getElementsByClassName('mdui-toolbar')[0].getElementsByClassName('mdui-typo-title')[0];
    here.innerHTML = '题库列表';
    document.getElementsByTagName('title')[0].innerHTML = '四川教育测评平台题库';
    document.getElementById('show-submit-btn').classList.add('mdui-hidden');
    window.history.pushState('', '', 'index.html');
}

function loadExamPackGrade(grade) {
    let card_container = document.getElementById('card-container');
    card_container.innerHTML = '';
    for (let i = 0; i < examlist.length; i ++) {
        if (examlist[i].grades.indexOf(grade) == -1) continue;
        let grade_text = '';
        for (let j = 0; j < examlist[i].grades.length; j ++)
            grade_text += '<div class="mdui-chip' + (examlist[i].grades[j] == grade ? ' mdui-color-blue-accent' : '') + '"><a class="mdui-chip-title" onclick="loadExamPack()">' + examlist[i].grades[j] + '</a></div>';
        card_container.innerHTML += 
        '<div class="mdui-card mdui-hoverable">' +
        '    <div class="mdui-card-primary">' +
        '        <div class="mdui-row">' +
        '            <span class="mdui-float-left mdui-card-primary-title">' + examlist[i].name + '</span>' +
        '            <div class="tags-group">' +
        '               <div class="mdui-chip"><a class="mdui-chip-title" onclick="loadExamPack()">' + examlist[i].type + '</a></div>' +
        '            ' + grade_text +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '    <div class="mdui-card-actions">' +
        '        <button class="mdui-btn mdui-color-theme-accent" onclick="loadExamList(' + i + ')">进入题库</button>' +
        '    </div>' +
        '</div>';
    }
    let here = document.getElementsByClassName('mdui-toolbar')[0].getElementsByClassName('mdui-typo-title')[0];
    here.innerHTML = '题库列表';
    document.getElementsByTagName('title')[0].innerHTML = '四川教育测评平台题库';
    document.getElementById('show-submit-btn').classList.add('mdui-hidden');
    window.history.pushState('', '', 'index.html');
}
