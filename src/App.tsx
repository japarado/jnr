import React from "react";
import "./scss/main.scss";

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
/* import Footer from "components/Footer/Footer"; */
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import Products from "pages/Products/Products";
import NotFound from "pages/NotFound/NotFound";
import Brands from "pages/Brands/Brands";

function App(): React.ReactElement
{
	return(
		<Router>
			<header className="u-m-bottom-2">
				<Navbar/>
			</header>

			<Switch>
				<Route path="/about-us">
					<AboutUs/>
				</Route>
				<Route path="/products/:id?">
					<Products/>
				</Route>
				<Route path="/brands">
					<Brands/>
				</Route>
				<Route path="/">
					<Home/>
				</Route>

				<Route>
					<NotFound/>
				</Route>
			</Switch>

			{/* <Footer/> */}
		</Router>
	);
}

export default App;
