// const l =document.getElementById("input")

// l.addEventListener("click", 

 

// )
const getData= ()=>{
    try {
            console.log("fetching data")

    } catch (error) {
        console.error("Error fetching data:", error);
        
    }
}

 const debounce = (fn,delay)=>{
    let timer=0;
    return function(...args){
        clearTimeout(timer); 
        timer = setTimeout(()=>{
fn(...args);
        },delay)
    }
 }


const searchwithdebounce = debounce(getData,2000);
// function debounce(fn,delay){
//     let timer ;
//     return function () {
//         setTimeout(()=>{
//             getData.apply()
//         },delay)
//     }
// }

