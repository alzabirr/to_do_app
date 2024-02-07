let todo=[];

let req = prompt("please enter u request");
console.log(req);   

// 1st 
while(true){

    if(req =="quit"){
        console.log("quitting this appp bro!");
        break ;
    }
// 2nd 
    if(req == "list"){
        console.log("--------------------")
        // for(task of todo){  
        //     console.log(task);
        // }
        for(let i = 0 ; i<todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("---------------------")

//  3rd      
    }else if(req =="add"){
      let task =   prompt("please enter the task you want to add")
      todo.push(task);
      console.log("task added")
// 4th 

    }else if(req == "delete"){
    let idx = prompt("please enter the task index");
    todo.splice(idx,1);
    console.log("task deleted");
    }
    
    else{
        console.log("wrong request");
    }
    req = prompt("please enter your request");
}