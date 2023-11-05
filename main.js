const titleName = '===============================\n現在持っているタスク一覧\n===============================';

const tasks = [{genre:'掃除',taskName:'机を片付ける'}, {genre:'買い物',taskName:'牛乳を買う'}, {genre:'運動',taskName:'散歩する'}];

const add = () => {
    console.log(titleName);

    tasks.forEach (function(value,index) {
        console.log(`${index}:[内容]:${value.taskName},[ジャンル]:${value.genre}`);
    });

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    if (comformDialog === '追加') {
        const taskPrompt = prompt('タスクを入力してください。');
        const genrePrompt = prompt('ジャンルを入力してください。');
        const newTask = {genre:genrePrompt,taskName:taskPrompt};
        tasks.push(newTask);

        console.log(titleName);
        tasks.forEach (function(value,index){
            console.log(`${index}:[内容]:${value.taskName},[ジャンル]:${value.genre}`);
        });
    }
};

add();
