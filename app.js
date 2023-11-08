// let button = document.getElementById('add')
// let todolist = document.getElementById('todolist')
// let input = document.getElementById('input');

// prompt(wellcome)

// let todos = []; 
 
// button.addEventListener('click',()=>{

//     todos.push(input.value)
//     addtodo(input.value)
//     input.value=''
// })
// function addtodo(todo){
//     let para = document.createElement('p');
//     para.innerText = todo;
//     todolist.appendChild(para)
// }
// document.querySelector('#push').onclick = function(){
//     if (document.querySelector('#newtask input').ariaValueMax.length ==0){
//         alert("enter the task")
//     }
//     else{
//         document.querySelector("#task").innerHTML +=
//         <div class ="task">
//             <span id="taskname">
//                 $ {document.querySelector('#newtask input').value}
//                 </span>
//                 <button class="delete">
//                     <i class="far fa-trash-alt"></i>
//                 </button>
//         </div>
//         ;
//         var current_task = document.querySelectorAll(".delete");
//         for( var i=0;i<current_task.leanth;i++){
//             current_task[i].onclick = function(){
//                 this.parentNode.remove();
//             }
//         }
//     }
// }
// let a = document.getElementById('task_area');
// let b = document.getElementById('single_task');
// let c = document.getElementById('tasks');
 
// function addTask(event){
//     event.preventDefault();
//     if(b.value === '')return;
//     const task =createTask(b.value);
//     c.appendChild(task);
//     b.value ='';
// }
// function createTask(taskname){
//     const task = document.createElement('li');
//     task.classList.add('task')
//     task.innerHTML = `
//       <input type= "checkbox">
//       <lable>${taskname}</lable>
//       <span class="delete">&time;</span>
//     `;

//     const deleteButton = task.querySelector('.delete');
//     deleteButton.addEventListener('click', deletetask );
//      return task;

// }
// function deleteTask(event){
//     event.target.parentElement.remove();
// }
// a.addEventListener('submit',addTask);
// app.js 
window.onload = () => { 
	const form1 = document.querySelector("#addForm"); 

	let items = document.getElementById("items"); 
	let submit = document.getElementById("submit"); 

	let editItem = null; 

	form1.addEventListener("submit", addItem); 
	items.addEventListener("click", removeItem); 
}; 

function addItem(e) { 
	e.preventDefault(); 

	if (submit.value != "Submit") { 
		console.log("Hello"); 

		editItem.target.parentNode.childNodes[0].data 
			= document.getElementById("item").value; 

		submit.value = "Submit"; 
		document.getElementById("item").value = ""; 

		document.getElementById("lblsuccess").innerHTML 
			= "Text edited successfully"; 

		document.getElementById("lblsuccess") 
						.style.display = "block"; 

		setTimeout(function() { 
			document.getElementById("lblsuccess") 
							.style.display = "none"; 
		}, 3000); 

		return false; 
	} 

	let newItem = document.getElementById("item").value; 
	if (newItem.trim() == "" || newItem.trim() == null) 
		return false; 
	else
		document.getElementById("item").value = ""; 

	let li = document.createElement("li"); 
	li.className = "list-group-item"; 

	let deleteButton = document.createElement("button"); 

	deleteButton.className = 
		"btn-danger btn btn-sm float-right delete"; 

	deleteButton.appendChild(document.createTextNode("Delete")); 

	let editButton = document.createElement("button"); 

	editButton.className = 
			"btn-success btn btn-sm float-right edit"; 

	editButton.appendChild(document.createTextNode("Edit")); 

	li.appendChild(document.createTextNode(newItem)); 
	li.appendChild(deleteButton); 
	li.appendChild(editButton); 

	items.appendChild(li); 
} 

function removeItem(e) { 
	e.preventDefault(); 
	if (e.target.classList.contains("delete")) { 
		if (confirm("Are you Sure?")) { 
			let li = e.target.parentNode; 
			items.removeChild(li); 
			document.getElementById("lblsuccess").innerHTML 
				= "Text deleted successfully"; 

			document.getElementById("lblsuccess") 
						.style.display = "block"; 

			setTimeout(function() { 
				document.getElementById("lblsuccess") 
						.style.display = "none"; 
			}, 3000); 
		} 
	} 
	if (e.target.classList.contains("edit")) { 
		document.getElementById("item").value = 
			e.target.parentNode.childNodes[0].data; 
		submit.value = "EDIT"; 
		editItem = e; 
	} 
} 

function toggleButton(ref, btnID) { 
	document.getElementById(btnID).disabled = false; 
} 
