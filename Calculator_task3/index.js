

const allButtons=document.querySelectorAll(".button");
// console.log(allButtons);

let res="";
Array.from(allButtons).forEach((curButton)=>{

 curButton.addEventListener('click',(e)=>{
   let ele=e.target.innerHTML;
//   console.log(ele);
    if(ele==="AC"){
        res="";
    }
    else if(ele==="="){
     try {
        res=eval(res);
        const inputField=document.getElementById("curInput");
        inputField.value=res;
     } 
     catch (err) {
        alert("Wrong Input");
       
     }
       
    }
    else if(ele==="DEL"){
        
        if(res.length>0){
             let tp=res.substr(0,res.length-1);
            res=tp;
        }
        else{
            res="";
        }
    }
    else{
        res+=ele;
    }   

    const inputField=document.getElementById("curInput");
    inputField.value=res;
 })


})
