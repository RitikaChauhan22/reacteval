import "../styles/movie.css";

export const SingleMovieDetails = ({id,title,genre,rating,date,poster}) => {


    // make a request to get the details
  return <>
       <div className="div" style={{width:"500px", border: "2px solid black", marginLeft: "20px", borderRadius:"5px"}}>
         <div><img style={{width: "50%"}} src= {poster} alt="" /></div>
         <div>
          <h4>{title}</h4>
          
         </div>
         <div className="ratings">
           <div id="rating"> {rating}    </div>
           <div><p>{genre}</p></div>
         </div>
       </div>
  </>;
};