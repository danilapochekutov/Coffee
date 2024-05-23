import styled from "styled-components";

import girl from "../../img/aboutOurBeans/girl.jpg";
import coffeeBeans from "../../icons/aboutUss/coffee-beans-black.svg";
import {WrapperLine} from "../header/header";
import {LineBlack} from "../aboutUss/aboutUss";

const Container = styled.div`
	display: grid;
	width: 697px;
	height: 355px;
	grid-template-columns: 272px 346px;
	gap: 79px;
	margin: 0 auto;
	padding: 70px 0 57px 0;
`;

const Column1 = styled.div`
	display: grid;
	align-items: center;
	img {
		width: 272px;
		height: 355px;
	}
`;
const Column2 = styled.div`
	display: grid;
	align-items: center;
	text-align: center;
	h2 {
		margin: 9px 0 20px;
		color: #000000;
		font-size: 24px;
		font-weight: 400;
	}
`;

const Text = styled.p`
	color: #000000;
	font-size: 14px;
	font-weight: 400;
	margin: 0;
`;

const WrapperLineMB25 = styled(WrapperLine)`
	margin-bottom: 25px;
`;

const LineBlack240 = styled(LineBlack)`
	width: 240px;
	margin: 0 auto;
`;

const AboutOurBeans = () => {
	return (
		<>
			<Container>
				<Column1>
					<img src={girl} alt='girl' />
				</Column1>
				<Column2>
					<h2>About our beans</h2>
					<WrapperLineMB25>
						<LineBlack></LineBlack>
						<img src={coffeeBeans} alt='coffee-beans' />
						<LineBlack></LineBlack>
					</WrapperLineMB25>
					<Text>
						Extremity sweetness difficult behaviour he of. On disposal of as landlord
						horrible.
						<br />
						<br />
						Afraid at highly months do things on at. Situation recommend objection do
						intention
						<br />
						so questions. <br />
						As greatly removed calling pleased improve an. Last ask him cold feel
						<br />
						met spot shy want. Children me laughing we prospect answered followed. At it
						went
						<br />
						is song that held help face.
					</Text>
				</Column2>
			</Container>
			<LineBlack240 />
		</>
	);
};

export default AboutOurBeans;
