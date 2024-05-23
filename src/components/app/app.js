import {Component} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {useEffect} from "react";
import {useLocation} from "react-router-dom";

import card from "../../img/ourBest/card_3.jpg";

import Main from "../header/header";
import AboutUss from "../aboutUss/aboutUss";
import OurBest from "../ourBest/ourBest";
import Footer from "../footer/footer";
import OurCoffee from "../ourCoffee/ourCoffee";
import AboutOurBeans from "../aboutOurBeans/aboutOurBeans";
import Filters from "../filters/filters";
import Cards from "../cards/cards";

const ScrollToTopOnMount = () => {
	const {pathname} = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};

class App extends Component {
	state = {
		data: [
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Brazil",
				price: "6.99$",
				id: "1",
			},
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Kenya",
				price: "6.99$",
				id: "2",
			},
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Columbia",
				price: "6.99$",
				id: "3",
			},
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Brazil",
				price: "6.99$",
				id: "4",
			},
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Brazil",
				price: "6.99$",
				id: "55",
			},
			{
				title: "AROMISTICO Coffee 1 kg",
				img: card,
				country: "Brazil",
				price: "6.99$",
				id: "6",
			},
		],
		filter: "all",
		term: "",
	};

	onFilterSelect = (filter) => {
		this.setState((prevState) => ({
			filter: prevState.filter === filter ? "all" : filter,
		}));
	};

	searchEmp = (data, term) => {
		if (term.length === 0) {
			return data;
		}

		return data.filter((item) => {
			return item.title.includes(term) || item.country.includes(term);
		});
	};

	onUpdateSearch = (term) => {
		this.setState({term});
	};

	filterPost = (data, filter) => {
		switch (filter) {
			case "Brazil":
				return data.filter((item) => item.country === "Brazil");
			case "Columbia":
				return data.filter((item) => item.country === "Columbia");
			case "Kenya":
				return data.filter((item) => item.country === "Kenya");
			case "all":
				return data;
			default:
				return data;
		}
	};

	render() {
		const {data, filter, term} = this.state;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);
		return (
			<>
				<Router>
					<ScrollToTopOnMount />
					<Routes>
						<Route
							path='/'
							element={
								<>
									<Main />
									<AboutUss />
									<OurBest />
									<Footer />
								</>
							}
						/>
					</Routes>
					<Routes>
						<Route
							path='/ourcoffee'
							element={
								<>
									<OurCoffee />
									<AboutOurBeans />
									<Filters
										onFilterSelect={this.onFilterSelect}
										onUpdateSearch={this.onUpdateSearch}
									/>
									<Cards visibleData={visibleData} />
									<Footer />
								</>
							}
						/>
					</Routes>
				</Router>
			</>
		);
	}
}

export default App;
