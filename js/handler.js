import { id, getId, $todoInsert, $todoList, $todoInput } from "./vendor.js";
//핸들러 모음
const todoInsertHandler = (e) => {
    e.preventDefault();
    if ($todoInsert.firstElementChild.value.trim() === "") {
        alert("아무것도 안할거니! 할 일을 적어조!");
        return; // 유효성 검증
    } else if ($todoInsert.firstElementChild.value.length > 10) {
        $todoInput.classList.add("tenWords");
        $todoInput.setAttribute("placeholder", "열 글자 지켜라 ㅡㅡ");
        $todoInput.value = "";
        return;
    } else {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", getId());
        $li.classList.add("todo-list-item");

        // label 요소 생성
        const $label = document.createElement("label");
        $label.classList.add("checkbox");
        // input (checkbox) 요소 생성
        const $checkbox = document.createElement("input");
        $checkbox.setAttribute("type", "checkbox");
        // span 요소 생성
        const $spanText = document.createElement("span");
        $spanText.classList.add("text");
        $spanText.textContent = $todoInsert.firstElementChild.value;
        // label 내부에 checkbox와 spanText를 추가
        $label.appendChild($checkbox);
        $label.appendChild($spanText);

        //모디파이 버튼 세팅
        const $modifyBtn = document.createElement("div");
        $modifyBtn.classList.add("modify");
        const $modifySpan = document.createElement("span");
        $modifySpan.setAttribute("class", "lnr lnr-undo");
        $modifyBtn.appendChild($modifySpan);
        //리무브 버튼 세팅
        const $removeBtn = document.createElement("div");
        $removeBtn.classList.add("remove");
        const $removeSpan = document.createElement("span");
        $removeSpan.setAttribute("class", "lnr lnr-cross-circle");
        $removeBtn.appendChild($removeSpan);

        //리스트 완성
        $li.appendChild($label);
        $li.appendChild($modifyBtn);
        $li.appendChild($removeBtn);

        //투두리스트추가
        $todoList.appendChild($li);
        //input창 초기화
        $todoInsert.firstElementChild.value = "";
        $todoInput.classList.remove("tenWords");
        $todoInput.setAttribute("placeholder", "할 일을 입력하세요");
    }
};
const removeHandler = (e) => {
    const $removeButton = e.target.closest(".remove");
    if (!$removeButton) {
        return;
    }
    $todoList.removeChild($removeButton.parentNode);
};
const modifyHandler = (e) => {
    const $modifyButton = e.target.closest(".modify");
    if (!$modifyButton) {
        return;
    }
    const $label = $modifyButton.parentNode.querySelector("label");

    if ($label.querySelector(".text")) {
        // label 안의 span.text 찾기
        const $spanText = $label.querySelector(".text");

        if ($spanText) {
            // 새로운 input 요소 생성
            const $inputField = document.createElement("input");
            $inputField.setAttribute("type", "text");
            $inputField.setAttribute("value", $spanText.textContent);
            // span 요소를 input 요소로 대체
            $label.replaceChild($inputField, $spanText);
        }
    } else if ($label.querySelector('input[type="text"]')) {
        const $inputField = $label.querySelector('input[type="text"]');

        if ($inputField.value.trim() !== "" && $inputField.value != null) {
            const $spanText = document.createElement("span");
            $spanText.classList.add("text");
            $spanText.textContent = $inputField.value;
            $label.replaceChild($spanText, $inputField);
        } else {
            alert("뭐라도 적으렴!");
        }
    }
};
const checkedHandler = (e) => {
    const $checkbox = e.target.closest("input");
    if (!$checkbox) {
        return;
    }
    const $checkboxSpan = $checkbox.parentNode.querySelector("span");
    $checkboxSpan.classList.toggle("checked");
};
export { todoInsertHandler, removeHandler, modifyHandler, checkedHandler };
