const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e){
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');
		setTimeout(function(){
			jumbo.classList.remove('fade');
		},500);

		thumbs.forEach(function(thumb){
			thumb.className = ('thumb');
		});

		e.target.classList.add('active');
	}
})

// untuk slider
var counter = 1;
		setInterval(function() {
			document.getElementById('radio'+ counter).checked =true;
			counter++;
			if(counter > 4){
				counter = 1;
			}
		},5000);
