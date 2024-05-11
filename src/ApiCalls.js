function getAllMovieData(){
     return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then(response => response.json())
    }
  
    function getMovieDetail(id) {
    return  fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .catch(error => alert(`${error} sorry try again later`))
    }

    export {
        getAllMovieData,
        getMovieDetail
    }