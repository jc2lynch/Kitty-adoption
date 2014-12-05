// this is an array
angular
	.module("adoptionApp")
	.controller("KittiesController", KittiesControllerFunc);

//going to need a function that allows us to move kittens from "for adoption to to adopted"

//

function KittiesControllerFunc(){
		this.kittyList=[		
		{
			catName: 'Karl',
			monthsOld: 5,
			gender: 'boy',
			image: "images/carl.png",
			adopted: true,
		},
		{
			catName: 'Jack',
			monthsOld: 4,
			gender: 'boy',
			image: "images/jack.png",
			adopted: false
		},
		{
			catName: 'Oscar',
			monthsOld: 2,
			gender: 'boy',
			image: "images/oscar.png",
			adopted: false
		},
		{
			catName: 'Princess Mew',
			monthsOld: 3,
			gender: 'girl',
			image: "images/princessmew.png",
			adopted: false
		}

	]
}