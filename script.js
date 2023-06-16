// //your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// function sortBand(list){
// 	touristSpots.sort(a,b){

// 		let removeArticles( name => name.replace(/^(a|an|the)/i,''));

// 		let name1 = removeArticles(a.toLowerCase());
// 		let name2 = removeArticles(b.toLowerCase());
		
// 	}
// }

// let element = document.getElementById("band");

function sortBandNames(names) {
  return names.sort((a, b) => {
    // Function to remove articles from the band names
    const removeArticles = (name) => name.replace(/^(a |an |the )/i, '');

    const nameA = removeArticles(a.toLowerCase());
    const nameB = removeArticles(b.toLowerCase());

    return nameA.localeCompare(nameB);
  });
}

// Sort the band names and display them in the HTML list
function displayBandNames(names) {
  const ul = document.getElementById('band');

  // Clear any existing list items
  ul.innerHTML = '';

  // Sort the band names
  const sortedNames = sortBandNames(names);

  // Create and append list items to the HTML list
  sortedNames.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
}

displayBandNames(touristSpots);


