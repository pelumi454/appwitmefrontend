import React from "react";
import NotFound from "./NotFound";
import BusinessProfile from '../Components/BusinessProfile'
import BusinessRating from '../Components/BusinessRating'

const BusinessDetail = (props) => {
	const business = props.business;

	return (
		<>
			{JSON.stringify(business) === JSON.stringify({}) ? (
				<NotFound />
			) : (
				<div className="">
				<div className="col-lg-10 col-12 col-md-8">
			<BusinessProfile />
     <BusinessRating/>
		</div>
				</div>
			)}
		</>
	);
};

export default BusinessDetail;
