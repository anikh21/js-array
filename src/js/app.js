// line break function
function lb(color = 'black', title){
    if (!title) {
        console.log(
        "%c**************************************************",
        `color:${color}`
    );
    }else{
        console.log(
            `%c************************* ${title} *************************`,
            `color:${color}`
        );
    }
}