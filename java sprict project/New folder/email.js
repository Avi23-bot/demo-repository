var myDatabase = {
	name:'Avinash lamichhane',
	email:'Avinashlamichhane@435.com',
	age:19,

	name:'Avishek lamichhane',
	email:'Avisheklamichhane@435.com',
	age:17,

	name:'Avi lamichhane',
	email:'Avilamichhane@435.com',
	age:25,
};

(function Avatars(db){
var init = function(){

	generateList();
	enterUser();
}

var generateList = function(){
	var parrent = document.querySelector('#parent_avatars')
	var template = '';

	for (var i = 0; i < db.length; i++) {

		<div class="col-sm-4">
					<div class="card">
						<div class="card-delete" data-card="1">X</div>
						<div class="card-block">
							<h3 class="card-title">Avinash Lamichhane</h3>
							<p class="card-text">
								<strong>Email</strong>:<span>Email@gmail.com</span>
							</p>





							
							<p class="card-text">
								<strong>Age</strong>:<span>19</span>
							</p>
						</div>
					</div>
					</div>

	}

}
var enterUser = function(){
	console.log('enterUsername')

}
init();

}(myDatabase))


