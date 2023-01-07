canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var mouseEvent= "empty";
var lastx, lasty;
color="red";
width=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color = document.getElementById("color").value;
width=document.getElementById("width").value;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent= "mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent= "mouseUP";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(lastx, lasty);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    lastx = current_position_of_mouse_x;
    lasty = current_position_of_mouse_y;
} 