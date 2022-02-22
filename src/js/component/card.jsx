import React from "react";
import PropType from "prop-types";

//stilos a la card
const cardStyles = {
	// width: "30rem",
	margin: "3px",
};

const Card = (props) => {
	return (
		<div className="col-md-6 col-lg-3">
			<div className="card" style={cardStyles}>
				<div>
					<img
						src={props.imageUrl}
						className=" image image-fluid"
						alt="..."
					/>
				</div>
				<div className="card-body">
					<h5 className="card-title text-center">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropType.string,
	description: PropType.string,
	imageUrl: PropType.imageUrl,
};

export default Card;
