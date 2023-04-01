import Rating from '@mui/material/Rating';

export default function RatingMUI() {
  return (
   <>
   <h1>Rating in stars </h1>
   <Rating/>

<h1>default Rating 3 </h1>
   <Rating value={3} /> 

   <h2>read only rating: default value 3</h2>
   <Rating value={3} readOnly/> 

   <h3>rating with precision</h3>
   <Rating precision={0.5} /> <br />
   <Rating value={3.5} precision={0.5} /> <br />
    <Rating value={1.5} precision={0.5} readOnly/> 
   </>
  
  )
}
