checkBox = document.getElementById('masquer-paroles').addEventListener('click', event => {
    if (event.target.checked) {
        $("#paroles").toggle();
        $('#parole').contents().last().replaceWith(' Afficher les paroles');
    }
    else {         
        $("#paroles").show();
        $('#parole').contents().last().replaceWith(' Masquer les paroles');
    }
});

checkBox1 = document.getElementById('masquer-refrains').addEventListener('click', event => {
    if (event.target.checked) {
        $(".refrain").toggle();
        $('#refrain').contents().last().replaceWith(' Afficher les refrains');
    }
    else {         
        $(".refrain").show();
        $('#refrain').contents().last().replaceWith(' Masquer les refrains');
    }
});
