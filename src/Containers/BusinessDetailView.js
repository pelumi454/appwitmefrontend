import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/businessRedux";
import Loading from "../Components/Loading";
import BusinessDetail from "../Components/BusinessDetail";
import Reviews from "../Components/Reviews";

class BusinessDetailView extends Component {
	componentDidMount() {
		this.props.fetchbisiness();
	}

	render() {
		const { business, reviews, isLoading } = this.props;
		return (
			<>
				{isLoading === true ? (
					<Loading />
				) : (
					<>
						<BusinessDetail business={business} />
						<Reviews reviews={reviews} />
					</>
				)}
			</>
		);
	}
}

const mappropsToProps = (state) => {
	return {
		business: state.business,
		username: state.username,
		reviews: state.reviews,
		isLoading: state.isLoading,
		error: state.error,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchbisiness: () => dispatch(actions.fetchBusiness()),
	};
};

export default connect(mappropsToProps, mapDispatchToProps)(BusinessDetailView);
