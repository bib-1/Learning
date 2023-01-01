//Promise 

const delay = (seconds) =>
    new Promise ( function (resolve) {
        setTimeout (resolve, seconds * 1000);
    })

delay(1).then( () => 
    console.log("fsafd"))


