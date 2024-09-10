import {id,getId,$todoInsert,$todoList} from './vendor.js'
import {todoInsertHandler,removeHandler,modifyHandler,checkedHandler} from './handler.js'

$todoList.addEventListener('click', removeHandler)
$todoList.addEventListener('click', modifyHandler)
$todoList.addEventListener('click', checkedHandler)
$todoInsert.addEventListener('submit',todoInsertHandler)

