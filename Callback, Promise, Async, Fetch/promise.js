// A Promise is a JavaScript object that links producing code and consuming code
// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result

//Syntax for Promise

let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)

      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

//Implementation
    let promise = new Promise(function(myResolve, myReject) {
    
          myResolve("OK")
          myReject("Rejected");  // when error
        });
        
        // "Consuming Code" (Must wait for a fulfilled Promise)
        myPromise.then(
          function(value) { console.log("Promise fulfilled") },
          function(error) { console.log("Promise not completed") }
        );

let newPromise = new Promise(function(myResolve, myReject) {
            let req = new XMLHttpRequest();
            req.open('GET', "mycar.htm");
            req.onload = function() {
              if (req.status == 200) {
                myResolve(req.response);
              } else {
                myReject("File not Found");
              }
            };
            req.send();
          });
          
newPromise.then(
            function(value) {console.log(value);},
            function(error) {console.log(error);}
          );