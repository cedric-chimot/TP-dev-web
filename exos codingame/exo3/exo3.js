checkBox = document.getElementById('masquer-paroles').addEventListener('click', event => {
	if(event.target.checked) {
		//alert("Checkbox checked!");
        $("#paroles").hide();
	}
    else{
        $("paroles").show();
    }
});