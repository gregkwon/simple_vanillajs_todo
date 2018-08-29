var ul = document.getElementById('todo_list'); 
var removeAll= document.getElementById('removebtn');
var addBt = document.getElementById('addbtn');
var textVal="";

addBt.addEventListener("click",function(){
    addLi(ul);
});
removeAll.addEventListener("click",function(){
    ul.innerHTML='';
}); 
 
function addLi(targetUl){
    var inputText = document.getElementById('addtodo');
    var li = document.createElement('li');
    var removebtn = document.createElement('button');
    var textnode=document.createTextNode(inputText.value+' ');
    
    if(inputText!=null){
        textVal=inputText.value;
    }else{
        textVal=null;
    }

    if(textVal.split(' ').join('').length===0){
        alert('no input');
        return false;
    }
    
    removebtn.className = 'removeMe';
    removebtn.innerHTML = 'IT IS DONE!';
    removebtn.setAttribute('onclick', 'removeMe(this);');

    li.appendChild(textnode);
    li.appendChild(removebtn);

    targetUl.appendChild(li);
};
    function removeMe(item){
        var parent = item.parentElement;
        parent.parentElement.removeChild(parent);
    };
