const titleName = '===============================\n現在持っているタスク一覧\n===============================';

const taskObj = [{'掃除':'机を片付ける'}, {'買い物':'牛乳を買う'}, {'運動':'散歩する'}];

const add = () => {
    console.log(titleName);

    for (let i = 0; i < taskObj.length; i++) {
        const task = taskObj[i];
        const taskName = Object.keys(task)[0];
        const taskDescription = Object.values(task)[0];
        console.log(`${i}: [内容] ${taskName}、[ジャンル] ${taskDescription}`);
    }

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    if (comformDialog === '追加') {
        const taskPrompt = prompt('タスクを入力してください。');
        const genrePrompt = prompt('ジャンルを入力してください。');
        const newTask = {};
        newTask[genrePrompt] = taskPrompt;
        taskObj.push(newTask);

        console.log(titleName);
        for (let i = 0; i < taskObj.length; i++) {
            const task = taskObj[i];
            const taskName = Object.keys(task)[0];
            const taskDescription = Object.values(task)[0];
            console.log(`${i}: [内容] ${taskName}、[ジャンル] ${taskDescription}`);
        }
    }
};

add();
