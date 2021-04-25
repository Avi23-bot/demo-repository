/*var container = document.querySelector('.container')
var ul = container.querySelector('ul')
var div = document.createElement('div')


div.textContent = ' Hello Avinash LAmichhane'
div.style.color =  'red'

//container.appendChild(div)

container.insertAdjacentElement('beforeend', div)
container.insertAdjacentHTML('beforeend', '<div>Hello</div>')


//container.removeChild(ul)

ul.remove();*/

// Event
/*var mybutton = document.querySelector('.mybutton');
function click1() {
	console.log('click me')

}
function click2(){
	console.log('Other function')
	mybutton.removeEventListener('click',click2)

}
mybutton.addEventListener('click',click1)
mybutton.addEventListener('click',click2)



function a() {

	alert('my masaage !!')
	
}
document.addEventListener('click' ,a)*/








//mybutton.onclick = function(){
//	console.log('someone click me !!')
//}
//mybutton.onclick = function(){
//	console.log('Other function!!')
//}








/*mybutton.onmouseover = function(){
	console.log('mouse over')
}

mybutton.ondblclick = function(){
	console.log('double click')
}
*/

var child = document.querySelector('.child')
var parrent = document.querySelector('.parrent')


function child1(event)
{

	/* for to stop gerrn an red */
	event.stopPropagation()
	event.target.style.background = ' blue'
	console.log(' I am blue')


}
function parrent2(event){
	console.log('i am red')
}


child.addEventListener('click',child1)

parrent.addEventListener('click',parrent2)


