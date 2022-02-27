function deleteTable(){

    table.remove();

    return 0;
};

function deleteBtn(){
    var img = document.getElementById('close');
    img.remove();

    return 0;
}

function deleteT(){

    deleteTable();

    backgraund.style.display = "none";
};