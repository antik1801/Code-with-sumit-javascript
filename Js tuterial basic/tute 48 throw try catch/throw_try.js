try{
    addleart("Welcome to my youtube chanel");

} catch(err){

    document.getElementById("demo").innerHTML = err.message;

}

// Catch , throw function

function click()
{
    let x = document.getElementById("fg").value;
    console.log(x);
}

click();