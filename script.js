let text = document.getElementById("textbar");
let todo = document.getElementById("todo");
let did = document.getElementById("did");
let x = [];
let b = document.getElementById('textbar');
b.addEventListener("keydown",(event)=>{
    if(event.key=='Enter'){
       
            if (text.value !== '') {
                x.push(text.value); 
                const index = x.length; 
        
                todo.innerHTML += `
                   
                        <li id="item-${index}">
                            <input type='checkbox' id='checkbox${index}' onclick="check(${index})" class='c'>
                            <b id='b-${index}'class='display-5'>${text.value}</b>
                            <button id='edit${index}' onclick='editer(${index})' class='btn btn-outline-danger'>edit</button>
                            <button id='delete${index}' onclick='deleter(${index})' class='btn btn-outline-primary'>delete</button>
                        </li>`;
                text.value = '';
               
            }
        
    }
})
// console.log("hi");

function abc() {
    if (text.value !== '') {
        x.push(text.value); 
        const index = x.length; 

        todo.innerHTML += `
           
                <li id="item-${index}">
                    <input type='checkbox' id='checkbox${index}' onclick="check(${index})" class='c'> 
                    <b id='b-${index}'class='display-5'>${text.value}</b>
                    <button id='edit${index}' onclick='editer(${index})' class='btn btn-outline-danger'>edit</button>
                    <button id='delete${index}' onclick='deleter(${index})' class='btn btn-outline-primary'>delete</button>
                </li>`;
        text.value = '';
        // console.log(x[x.length - 1]); 
    }
}
function editer(index){
    const tex = document.getElementById(index);
    const s = document.createElement('span');
    let c  = document.getElementById(`b-${index}`);
    const t = document.getElementById(`item-${index}`);
    s.style.marginTop='20px';
    s.style.width='100%';
    s.style.height='auto';
    s.style.backdropFilter='blur';
    s.style.zIndex='2';
    s.style.display='flex';
    s.style.placeItems='center';
    s.style.justifyContent='center';
    s.style.flexWrap='wrap';
    s.id=`span-${index}`
    s.innerHTML +=`<input type='text' class='form-control' value='${c.innerHTML}' id='in-${index}' style='
      margin:1.5px;
      padding:2px;
      width:80%;
      height:auto;
      min-width:50px;
      font-size: xx-large;
      font-weight: bolder;
      border-radius: 10px;
      animation-name: te;
      animation-duration: 2s;
      animation-timing-function: ease-in;' >
      
      <div style='display:flex;justify-content:center;margin-top:20px;' id='d-${index}'>
      <button id='Cancel${index}' onclick='Cancel(${index})' class='btn btn-outline-danger'>Cancel</button>
      <span style='height:1px;width:10px;'id='d2${index}'></span>
      <button id='save${index}' onclick='save(${index})' class='btn btn-outline-primary' >Save</button></div>`; 
    
    document.body.appendChild(s);
    t.appendChild(s);

    //console.log(c.innerHTML);
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
        
        did.innerHTML += `<div><li class='display-5'>${x[id - 1]}</li></div>`;
        
        // Remove the item from the to-do list
        item.style.display = 'none';
    } 
}
function Cancel(index){
    let d = document.getElementById(`in-${index}`);
    let e = document.getElementById(`Cancel${index}`);
    let f = document.getElementById(`save${index}`);
    let g = document.getElementById(`d-${index}`);
    let h = document.getElementById(`d2${index}`);
    let i=document.getElementById(`span-${index}`);
    d.remove();
    e.remove();
    f.remove();
    g.remove();
    h.remove();
    i.remove();
}
function save(index){
    let d = document.getElementById(`in-${index}`);
    let e = document.getElementById(`Cancel${index}`);
    let f = document.getElementById(`save${index}`);
    let g = document.getElementById(`d-${index}`);
    let c  = document.getElementById(`b-${index}`);
    let h = document.getElementById(`d2${index}`);
    let i=document.getElementById(`span-${index}`);
    c.innerHTML = d.value;
    d.remove();
    e.remove();
    f.remove();
    g.remove();
    h.remove();
    i.remove();
}
