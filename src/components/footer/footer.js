import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";

import logo from "../../icons/footer/logo.svg";
import coffeeBeans from "../../icons/aboutUss/coffee-beans-black.svg";
import {HeaderNav} from "../header/header";
import {WrapperLine} from "../header/header";
import {LineBlack} from "../aboutUss/aboutUss";

const Wrapper = styled.div`
	width: 100%;
	height: 150px;
`;

const FooterNav = styled(HeaderNav)`
	margin: 0 auto 30px;
	span {
		color: #000;
		text-shadow: none;
	}
	a {
		color: #000;
		text-shadow: none;
	}
`;

const WrapperLineMB20 = styled(WrapperLine)`
	margin-bottom: 20px;
`;

const Footer = () => {
	const {pathname} = useLocation();
	const showLink = pathname !== "/ourcoffee";
	return (
		<Wrapper>
			<FooterNav>
				<span>
					<img alt='Logo' src={logo} />
					<Link to='/'>Coffee house</Link>
				</span>

				{showLink ? (
					<span>
						<Link to='/ourcoffee'>Our coffee</Link>
					</span>
				) : (
					<span>Our coffee</span>
				)}

				<span>For your pleasure</span>
			</FooterNav>
			<WrapperLineMB20>
				<LineBlack></LineBlack>
				<img src={coffeeBeans} alt='coffee-beans' />
				<LineBlack></LineBlack>
			</WrapperLineMB20>
		</Wrapper>
	);
};

export default Footer;
