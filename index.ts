import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.greenBright. underline(`
-s--s--s--s--s--s|| Welcome to karwal todolist App ||`));

let todos = [];
let condition = true;


while (condition) 
 {
let operations = await inquirer .prompt(
   [
    {
        name: "operator",
        type: "list",
        message: chalk.redBright("Select an operation"),
        choices:["Add task", "show task", "Delete task", "Exit"]
        
        
    },
  ]
);


if (operations.operator === "Add task") {
    let add = await inquirer.prompt(
        [
            {
                name: "addTodo",
                type: "input",
                message: chalk.redBright("What do you want to add in your ToDo?")
            }
        ]
    )
    
    todos.push(add.addTodo);
    condition = add.addTodo;
    console.log(chalk.greenBright('your ToDo list is:', '\n', todos));
}
else if (operations.operator === "show task") {
    console.log(chalk.redBright(todos));
}
else if (operations.operator === "Delete task") {
  let deleteTask = await inquirer.prompt(
    [
        {
            name: "deleteTodo",
            type: "list",
            message: chalk.redBright("Select a task to delete"),
            choices: todos.map(item => item)
        }
    ]
  )
  let newTodos:any[] = todos.filter(val => val !== deleteTask.deleteTodo);
    todos =[...newTodos]
    console.log(chalk.blueBright(todos));

}
else if (operations.operator === "Exit") {
    console.log(chalk.gray("\t\t Thank you For Using To Do List App"));
    break;
}
else{
    console.log(chalk.cyanBright("please select A valid option"));
};
 }