export const SingleMovieDetails = ({id,title,genre,rating,date,poster}) => {


    // make a request to get the details
  return <>
       <div className="div">
         <div><img src= {poster} alt="" /></div>
         <div>
          <h4>{title}</h4>
          
         </div>
         <div className="ratings">
           <div id="rating"> {rating}        </div>
           <div><p>{genre}</p></div>
         </div>
       </div>
  </>;
};