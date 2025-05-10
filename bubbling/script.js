 document.getElementById('grandparent').addEventListener('click',()=>{
console.log("grandparent clcked")
})

document.getElementById('parent').addEventListener('click',(e)=>{
    console.log("parent cliccked")
    // e.stopPropagation()
})


document.getElementById('child').addEventListener('click',()=>{
    console.log("child cliccked")
})