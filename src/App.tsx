import React from "react";

import "./App.scss";

import "./scss/main.scss";

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Navbar from "components/Navbar/Navbar";
import Footer from "components/Footer/Footer";
import Home from "pages/Home/Home";
import AboutUs from "pages/AboutUs/AboutUs";
import Products from "pages/Products/Products";
import NotFound from "pages/NotFound/NotFound";
import Brands from "pages/Brands/Brands";
import Search from "pages/Search/Search";

function App(): React.ReactElement
{
	return(
		<div className="App">
			<Router>
				<header className="u-m-bottom-2">
					<Navbar/>
				</header>

				<Switch>
					<Route path="/about-us">
						<AboutUs/>
					</Route>
					<Route path="/products/:slug?">
						<Products/>
					</Route>
					<Route path="/brands">
						<Brands/>
					</Route>
					<Route path="/search">
						<Search/>
					</Route>
					<Route path="/">
						<Home/>
					</Route>

					<Route>
						<NotFound/>
					</Route>
				</Switch>

				<Footer/>
			</Router>
		</div>
	);
}

export default App;
