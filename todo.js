function display(id){
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote=[];
    }
    else{
        objnote = JSON.parse(todo);
    }
    let html = "";
    objnote.forEach(function(element, index){
        if(id=="all"){
        if(element.status=="pending")
        html = html + `<div class="element">
        <div class="content">
        <a href="${element.link}" target="_blank" >${element.title}  </a><span style="font-weight:900"> | ${element.topic} |</span> ${element.rating}
        </div>
        <div class="icon" onclick="status(${index})"><i class="fa fa-check-circle-o" style="font-size:30px;"></i></div>
        <div class="icon" onclick="edit(${index})"><i class="fa fa-edit" style="font-size:30px"></i></div>
        <div class="icon" onclick="delete_todo(${index})"><i class="fa fa-trash-o" style="font-size:30px"></i></div>
        </div>`
        else{
            html = html + `<div class="element">
        <div class="content">
        <a href="${element.link}" target="_blank" >${element.title}  </a><span style="font-weight:900"> | ${element.topic} |</span> ${element.rating}
        </div>
        <div class="icon" onclick="status(${index})"><i class="fa fa-check-circle" style="font-size:30px;"></i></div>
        <div class="icon" onclick="edit(${index})"><i class="fa fa-edit" style="font-size:30px"></i></div>
        <div class="icon" onclick="delete_todo(${index})"><i class="fa fa-trash-o" style="font-size:30px"></i></div>
        </div>`
        }}
        else if(id=="todo"){
            if(element.status=="pending"){
            html = html + `<div class="element">
        <div class="content">
        <a href="${element.link}" target="_blank" >${element.title}  </a><span style="font-weight:900"> | ${element.topic} |</span> ${element.rating}
        </div>
        <div class="icon" onclick="status(${index})"><i class="fa fa-check-circle-o" style="font-size:30px;"></i></div>
        <div class="icon" onclick="edit(${index})"><i class="fa fa-edit" style="font-size:30px"></i></div>
        <div class="icon" onclick="delete_todo(${index})"><i class="fa fa-trash-o" style="font-size:30px"></i></div>
        </div>`
        }
       }
        else{
            if(element.status=="done"){
            html = html + `<div class="element">
        <div class="content">
        <a href="${element.link}" target="_blank" >${element.title}  </a><span style="font-weight:900"> | ${element.topic} |</span> ${element.rating}
        </div>
        <div class="icon" onclick="status(${index})"><i class="fa fa-check-circle" style="font-size:30px;"></i></div>
        <div class="icon" onclick="edit(${index})"><i class="fa fa-edit" style="font-size:30px"></i></div>
        <div class="icon" onclick="delete_todo(${index})"><i class="fa fa-trash-o" style="font-size:30px"></i></div>
        </div>`
        }}
    });
    let list = document.getElementById("list");
    if(objnote.length!=0){
        list.innerHTML = html;
    }
    else{
        list.innerHTML = `<p style='color:white; font-size: 150%; text-align:center;'>Nothing left</p>`;
    }
};

function addtodo(){
    let title = document.getElementById("title");
    let link = document.getElementById("link");
    let topic = document.getElementById("topic");
    let rating = document.getElementById("rating");
    if(title.value != ''){
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote = [];
    }
    else{
        objnote = JSON.parse(todo);
    }
    let obj = {
        title: title.value,
        link: link.value,
        topic: topic.value,
        rating: rating.value,
        status: "pending"
    }
    objnote.push(obj);
    localStorage.setItem("todos", JSON.stringify(objnote));
      title.value="";
      link.value="";
      topic.value="";
      rating.value="";
    }
    else{
        alert("Please Enter Title");
    }
    display("all");
}

function status(index){
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote = [];
    }
    else{
        objnote = JSON.parse(todo);
    }
    let status = objnote[index].status;
    if(status=="pending"){
        objnote[index].status="done";
    }
    else{
        objnote[index].status="pending";
    }
    localStorage.setItem("todos", JSON.stringify(objnote));
    display("all");
};

function delete_todo(index){
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote = [];
    }
    else{
        objnote = JSON.parse(todo);
    }
    objnote.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(objnote));
    display("all");
}

let edit_index;

function edit(index){
    window.scrollTo(0, 0);
    let elem0 = document.getElementById('addbtn');
    elem0.id = 'editbtn';
    elem0.innerHTML = 'Edit ToDo';
    elem0.setAttribute('onclick','edit_todo()');
    let elem1 = document.getElementById("title");
    let elem2 = document.getElementById("link");
    let elem3 = document.getElementById("topic")
    let elem4 = document.getElementById("rating")
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote = [];
    }
    else{
        objnote = JSON.parse(todo);
    }
    elem1.value = objnote[index].title;
    elem2.value = objnote[index].link;
    elem3.value = objnote[index].topic;
    elem4.value = objnote[index].rating;
    edit_index = index;
}

function edit_todo(){
    let title = document.getElementById("title");
    let link = document.getElementById("link");
    let topic = document.getElementById("topic");
    let rating = document.getElementById("rating");
    if(title.value != ''){
    let todo = localStorage.getItem("todos");
    if(todo==null){
        objnote = [];
    }
    else{
        objnote = JSON.parse(todo);
    }
    objnote[edit_index].title = title.value;
    objnote[edit_index].link = link.value;
    objnote[edit_index].topic = topic.value;
    objnote[edit_index].rating = rating.value;
    localStorage.setItem("todos", JSON.stringify(objnote));
    title.value="";
    link.value="";
    topic.value="";
    rating.value="";

    }
    else{
        alert("Please Enter Title");
    }
    let editBtn = document.getElementById('editbtn');
    editBtn.innerHTML = 'Add ToDo';
    editBtn.id = 'addbtn';
    editBtn.setAttribute('onclick','addtodo()');
    display("all");
}

display("all")