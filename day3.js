let taskList = [];

function addTask(task, callback) {
    taskList.push(task);
    console.log(`Task "${task}" added.`);
    callback(); 
}

const printTasks = () => {
    console.log("Current Tasks:");
    if (taskList.length === 0) {
        console.log("No tasks in the list.");
    } else {
        taskList.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
};

const addMultipleTasks = function (...tasks) {
    tasks.forEach(task => {
        taskList.push(task);
        console.log(`Task "${task}" added.`);
    });
    printTasks(); 
};

function scopeExample() {
    let insideVar = "I am inside the function";
    console.log(insideVar); 

    console.log(taskList);
}

addTask("Buy groceries", printTasks);

addMultipleTasks("Clean room", "Pay bills", "Read a book");

scopeExample();

