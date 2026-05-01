const getTheTitles = function(arr) {
  let titles = [];

  for (i = 0; i < arr.length; i++) {
    titles.push(arr[i].title)
  }

  return titles
};

const booksArray = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  },
  {
    title: 'Book3',
    author: 'Name3'
  },
  {
    title: 'Book4',
    author: 'Name4'
  },
];

function getFirstTitle(arr) {
  return arr[0].title
}

console.log("getFirstTitle", getFirstTitle(booksArray));

function getAllTitles(arr) {
  let titles = [];

  for (i = 0; i < arr.length; i++) {
    titles.push(arr[i].title)
  }

  return titles
}

console.log("getAllTitles", getAllTitles(booksArray));

// Do not edit below this line
module.exports = getTheTitles;
``
