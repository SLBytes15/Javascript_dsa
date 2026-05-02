for (let i = 0; i < 5; i++) {
    let row = "";
    let bool = 0;
    for (let j = 0; j <= i; j++) {
         if (bool) {
           bool = 0;
            row += `${bool}`;
         } else {
           bool = 1;
            row += `${bool}`;
         }
        
    }
    console.log(row);
    
    
}

