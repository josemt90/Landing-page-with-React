import React from "react";

const Nabvar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-white ">
			<div className="container-fluid mx-5 ">
				<a className="navbar-brand text-white" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="d-flex justify-content-evenly">
					<div className="collapse navbar-collapse " id="navbarNav">
						<ul className="navbar-nav ">
							<li className="nav-item">
								<a
									className="nav-link active text-white"
									aria-current="page"
									href="#">
									Home
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Features
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-white" href="#">
									Pricing
								</a>
							</li>
							<li className="nav-item"></li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Nabvar;
