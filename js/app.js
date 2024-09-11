import { id, getId, $todoInsert, $todoList } from "./vendor.js";
import {
    todoInsertHandler,
    removeHandler,
    modifyHandler,
    checkedHandler,
} from "./handler.js";
//대충 리스너 함수 모음
$todoList.addEventListener("click", removeHandler);
$todoList.addEventListener("click", modifyHandler);
$todoList.addEventListener("click", checkedHandler);
$todoInsert.addEventListener("submit", todoInsertHandler);
