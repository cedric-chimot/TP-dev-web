checkBox = document.getElementById('masquer-paroles').addEventListener('click', event => {
    if (event.target.checked) {
        //alert("Checkbox checked!");
        $("#paroles").toggle();
    }
    else {          
        $("#paroles").show();
    }
});
