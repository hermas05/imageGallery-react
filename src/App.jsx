import React, { useEffect, useState } from 'react'
import ImageCard from "../src/components/ImageCard"
import ImgSearch from "../src/components/ImgSearch"

function App() {

  const [images , setImages]=useState([]);
  const [loading , setLoading]=useState(true);
  const [term , setTerm] = useState('');
  const url = "https://picsum.photos/v2/list"
  useEffect(()=>{
    fetch(url)
    .then(res => res.json())
    .then(data => {
      setImages(data)
      setLoading(false);
      console.log(data)
    })
    .catch(err => console.log(err));
  } , [term] );



  return (
     
    <div className="container mx-auto">
      <ImgSearch 
      searchText = {(text) => setTerm(text)}
      />
      {loading ? <h1 className='text-6xl text-center mx-auto mt-32'>loading...</h1> :
        <div className="grid grid-cols-3">
      {
        images.map((image) =>{
          return(
          <ImageCard 
          key={image.id}
          image={image}
          
          />
          )
        })
      }
    </div>}
    
    </div>
  )
}

export default App