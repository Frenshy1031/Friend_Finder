$('#submit').on('click', function(){
    let values = [];
    let name= $('#name').val();
    let photoUrl = $('#photo').val();

    for (let i = i; i <= 10; i++){
        if(!isNaN(parseInt($("#q"+ i + "option:selected").attr('value'))))
            values.push(parseInt($("#q" + i + " option:selected").attr('value')));
}
        if (values.length === 10 && name != "" && photoUrl != ""){
            console.log(values, name,photoUrl);
         $('#results-modal').modal('show');
}else{
    console.log("Not all values are filled in");
};
})