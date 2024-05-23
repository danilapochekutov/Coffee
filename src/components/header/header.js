import styled from "styled-components";
import {Link} from "react-router-dom";

import mainBg from "../../img/header/main_bg.jpg";
import logo from "../../icons/header/logo.svg";
import coffeeBeans from "../../icons/header/coffee-beans.svg";

const Header = styled.header`
	display: block;
	background: url(${mainBg}) no-repeat 50% / cover; /* Зафиксирует изображение, чтобы оно не прокручивалось вместе с контентом */
	/* min-height: 100vh; */
	width: 100%;
	height: 640px;
`;
export const HeaderNav = styled.nav`
	position: relative;
	padding-top: 20px;
	display: flex;
	margin: auto 0 0 140px;
	align-items: end;
	justify-content: space-between;
	height: 45px;
	width: 364px;
	img {
		position: absolute;
		height: 43px;
		width: 100px;
		left: -25px;
		top: 20px;
	}
	span {
		cursor: pointer;
		margin-left: 40px;
		color: #ffffff;
		font-size: 12px;
		font-weight: 400;
		text-shadow: 0px 4px 4px #00000040;
		&:last-child {
			margin-right: 0;
		}
	}
	a {
		color: #ffffff;
		font-size: 12px;
		font-weight: 400;
		text-shadow: 0px 4px 4px #00000040;
		text-decoration: none;
	}
`;
const Info = styled.div`
	display: block;
	width: 670px;
	margin: 111px auto 0;
	text-align: center;
	h1 {
		color: #ffffff;
		font-size: 40px;
		font-weight: 700;
		text-shadow: 0px 4px 4px #00000040;
	}
	h2 {
		margin-bottom: 20px;
		color: #ffffff;
		font-size: 24px;
		font-weight: 700;
		text-shadow: 0px 4px 4px #00000040;
	}
`;
export const WrapperLine = styled.div`
	display: flex;
	width: 215px;
	margin: 0 auto 35px auto;
	justify-content: space-between;
	align-items: center;
`;
export const Line = styled.span`
	display: block;
	height: 0;
	border: 1px solid #fff;
	width: 68px;
	color: #fff;
	box-shadow: 0px 4px 4px #00000040;
`;
const WrapperButtom = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	button {
		cursor: pointer;
		background: transparent; /* Устанавливаем фон кнопки прозрачным */
		border: 1px solid #fff; /* Устанавливаем рамку с желаемым цветом */
		color: #ffffff;
		font-size: 14px;
		font-weight: 700;
		border-radius: 3px;
		box-shadow: 0px 4px 4px #00000040;
		height: 30px;
		width: 120px;
	}
`;

const Main = () => {
	return (
		<Header>
			<HeaderNav>
				<span>
					<img alt='Logo' src={logo} />
					<Link to='/Coffee/'>Coffee house</Link>
				</span>
				<span>
					<Link to='/Coffee/ourcoffee'>Our coffee</Link>
				</span>
				<span>For your pleasure</span>
			</HeaderNav>
			<Info>
				<h1>Everything You Love About Coffee</h1>
				<WrapperLine>
					<Line></Line>
					<img src={coffeeBeans} alt='coffee-beans' />
					<Line></Line>
				</WrapperLine>
				<h2>We makes every day full of energy and taste</h2>
				<h2>Want to try our beans?</h2>
			</Info>
			<WrapperButtom>
				<button>More</button>
			</WrapperButtom>
		</Header>
	);
};

export default Main;
