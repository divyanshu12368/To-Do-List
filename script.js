// // variables
// const enterName = document.querySelector("#name-input");
// const enterEmail = document.querySelector("#email-input");
// const addBtn = document.querySelector("#add-btn");
// const updateName = document.querySelector("#update-name-input");
// const updateEmail = document.querySelector("#update-email-input");
// const updateBtn = document.querySelector("#update-btn");
// const cancelBtn = document.querySelector("#cancel-btn");
// const tableBody = document.querySelector("#table-body");
// const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// let users = JSON.parse(localStorage.getItem("users")) || [];
// let currentUserId = null ; 

// // functions 

// function renderTable(){
//   tableBody.innerHTML="";
//   for(let i=0; i<=users.length; i++){
//     const user = users[i];
//     const tr = document.createElement("tr");
//     const tdId = document.createElement("td");
//     const tdName = document.createElement("td");
//     const tdEmail = document.createElement("td");
//     const tdAction = document.createElement("td");
//     const editBtn = document.createElement("button");
//     editBtn.className = "edit-btn";
//     const deleteBtn = document.createElement("button");
//     deleteBtn.className = "delete-btn";
//     tdId.innerText= user.id;
//     tdName.innerText= user.name;
//     tdEmail.innerText= user.email;
//     editBtn.innerText= "Edit";
//     deleteBtn.innerText= "Delete";
//     editBtn.addEventListener("click",() => {
//       showUpdateForm(user.id);
//     });
//     deleteBtn.addEventListener("click", () => {
//       deleteUser(user.id);
//     });
//     tdAction.appendChild(editBtn);
//     tdAction.appendChild(deleteBtn);
//     tr.appendChild(tdId);
//     tr.appendChild(tdName);
//     tr.appendChild(tdEmail);
//     tr.appendChild(tdAction);
//     tableBody.appendChild(tr);
//     hideUpdateForm();
//   }
// }

// function addUser(){
//   const name = enterName.value;
//   const email = enterEmail.value;
//    var id = 1;
//       var val = users.map(function(x){return x.id; }).indexOf(id);
//       while(val != -1){
// 	    id++;
// 	    val = users.map(function(x){return x.id; }).indexOf(id);
//   }
//   const user = {
//     id: id,
//     name: name,
//     email: email,
//   };
//   users.push(user);
//   localStorage.setItem("users", JSON.stringify(users));  //for saving data in browser
//   enterName.value = "";
//   enterEmail.value= "";
//   renderTable();
// }

// function updateUser(){
//   const name = updateName.value;
//   const email = updateEmail.value;
//   const index = users.findIndex((user)=> user.id === currentUserId);
//   if(index!= -1){
//     users[index].name=name;
//     users[index].email=email;
//     localStorage.setItem("users",JSON.stringify(users));
//     hideUpdateForm()
//     renderTable()
//   }


// }

// function showUpdateForm(userID){
//   const user = users.find((user)=> user.id===userID);
//   console.log("working");
//   updateName.value=user.name;
//   updateEmail.value=user.email;
//   currentUserId=user.id;
//   updateBtn.addEventListener("click",updateUser);
//   cancelBtn.addEventListener("click", hideUpdateForm);
//   updateBtn.style.display = "inline-block";
//   cancelBtn.style.display = "inline-block";
//   updateName.style.display = "inline-block";
//   updateEmail.style.display = "inline-block";
//   document.getElementById("update-container").style.display = "block";
// }

// function hideUpdateForm(){
//   updateName.value="";
//   updateEmail.value="";
//   currentUserId= null;
//   updateBtn.removeEventListener("click", updateUser);
//   cancelBtn.removeEventListener("click", hideUpdateForm);
//   updateBtn.style.display = "none";
//   cancelBtn.style.display = "none";
//   updateName.style.display = "none";
//   updateEmail.style.display = "none";
//   document.getElementById("update-container").style.display = "none";
// }

// function deleteUser(userID){
//   users = users.filter((user)=>user.id !== userID);
//   localStorage.setItem("users", JSON.stringify(users));
//   if (users.length == 0){
//     hideUpdateForm();
//   };
//   renderTable();
// }
// // function sayHello() {
// //   alert("Hello");
// // }

// addBtn.addEventListener("click",addUser);

// renderTable();