import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx";
import Container from "./container.jsx";
import Fotter from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Container />
			<Fotter />
		</div>
	);
};

export default Home;
