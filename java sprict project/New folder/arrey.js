//var array = [1,2,3]
// Add number at the end of the array
//array.push(4)
// aremove the last value of the array
//array.pop();
// sub the last value in the veriable 
//var single = array.pop();
//console.log(single)
//remove the first value of the array
//array.shift();
// sub the last value in the veriable 
//var single = array.shift()
//console.log(single)

// Add the value at the beginning of the array
//array.unshift(5);

//console.log(array)



var array = ['avi', 'ram', 'sita']
//// indexOf
//console.log(array.indexOf('avi'))




/// splice()
//array.splice(1)
//console.log(array)
//0,2 valu is put in new array and value is in old array or array
//var newArray = array.splice(0,2)
//console.log(newArray)



/// slice
//var newArray = array.slice(1,3)
//console.log(newArray)

//concat

//var other = ['rewtfy', 'gcudsc','gusydg']
//var tttt = array.concat(other)
//var tttt = array.join();
//console.log(tttt)
//console.log(tttt)

//console.log(array);

// jfilters

//var array = [1,2,10,15,20,30,40]
//var names = ['avi', 'ram', 'Mark', 'hari']

//var fliters = array.filter(function(item) {
	//return item > 9 ;

//})
//console.log(fliters)

//(function avi(){
	//console.log('Avinash Lamichhane')
//})()

// trim white spaces
/*var name = 'avinash lamichhane'
console.log(name.trim())
console.log(name.charAt(1))
console.log(name.concat(', the man'))
console.log(name.split())*/
//// Set time Out
///setTimeout(function(){
//	console.log('how arw you');
//},2000)
 //var hello = setInterval(function(){
	//console.log('how arw you')
//},2000)
  //setTimeout(function(){
  	//clearInterval(hello)
  //},6000)



  // Object
  var user = new Object();
  user.name = ' Avinash '
  user.age = 19;
  user.name = 'avi'

  console.log(user)

var user = {
	name:'',
	lastname:'Avi',
	age:20,
	mics: {


	},
	salute:function(){
		console.log('Hi there,I am ' +this.lastname)
	}
};
user.salute()



