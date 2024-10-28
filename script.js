let text = document.getElementById("textbar");
let todo = document.getElementById("todo");
let did = document.getElementById("did");
let x = [];

// console.log("hi");

function abc() {
    if (text.value !== '') {
        x.push(text.value); 
        const index = x.length; 

        todo.innerHTML += `
            <div>
                <li id="item-${index}">
                    <input type='checkbox' id='checkbox${index}' onclick="check(${index})"> 
                    <b id='b-${index}'>${text.value}</b>
                    <button id='delete${index}' onclick='deleter(${index})'>delete</button>
                </li>
            </div>
            <br>`;
        text.value = '';
        // console.log(x[x.length - 1]); 
    }
}
function check(id){
    // console.log(id);
    const checkbox = document.getElementById(`checkbox${id}`);
    let b = document.getElementById(`b-${id}`);
    if(checkbox){
    if(checkbox.checked){
        b.style.textDecoration='line-through';
    }
     else {
        b.style.textDecoration = 'none'; // Reset line-through if unchecked
    }
}   
}

function deleter(id) {
    // console.log(`Deleting item with ID: ${id}`);
    const item = document.getElementById(`item-${id}`);
    const checkbox = document.getElementById(`checkbox${id}`);
    if (checkbox.checked) {
        
        did.innerHTML += `<div><li>${x[id - 1]}</li></div>`;
        
        // Remove the item from the to-do list
        item.style.display = 'none';
    } 
}
