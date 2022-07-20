
// alert("hello its sharanya from the computer")

window.addEventListener('load', () =>{

    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_elem = document.querySelector("#tasks");


    form.addEventListener('submit', (info) =>{
        info.preventDefault();


        // console.log("Added a task");

        const task = input.value;
        if(!task){ //ie task is empty, not filled out
            alert("Please add an item so it appears on the task list!");
            return;
        }
        else{
            console.log("Sucessfully added");
        }

        const task_elem = document.createElement("div");
        task_elem.classList.add("task");

        const task_content_elem = document.createElement("div");
        task_content_elem.classList.add("content");
        // task_content_elem.innerText = task;

        task_elem.appendChild(task_content_elem); //add the item in list, task_elem
        
        const task_input_elem = document.createElement("input");
        task_input_elem.classList.add("text");
        task_input_elem.type = "text";
        task_input_elem.value = task;
        task_input_elem.setAttribute("readonly", "readonly");

        task_content_elem.appendChild(task_input_elem);

        const task_actions_elem = document.createElement("div");
        task_actions_elem.classList.add("actions");

        const task_edit_elem = document.createElement("button");
        task_edit_elem.classList.add("edit");
        task_edit_elem.innerHTML = "Edit";


        const task_delete_elem = document.createElement("button");
        task_delete_elem.classList.add("delete");
        task_delete_elem.innerHTML = "Delete";

        task_actions_elem.appendChild(task_edit_elem);
        task_actions_elem.appendChild(task_delete_elem);

        task_elem.appendChild(task_actions_elem);


        list_elem.appendChild(task_elem);

        input.value ="";
        //resets the input val so you can add more tasks without deleting what u put before

        task_edit_elem.addEventListener('click', () =>{
            if(task_edit_elem.innerText.toLowerCase()=="edit"){
                task_input_elem.removeAttribute("readonly");
                task_input_elem.focus(); //makes task_inp_elem active
                task_edit_elem.innerText = 'Save';
            }
            else{
                task_input_elem.setAttribute("readonly", "readonly"); //puts the style bacl to norm and can read only
                console.log("Edit has been saved");
                task_edit_elem.innerText = "Edit"; //change the button name from "save" to "edit"
            }


        })


        task_delete_elem.addEventListener('click', () =>{
            list_elem.removeChild(task_elem);
        });

    });

});
// wait for 'load' to occur ie home page is loaded