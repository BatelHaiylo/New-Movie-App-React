import { useState } from "react";
import Movie from "./Movie.component";

export default function Movies(){
    let [moviesList,setMoviesList] = useState()
    const  someFunc4= () => {setMoviesList()}

    return(
<div className="container text-center">
  <div className="row row-cols-1 row-cols-lg-5 g-2 g-lg-3">
    <div className="col">
      <div className="p-3 border bg-light">Movie</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">Movie</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">Movie</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">Movie</div>
    </div>
    <div className="col">
      <div className="p-3 border bg-light">Movie</div>
    </div>
  </div>
</div>
    )
}