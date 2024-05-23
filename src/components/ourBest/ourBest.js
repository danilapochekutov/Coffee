import styled from "styled-components";

import peperBg from "../../img/ourBest/paper_bg.jpg";
import card1 from "../../img/ourBest/card_1.jpg";
import card2 from "../../img/ourBest/card_2.jpg";
import card3 from "../../img/ourBest/card_3.jpg";

import {Title} from "../aboutUss/aboutUss";

const Wrapper = styled.div`
	height: 495px;
	min-width: 100%;
	display: block;
	background: url(${peperBg}) no-repeat 50% / cover;
	text-align: center;
	padding-top: 80px;
`;

const Card = styled.div`
	margin-top: 39px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 71px;
`;

export const WrapperCard = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #ffffffa6;
	border-radius: 8px;
	height: 240px;
	width: 220px;
	img {
		display: flex;
		margin: 22px auto 10px auto;
		justify-content: center;
	}
`;
export const NameCard = styled.p`
	color: #000000;
	margin: 0;
	font-size: 14px;
	font-weight: 400;
	text-align: center;
`;
export const Price = styled.p`
	display: flex;
	justify-content: flex-end;
	margin: 10px 20px 0;
	color: #000000;
	font-size: 14px;
	font-weight: 700;
`;

const OurBest = () => {
	const CardDatimg = [
		{
			title: "Solimo Coffee Beans 2 kg",
			img: card1,
			style: {height: "130px", width: "151px"},
			price: "10.73$",
		},
		{
			title: "Presto Coffee Beans 1 kg",
			img: card2,
			style: {height: "134px", width: "151px"},
			price: "15.99$",
		},
		{
			title: "AROMISTICO Coffee 1 kg",
			img: card3,
			style: {height: "115px", width: "167px", margin: "37px auto 14px auto"},
			price: "6.99$",
		},
	];

	const cards = CardDatimg.map(({title, img, price, style}) => {
		return (
			<WrapperCard key={title}>
				<img style={style} src={img} alt='coffee' />
				<NameCard>{title}</NameCard>
				<Price>{price}</Price>
			</WrapperCard>
		);
	});
	return (
		<Wrapper>
			<Title>Our best</Title>
			<Card>{cards}</Card>
		</Wrapper>
	);
};

export default OurBest;
