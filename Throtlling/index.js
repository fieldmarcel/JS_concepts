const sendmsg= (message)=>{
    
    console.log("Message sent",message);

    
}


//now i want it such that function 
// executes only after 2 sec 
// if i m thinking a simple setitmeout will be useful but then all the consoles will be excuted after that much delay unlike throttlong
function throttle(fn,delay){
let lastcall =0;

return function(...args){
    const now= Date.now();
    if(now-lastcall >= delay){
 lastcall= now;
        return fn(...args)
        } else{
       return;
    }
}}

slowmodesendmsg=throttle(sendmsg,2000);

slowmodesendmsg("shi")
setTimeout(() => {
    slowmodesendmsg("shiv")
}, 1000);
setTimeout(() => slowmodesendmsg("shivanshu"), 2500);

slowmodesendmsg("shiva")
slowmodesendmsg("shivanshu")

slowmodesendmsg("shivanshu tri")
slowmodesendmsg("shivanshu tripathi")
slowmodesendmsg("s")