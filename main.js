let input = document.getElementsByClassName("todo__write")[0];
let result = ``;
let arrResult = [];
let output = document.getElementsByClassName("todo__result")[0];
let Btndelete=document.getElementsByClassName("todo__delete");
let count=0;
let addTodo = () => {
  arrResult.push(input.value);
  result += `<span class="todo__text">${input.value}</span>
                <button class="todo__delete" onclick="todoDelete()"><i class="ti-trash"></i></button>
                <br/>`;
  output.innerHTML = result;
};
let todoDelete=(i)=>
{
    console.log(i);
    result=``;
    arrResult.splice(i,1);
    for(let i=0;i<arrResult.length;i++)
    {
        result += `<span class="todo__text">${arrResult[i]}</span>
        <button class="todo__delete" onclick="todoDelete()"><i class="ti-trash"></i></button>
        <br/>`;
    }
    output.innerHTML = result;
}
// let deleteItem=(e)=>
// {
//     const element=e.target;
//     if(element.classList[0]=="ti-trash")
//     {
//         console.log(element.parentElement);
//         element.parentElement.parentElement.remove();
//     }
// }
// output.addEventListener('click',deleteItem);