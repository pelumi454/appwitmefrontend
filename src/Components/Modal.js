import React from "react";
import "./modal.scss";

function Modal({ show, closeModalHandler }) {
	return (
		<div
			className="modal-wrapper"
			style={{
				visibility: show ? "visible" : "hidden",
				opacity: show ? "1" : "0",
			}}
		>
			<div className="modal-header row">
				<span className=" float-left hide" onClick={closeModalHandler}>
					{" "}
					<button type="button" className="btn btn-x">
						x{" "}
					</button>{" "}
				</span>
				<p className="title text-center">Filter options</p>
				<div className="float-right doneBtn">
					<button type="button" className="btn btn-green hide">
						Done
					</button>
				</div>
			</div>
			<div className="modalContent">
				<div className="modalBody">
					<label htmlFor="" className="mt-2">
						Location
					</label>
					<div className="input-group mb-4">
						<select className="custom-select" id="inputGroupSelect04">
							<option>Ibadan</option>
							<option value="1">Lagos</option>
							<option value="2">Oyo</option>
							<option value="3">Abuja</option>
						</select>
					</div>
					<label htmlFor="">Categories</label>
					<div className="input-group">
						<select className="custom-select" id="inputGroupSelect04">
							<option>Fashion</option>
							<option value="1">Music</option>
							<option value="2">Tech</option>
							<option value="3">Writer</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
