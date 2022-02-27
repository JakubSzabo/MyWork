function makeTable(){
    var X = document.getElementById('X').value;
    var Y = document.getElementById('Y').value;
    var bg = document.getElementById('bg');

    var closeBtn = document.createElement("img");
    closeBtn.id = 'close';
    closeBtn.src = "pictures/close.jpg";
    closeBtn.alt = "Close Button"
    bg.appendChild(closeBtn);
    closeBtn.addEventListener("click", deleteT);
    closeBtn.addEventListener("click", deleteBtn);

    var table = document.createElement("table");
    table.id = 'table';
    bg.appendChild(table);

    var table = document.getElementById('table');

    for(let y = 0; y <= Y; y++){
        var row = document.createElement("tr");
        table.appendChild(row);
        for(let x = 0; x <= X; x++){
            var column = document.createElement('td');
            row.appendChild(column);
            if(y == 0 && x >= 1){
                let text = document.createTextNode(`X= ${x}`);
                column.appendChild(text);
            }
            if(y >= 1 && x == 0){
                let text = document.createTextNode(`Y= ${y}`);
                column.appendChild(text);
            }
            else if(x >= 1 && y >= 1){
                let text = document.createTextNode(`${x * y}`);
                column.appendChild(text);
            }     
        }
    }
}