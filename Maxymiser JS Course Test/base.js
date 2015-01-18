window.onload = function() {
	var changeKittens = document.getElementById('changeKittens'),
		negArray = document.getElementById('negArray'),
		numbersList = [-4, 0, 5, 3, 55, -5, -33, -48, 42],
		images = document.getElementsByTagName('img'),
		sources = [images[0].src, images[1].src, images[2].src, images[3].src];
		
	changeKittens.onclick = function() {
		var randArray = [0, 1, 2, 3];
        function compareRandom(a, b) {
 	    return Math.random() - 0.5;
        };
	    randArray.sort(compareRandom);
		for (var i=0; i<4; i++) {
			images[i].src = sources[randArray[i]];
		};
	};
	
	negArray.onclick = function() {
		for (var i=0; i<numbersList.length; i++) {
			if (numbersList[i] >= 0) {
				numbersList.splice(i--, 1);
			};
		};
		console.log(numbersList);
	};
	
	
	
}; // end of onLoad