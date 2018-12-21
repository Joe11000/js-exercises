const movies = [
  {title: 'a', year: 2018, rating: 4.5},
  {title: 'b', year: 2018, rating: 4.7},
  {title: 'c', year: 2018, rating: 3},
  {title: 'd', year: 2017, rating: 4.5},
]

// all the movies in 2018 with rating > 4
// sort them by their rating
// descending order
// pick their title

function moviesToWatch(movies_list) {
  return movies_list.filter( movie => (movie.rating > 4 ) && (movie.year == 2018) )
                    .sort( (a,b) => a.rating - b.rating  )
                    .reverse()
                    .map( movie => movie.title ) 
}

moviesToWatch(movies).forEach(movie => console.log(movie) )