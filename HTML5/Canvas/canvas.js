function drawCanvas(){

    for(var i=0; i<=10; i++){
        var canvas = document.createElement("CANVAS");
        var context = canvas.getContext("2d");
        context.fillStyle = "red";
        context.fillRect(10,20,30,40);
        document.body.appendChild(canvas);
    }

}