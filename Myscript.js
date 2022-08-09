
function clearscr(){
    document.getElementById('result').value='';
}
function takeinput(value){
    document.getElementById('result').value+=value;
}
function calc(){
    let a=document.getElementById('result').value;
    let b=eval(a);
    document.getElementById('result').value=b;
}