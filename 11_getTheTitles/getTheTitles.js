const getTheTitles = function(books) {
   let Ts = books.map(function (book) {
  return book.title;
   })
   return Ts;
};

//console.log(Object.keys(books[1]));
//console.log(getTheTitles());

// Do not edit below this line
module.exports = getTheTitles;
