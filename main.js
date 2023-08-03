const titleName = '===============================\n現在持っているタスク一覧\n===============================';
const taskGenre = ['掃除','買い物','運動']
const taskContent = ['机を片付ける','牛乳を買う','散歩する']
const taskObj = {genreName:taskGenre,contentName:taskContent}

const add = () => {
    
    console.log(titleName);
    for(let i = 0; i<taskObj.genreName.length || i<taskObj.contentName.length; i++){
        console.log(taskObj.genreName[i]+''+':'+''+taskObj.contentName[i]);
    }

    const comformDialog = prompt('「確認、追加、削除、終了のいずれかを入力してください。」');
    const taskPrompt = prompt('タスクを入力してください。')
    const genrePrompt = prompt('ジャンルを入力してください。')
    taskGenre.push(taskPrompt);
    taskContent.push(genrePrompt);

    console.log(titleName);
    for(let i = 0; i<taskObj.genreName.length || i<taskObj.contentName.length; i++){
        console.log(taskObj.genreName[i]+''+':'+''+taskObj.contentName[i]);
    } 
}

add();