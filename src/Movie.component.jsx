import { useState } from "react";

export default function Movie(){
    let [movieName,setMovieName] = useState("")
    let [movieYear,setMovieYear] = useState("")
    let [movieRating,setMovieRating] = useState("")
    let [movieLang,setMovieLang] = useState("")
    let [movieOverview,setMovieOverview] = useState("")
    let [movieCast,setMovieCast] = useState("")
    let [movieTrailer,setMovieTrailer] = useState("")
    let [movieGenres,setMovieGenres] = useState("")
    let [moviePoster,setMoviePoster] = useState("")

    return(
        <div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src={moviePoster} alt={movieName} />
            </button>
            
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{movieName}  {movieYear}</h5>
                    <h3>{movieGenres}</h3>
                    <h3>{movieLang}</h3>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
            
                    {movieOverview}
                    {movieRating}
                    <br />
                    <video width="320" height="240" controls>
                    <source src={movieTrailer} type="video/mp4">
                    </video>
            
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-primary">WATCH</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}