import styled from "styled-components";

import {WrapperLine} from "../header/header";
import {Line} from "../header/header";
import coffeeBeans from "../../icons/aboutUss/coffee-beans-black.svg";

const Wrapper = styled.div`
	background-color: #ffffff;
	height: 520px;
	min-width: 100%;
	text-align: center;
	padding-top: 80px;
`;

export const Title = styled.h2`
	color: #000000;
	font-weight: 400;
	font-size: 24px;
	margin-bottom: 20px;
`;

export const LineBlack = styled(Line)`
	border: 1px solid #000;
	color: #000;
	box-shadow: none;
`;

const Text = styled.div`
	display: block;
	height: 223px;
	width: 589px;
	margin: 40px auto 0 auto;
	p {
		margin: 0;
		color: #000000;
		font-size: 14px;
		font-weight: 400;
		text-align: center;
	}
`;

const AboutUss = () => {
	return (
		<Wrapper>
			<Title>About Us</Title>
			<WrapperLine>
				<LineBlack></LineBlack>
				<img src={coffeeBeans} alt='coffee-beans' />
				<LineBlack></LineBlack>
			</WrapperLine>

			<Text>
				<p>
					Extremity sweetness difficult behaviour he of. On disposal of as landlord
					horrible.
					<br />
					Afraid at highly months do things on at. Situation recommend objection do
					intention
					<br />
					so questions. As greatly removed calling pleased improve an. Last ask him cold
					feel
					<br />
					met spot shy want. Children me laughing we prospect answered followed. At it
					went
					<br />
					is song that held help face.
					<br />
					<br />
					Now residence dashwoods she excellent you. Shade being under his bed her, Much
					<br />
					read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
					<br />
					horrible but confined day end marriage. Eagerness furniture set preserved far
					<br />
					recommend. Did even but nor are most gave hope. Secure active living depend son
					<br />
					repair day ladies now.
				</p>
			</Text>
		</Wrapper>
	);
};

export default AboutUss;
