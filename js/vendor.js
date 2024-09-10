//데이터셋 배열단은 구현하기 넘무 귀찮아여.......
let id = 4;
const getId =()=>{
    return ++id;
}

const $todoInsert = document.querySelector(".todo-insert");
const $todoList = document.querySelector(".todo-list")

export {id,getId,$todoInsert,$todoList}
