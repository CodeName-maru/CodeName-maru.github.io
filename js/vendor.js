let id = 4;
const getId = () => {
    return ++id;
};

const todos = [
    {
        id: 1,
        text: "할 일 1",
        done: false, // checkbox를 클릭해서 할 일을 마쳤는지의 여부
    },
    {
        id: 2,
        text: "할 일 2",
        done: false, // checkbox를 클릭해서 할 일을 마쳤는지의 여부
    },
    {
        id: 3,
        text: "할 일 3",
        done: false, // checkbox를 클릭해서 할 일을 마쳤는지의 여부
    },
    {
        id: 4,
        text: "할 일 4",
        done: false, // checkbox를 클릭해서 할 일을 마쳤는지의 여부
    },
];

//데이터셋 배열단은 구현하기 넘무 귀찮아여.......

const $todoInsert = document.querySelector(".todo-insert");
const $todoList = document.querySelector(".todo-list");
const $todoInput = document.getElementById("todo-text");
export { id, getId, todos, $todoInsert, $todoList, $todoInput };
