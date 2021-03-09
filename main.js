var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var mouseevent="empty";
var last_position_of_x,last_position_of_y;
var color="black";
var width_of_line=1;
canvas.addEventListener("mousedown",my_mousedown)
function my_mousedown(e){
mouseevent="mouseDown";
}


canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
mouseevent="mouseUp";
}

canvas.addEventListener("mouseleave",my_mouseleave)
function my_mouseleave(e){
mouseevent="mouseLeave";
}

canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseevent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,100,0, 2 * Math.PI);



        ctx.stroke();
        }

        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }






