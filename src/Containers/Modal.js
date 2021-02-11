import React from "react";
import { Button } from "react-bootstrap";

const Modal = (props) => {
	return (
		<Modal show={props.show} onHide={props.closeModalHandler}>
			<Modal.Header closeButton>
				<Modal.Title>Modal heading</Modal.Title>
			</Modal.Header>
			<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={props.closeModalHandler}>
					Close
				</Button>
				<Button variant="primary" onClick={props.closeModalHandler}>
					Save Changes
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default Modal;
