const titleName = '===============================\n現在持っているタスク一覧\n===============================';

const taskObj = [{'掃除':'机を片付ける'}, {'買い物':'牛乳を買う'}, {'運動':'散歩する'}];


const add = () => {
    console.log(titleName);
    for (let i = 0; i < taskObj.length; i++) {
    console.log(`${i} + ':' + '[内容]' + ${list(taskObj[i].keys())[i]}+ '、' + '[ジャンル]' +${list(taskObj[i].values())[i]}`);
    }

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    const taskPrompt = prompt('タスクを入力してください。');
    const genrePrompt = prompt('ジャンルを入力してください。');
    taskObj.keys.push(genrePrompt);
    taskContent.push(taskPrompt);

    console.log(titleName);
        for (let i = 0; i < taskObj.genreName.length && i < taskObj.contentName.length; i++) {
            console.log(`${i} + ':' + '[内容]' + ${list(taskObj[i].keys())[i]} + '、' + '[ジャンル]' + ${list(taskObj[i].values())[i]}`);
    }
};

add();
