import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';




    const MovieCard = ({ card: { id,title,image,rating , Description },deleteHAndeler }) => {
      
      const delteMovie = () => {
        deleteHAndeler(id);
      };
       
      return (
           
      <div className="card">
      <div className="card-image">
        
      <img src={image} alt="poster" width="250px"></img>
        
      </div>
                
        <div className="card-description">
              
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h3 style={{marginTop:'10px'}}>{rating}</h3>
             
              <Button variant="warning" onClick={() => delteMovie()}>Remove </Button>
             
            </div>
              <h2> {title}</h2>
              <p> {Description}</p>
             
            </div>
            
    </div>
  )
}

export default MovieCard;