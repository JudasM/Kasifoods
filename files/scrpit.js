let names = []; // will replace with database 


let maina = function userInput() {
    let input = document.getElementById("name");
    return input.value; 
}

function fillnamesArray() {

        let name = maina(); 
        names.push(name);  
        console.log(name);   
        console.log(names)
}


let deleteElement = function() {
    let input = document.getElementById("delete");

    let arrayIndex = names[names.length - 1]; 
    removeFromArray(names, arrayIndex);
}

function removeFromArray(array, position) {

    if (!Array.isArray(array)) {
        console.error("The  provided array is not valid")
        return
    }

    let index = array.indexOf(position); 
    if (index > -1) {
        array.splice(index, 1); 
    }

    return array; 
}

console.log(names); 