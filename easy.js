
function exercise(message){
    switch (message) {
        case "Running":
            message = "Today's exercise: Runnning";
            break;
        case "Swimming":
            message = "Today's exercise: Swimming";
            break;  
        case "Dancing":
            message = "Today's exercise: Dancing";
            break;
        case "Fencing":
            message = "Today's exercise: Fencing";
            break;
    } 
    return message;
}

     

    // Output: Today's exercise: Running
    console.log(exercise("Running")); 
  // Output: Today's exercise: Swimming
    console.log(exercise("Swimming"));
  // Output: Today's exercise: Dancing
    console.log(exercise("Dancing")); 
  // Output: Today's exercise: Fencing
    console.log(exercise("Fencing")); 
  