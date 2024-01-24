var listArray  = [];
console.log('listArray', listArray);

var saveButton = document.createElement("button"); 
 saveButton.innerText = "save";


function handleAdd(){
    var list = "";
    var inputValue = document.getElementById("todo-input").value;
    listArray.push(inputValue);
    
    console.log(listArray);
    listArray?.map((item, index) => {
        list += `  <input id = '${index}' type='text' value='${item} ' readonly/>
            <button onclick='handleList(${index})' >Delete </button>
            <button id='editBtn' onclick='handleEditList(${index})'>edit </button>
         ` ;
    });

    document.getElementById("todo-list").innerHTML = list;

    
    document.getElementById("todo-input").value = "";
        
}

function handleList(index){
    console.log("clicked");
    var filterData= listArray?.filter((item, ind) => {
        return index !== ind;
    })
    listArray = filterData;
    updateUI();
}

function updateUI() {
    var list = "";
    listArray?.map((item, index) => {
        list += `  <input id = '${index}' type='text' value='${item} ' readonly/>
            <button onclick='handleList(${index})' >Delete </button>
            <button id='editBtn' onclick='handleEditList(${index})'>edit </button>
         ` ;
    });

    document.getElementById("todo-list").innerHTML = list;

}


function handleEditList(index) {
  
    var currentEditField = document.getElementById(`${index}`);   
    console.log(currentEditField);

    if (currentEditField) {
        currentEditField.removeAttribute('readonly');
        currentEditField.focus();

        var myInpValue = currentEditField.value;

    
        // currentEditField.parentNode.appendChild(saveButton);
        currentEditField.parentNode.insertBefore(saveButton, currentEditField.nextSibling);
    
    
        saveButton.addEventListener("click" , () => {
            myInpValue = currentEditField.value;
            listArray.splice(index,1,myInpValue);
            console.log(listArray);
            currentEditField.setAttribute('readonly', true);
            saveButton.parentNode.removeChild(saveButton);
            updateUI();
        })
       
    }
    
    
}