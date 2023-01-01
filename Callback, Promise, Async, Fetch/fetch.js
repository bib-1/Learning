//Fetch is shorthand of promise

async function getText(file) {
    let x = await fetch(file);
    let y = await x.text();
    myDisplay(y);
  }

