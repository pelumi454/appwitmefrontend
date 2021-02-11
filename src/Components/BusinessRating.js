import React from 'react'
import BusinessImage from '../Components/BusinessImage'
import CustomerReviews from '../Components/CustomerReviews'
import './BusinessRating.scss'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


function BusinessRating() {
  return (
    < div className="">
          <span className="businessIcon align-self-center">
                  <i className="fas fa-2x fa-star rating"></i>
                  <i className="fas fa-2x fa-star rating"></i>
                  <i className="fas fa-2x fa-star rating"></i>
                  <i className="fas fa-2x fa-star rating"></i>
                  <i className="fas fa-2x fa-star rating"></i>
            </span>
            {<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mt-4">
                <Tab eventKey="home" title="Products and Services">
                 <BusinessImage/>
                </Tab>
                <Tab eventKey="profile" title="Customer Reviews">
                 <CustomerReviews/>
                </Tab>
            </Tabs>
  }
        </div>
             
          
          
    )
  }

export default BusinessRating
