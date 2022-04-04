import { useEffect, useState } from "react"

const useReview=()=>{

const [reviews, setReviews]=useState([]);
useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setReviews(data.slice(0,3)))
   
},[])
return[reviews, setReviews];
}
export default useReview;