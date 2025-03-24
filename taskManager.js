// === Module 1: Organization and Time Management ===
// Step 1: Create an empty list to store tasks
let tasks = [];  

// Step 2: Add new tasks dynamically
tasks.push("Module 1", "Module 2");  

// Step 3: Log the updated list
console.log("Your Task List: "+tasks); // Expected output:Your task list: ["Module 1, Module 2"]
tasks.shift();// remove module 1 from array

// === Module 2: Values, Data Types, and Operations ===
// Step 1: Store the total number of tasks
let totalTasks = tasks.length;  
tasks.push("Module 3", "Module 4");//Later can be modified to readline sync to input from user

// Step 2: Simulate assuming user completed a task (removing from array)
tasks.shift();//remove module 2 from array tasks
console.log(tasks);
totalTasks = tasks.length;  

// Step 3: Log updated task count
console.log("\nTasks left:", totalTasks); // Expected output: 0 if all tasks are removed
console.log("\nUpdates Tasks: "+ tasks);// print updated task list


// === Module 3: The Growth Mindset ===
// Step 1: Check if there are remaining tasks  
if (totalTasks > 0) {  
    console.log("\nKeep going! You're making progress!!\n");  
} else {  
    console.log("\nGreat job! You completed all tasks!!!\n"); 
}
tasks.shift();//remove module 3 from tasks


// === Module 4: Stringing Characters Together ===
// Step 1: Create a string with a task name
let taskName = "Complete Any Remaining Modules in JavaScript";

// Step 2: String interpolation using template literals
let taskMessage = `\nTask to do: ${taskName}\n`;  // Using template literals for cleaner syntax

// Step 3: Log the task message
console.log(taskMessage);  // Expected output: "Task to do: Complete Any Remaining Modules in JavaScript"
tasks.shift();//remove module 4 from tasks
if (tasks.length == 0){
    console.log("\nYay! You have completed all your tasks!\n")
};

// === Module 5: Working with Loops ===
// Step 1: Array of tasks
console.log("\nNew Day! New Tasks!");
let dailyTasks = [
    'Yoga',
    'Meal Prep',
    'Talk to Music Teacher',
    'Read a Book'
  ];
  
  // Step 2: Using a for loop to log each task
  for (let i = 0; i < dailyTasks.length; i++) {
    console.log(`Task ${i + 1}: ${dailyTasks[i]}`);
  }
  
  // Step 3: Output
  // Task 1: Yoga
  // Task 2: Meal Prep
  // Task 3: Talk to Music Teacher
  // Task 4: Read a Book
  
  // === Module 6: Building Arrays ===
  console.log("\nLets get some tasks done for today!");
  // Step 1: Remove two tasks from the middle of dailtTasks array using splice()
  dailyTasks.splice(1, 2);  // Remove 'Meal Prep' and 'Talk to Music Teacher'
  
  // Step 2: Log the updated dailyTasks array
  console.log("\nUpdated Tasks List: ", dailyTasks);  // Expected output: ['Yoga', 'Read a Book']

  dailyTasks.splice(0, dailyTasks.length);// assuming user completed all tasks, spliced the whole array
  console.log("\nLooks like you pushed through! Taks Update: "+ dailyTasks.length);  // Expected output: Looks like you pushed through! Taks Update: 0


// === Module 7: Working with Objects ===
// Step 1: Define an object to represent a task
let taskDetails = {
    taskName: "Make a Dentist Appointment",
    isCompleted: false,
    priority: "High"
};

// Step 2: Access properties of the object
console.log(`
    Task: ${taskDetails.taskName}
    Is Completed: ${taskDetails.isCompleted}
    Priority: ${taskDetails.priority}
    `); 
// Step 3: Modify properties of the object
taskDetails.isCompleted = true;
taskDetails.priority = "Low";  // Changed priority after some evaluation

// Step 4: Log the updated task details
console.log("\nUpdated Task Details: ");
console.log(`
    Task: ${taskDetails.taskName}
    Is Completed: ${taskDetails.isCompleted}
    Priority: ${taskDetails.priority}
    `);    
console.log("Donot forget to add a reminder for this appointment!");

// === Module 8: Conditional Statements ===

// Step 1: Define a task object
let task = {
    taskName: "JavaScript Project",
    isCompleted: false,
    priority: "High"
};

// Step 2: Use conditional statements to check task status
if (task.isCompleted) {
    console.log(`\nTask "${task.taskName}" is completed. Well done!`);
} else if (task.priority === "High") {
    console.log(`\nTask "${task.taskName}" is high priority. Make sure to complete it soon!`);
} else {
    console.log(`\nTask "${task.taskName}" is not yet completed. Keep going!`);
}

// Step 3: Modify task status
task.isCompleted = true;  // Let's assume the task is now completed

// Step 4: Recheck after updating task status
if (task.isCompleted) {
    console.log(`\nTask "${task.taskName}" is completed. Great job!`);
}
console.log("\nThank you! I enjoyed doing this assignment! Looking forward to learn more!");


  