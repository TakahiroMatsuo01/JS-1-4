const titleName = '===============================\n現在持っているタスク一覧\n===============================';

const taskObj = [{genre:'掃除',taskName:'机を片付ける'}, {genre:'買い物',taskName:'牛乳を買う'}, {genre:'運動',taskName:'散歩する'}];

const add = () => {
    console.log(titleName);

    for (let i = 0; i < taskObj.length; i++) {
        const task = taskObj[i];
        const taskName_value = task.genre;
        const taskDescription = task.taskName;
        console.log(`${i}: [内容] ${taskName_value}、[ジャンル] ${taskDescription}`);
    }

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    if (comformDialog === '追加') {
        const taskPrompt = prompt('タスクを入力してください。');
        const genrePrompt = prompt('ジャンルを入力してください。');
        const newTask = {genre:genrePrompt,taskName:taskPrompt};
        taskObj.push(newTask);

        console.log(titleName);
        for (let i = 0; i < taskObj.length; i++) {
            const task = taskObj[i];
            const taskName_value = task.taskName;
            const taskDescription = task.genre;
            console.log(`${i}: [内容] ${taskName_value}、[ジャンル] ${taskDescription}`);
        }
    }
};

add();
