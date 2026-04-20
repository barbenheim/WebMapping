var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

function addColumns(cityPop){
    
    document.querySelectorAll("tr").forEach(function(row, i){

    	if (i == 0){
            row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){

	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		};
      		}
		document.querySelector("table").style.backgroundColor = color;
	});

	function clickme(){

		alert('Hey, you clicked me!');
	};

	document.querySelector("table").addEventListener("click", clickme)
};


//initialize function called when the script loads
function initialize(){
    cities();
    addColumns(cityPop);
    addEvents();
};

//function to create a table with cities and their populations
function cities(){
    //define an array of objects for cities and population
    var cityPop = [
        { 
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

    //add the row to the table
    table.appendChild(headerRow);

    //Example 4.2 line 37...
    //loop to add a new row for each city
    for(var i = 0; i < cityPop.length; i++){
        //console.log(cities);
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#mydiv").appendChild(table);
};

//call the initialize function when the window has loaded
window.onload = initialize();

//Added at Example 3.5 line 44...
//get the div id
var theid = document.querySelector('#mydiv').getAttribute('id');

//theid is 'mydiv;; add it as text to the div
document.querySelector('#mydiv').insertAdjacentHTML('beforeend',theid);

//add the class 'foo' to the div
document.querySelector('#mydiv').setAttribute('class', 'foo');

//Added below Example 3.6...
//change the text color
document.querySelector('#mydiv').style.color = 'red';

//change the text size and alignment
document.querySelector('#mydiv').style.fontSize = '2em';
document.querySelector('#mydiv').style.textAlign = 'left';

//get the text color and add it as text to the div
var thecolor = document.querySelector('#mydiv').style.color;
document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thecolor);

//Added below Example 3.7...
//iterate over each script element and add each one's source url as text to the div
document.querySelectorAll("script").forEach(function(selectedScript){
    var thesource = selectedScript.src;
    document.querySelector('#mydiv').insertAdjacentHTML('beforeend',thesource);
})

//Added below Example 3.8...
//click listener with anonymous handler function
document.querySelector("table").addEventListener("click", function(){
    alert('Madison Rocks! Go Badgers!');
});

//named handler function for removable listener
function clickme(){
    alert('Yeah Green Bay! Go Packers!');
};

//add the event listener
document.querySelector("table").addEventListener('click', clickme);

//remove the event listener
document.querySelector("table").removeEventListener('click', clickme);


// Example 3.9...
//change the text color
document.querySelector('#mydiv').style.color = 'gold';
