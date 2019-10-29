import React from 'react';
import Slider from 'react-slick';



const setting = {
    dots: true,
    arrow: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
}

var generateSlides =({slides}) => {
    if (slides){
        return(
          <Slider {...setting}>
            {slides.map((item)=>{
              return(
              <div key={item.id} className="item-slider" >
                
                <div className="caption">
                    <h4>{item.title}</h4>
                    <p>{item.topic}</p>
                </div>
              </div>
              )
              
            })}
           </Slider>
        )  
    }
}

function Featured (props){   
      
        return(
         
            <div>
             {generateSlides(props)}
            </div>
        )
}
    
    
export default Featured;