 document.getElementById('grandparent').addEventListener('click',(e)=>{
console.log(e.target)
//so here i used grandparents id butwhen i clcked on laptop ....ie targte laptop then laptop is clicked okay 
window.location.href= `/${e.target.id}`
})
// document.getElementById('parent').addEventListener('click',()=>{
// console.log("parent clcked")
// })



