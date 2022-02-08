//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import Navbar from "./component/navbar.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from "./component/card.jsx";
import Fotter from "./component/footer.jsx";

//render your react application
ReactDOM.render(
	<div>
		<Navbar />
		<Jumbotron />
		<div className=" container-fluid d-flex  ">
			<Card
				title="Ferrari"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam risus efficitur suscipit bibendum. Aenean at risus at justo sodales bibendum quis in nulla. Curabitur sapien nisl, tempor id lorem eget, congue pretium ex. Duis porta feugiat posuere. Nullam tortor diam, maximus in mauris vel, malesuada sollicitudin enim"
				imageUrl={
					"https://cdn.topgear.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2019/12/coches-baratos-400-cv_3.jpg?itok=0PGcj9u5"
				}
			/>
			<Card
				title="Jaguar"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam risus efficitur suscipit bibendum. Aenean at risus at justo sodales bibendum quis in nulla. Curabitur sapien nisl, tempor id lorem eget, congue pretium ex. Duis porta feugiat posuere. Nullam tortor diam, maximus in mauris vel, malesuada sollicitudin enim"
				imageUrl={
					"https://periodismodelmotor.com/wp-content/uploads/2020/08/coches-de-lujo-baratos-de-segunda-mano-1-1280x720.jpg"
				}
			/>
			<Card
				title="Seat"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam risus efficitur suscipit bibendum. Aenean at risus at justo sodales bibendum quis in nulla. Curabitur sapien nisl, tempor id lorem eget, congue pretium ex. Duis porta feugiat posuere. Nullam tortor diam, maximus in mauris vel, malesuada sollicitudin enim"
				imageUrl={
					"https://cdn.motor1.com/images/mgl/Y04xj/s3/seat-leon-e-hybrid-2020-primera-prueba.jpg"
				}
			/>
			<Card
				title="Renault"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam risus efficitur suscipit bibendum. Aenean at risus at justo sodales bibendum quis in nulla. Curabitur sapien nisl, tempor id lorem eget, congue pretium ex. Duis porta feugiat posuere. Nullam tortor diam, maximus in mauris vel, malesuada sollicitudin enim"
				imageUrl={
					"https://www.autopista.es/uploads/s1/55/20/18/7/5e3bd6d30ce694906f8b463f-estos-son-los-coches-mas-valorados-por-los-espanoles-en-este-2020.jpeg"
				}
			/>
		</div>

		<Fotter />
	</div>,
	document.querySelector("#app")
);
