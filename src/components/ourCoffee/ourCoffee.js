import styled from "styled-components";
import {Link} from "react-router-dom";

import logo from "../../icons/header/logo.svg";
import Bg from "../../img/ourCoffee/bg.jpg";
import {HeaderNav} from "../header/header";

const Wrapper = styled.header`
	width: 100%;
	height: 260px;
	background-color: red;
	background: url(${Bg}) no-repeat 50% / cover;
`;

const H2 = styled.h2`
	color: #fff;
	font-size: 40px;
	font-weight: 700;
	text-align: center;
	margin-top: 60px;
`;

const OurCoffee = () => {
	return (
		<Wrapper>
			<HeaderNav>
				<span>
					<img alt='Logo' src={logo} />
					<Link to='/Coffee/'>Coffee house</Link>
				</span>
				<span>Our coffee</span>
				<span>For your pleasure</span>
			</HeaderNav>
			<H2>Our Coffee</H2>
		</Wrapper>
	);
};

export default OurCoffee;
