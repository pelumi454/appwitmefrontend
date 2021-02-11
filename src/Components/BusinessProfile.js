import React from 'react'
import ProductImage from './img/userimg3.jpg';
import './BusinessProfile.scss'

function BusinessProfile() {
  return (
        
    
    <div className=" row"> 
    <div className="col-md-8 row">
      <img
          src={ProductImage}
          alt="..."
          className=" col-lg-4 brand-img"
        />
      <div className=" col-md-6 profile-details">
          <h3 className="brand-name mt-4">Aspire Brand</h3>
          <p className="brand-details "><strong>Category:</strong>Fashion</p>
          <p className="brand-location"><strong>Location:</strong>Ibadan North</p>
          <p className="brand-bio"><strong>Bio:</strong>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>
    </div>
    <div className=' offset-1 icon col-md-2 mt-5'>
              <i class="fab fa-2x fa-whatsapp-square whatsapp mr-4 mt-4"></i>
                <i class="fas fa-2x  fa-phone phone"></i><br/>
                <i class="fas fa-2x fa-comment-dots comment mr-3 mt-3"></i>
                <i class="fas fa-2x fa-barcode barcode"></i>
      </div> 
  </div>
				
        
		
             
                

  )
}

export default BusinessProfile
