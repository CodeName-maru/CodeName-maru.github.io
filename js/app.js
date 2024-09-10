let id = 4;
const getId =()=>{
    return ++id;
}
const $todoInsert = document.querySelector(".todo-insert");
const $todoList = document.querySelector(".todo-list")
const todoInsertHandler = (e)=>{
    e.preventDefault();
    if ($todoInsert.firstElementChild.value === '') {
        alert("아무것도 안할거니! 할 일을 적어조!");
        return; // 유효성 검증
      }
    else{
        const $li = document.createElement('li');
        $li.setAttribute('data-id', getId());
        $li.classList.add('todo-list-item');
        
        // label 요소 생성
        const $label = document.createElement('label');
        $label.classList.add('checkbox');
        // input (checkbox) 요소 생성
        const $checkbox = document.createElement('input');
        $checkbox.setAttribute('type', 'checkbox');
        // span 요소 생성 
        const $spanText = document.createElement('span');
        $spanText.classList.add('text');
        $spanText.textContent = $todoInsert.firstElementChild.value;
        // label 내부에 checkbox와 spanText를 추가
        $label.appendChild($checkbox);
        $label.appendChild($spanText);
        
        //모디파이 버튼 세팅
        const $modifyBtn = document.createElement('div');
        $modifyBtn.classList.add("modify")
        const $modifySpan =document.createElement('span');
        $modifySpan.setAttribute("class","lnr lnr-undo");;
        $modifyBtn.appendChild($modifySpan);
        //리무브 버튼 세팅
        const $removeBtn = document.createElement('div');
        $removeBtn.classList.add("remove")
        const $removeSpan =document.createElement('span');
        $removeSpan.setAttribute("class","lnr lnr-cross-circle");
        $removeBtn.appendChild($removeSpan);
        
        //리스트 완성
        $li.appendChild($label);
        $li.appendChild($modifyBtn);
        $li.appendChild($removeBtn);
        
        //투두리스트추가
        $todoList.appendChild($li);
        //input창 초기화
        $todoInsert.firstElementChild.value ='';
    }   
}
$todoList.addEventListener('click', (e) => {
    if (!e.target.matches('.todo-list > li > div.remove')) {
      return;
    }

    // 지금 이벤트가 발생된(X 버튼을 누른) 부모 요소 li를 제거
    $todoList.removeChild(e.target.parentNode);
  });
$todoInsert.addEventListener('submit',todoInsertHandler)