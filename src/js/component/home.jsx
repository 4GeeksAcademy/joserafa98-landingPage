import React from "react";

//include images into your bundle
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./cards";
import Footer from "./footer";
//create your first component
const Home = () => {
	return (
		<>
		<Navbar></Navbar>
		<Jumbotron></Jumbotron>
		<Cards></Cards>
		<Footer></Footer>
		</>
	);
};

export default Home;
