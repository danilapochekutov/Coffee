import styled from "styled-components";

// import card from "../../img/ourBest/card_3.jpg";
import {WrapperCard} from "../ourBest/ourBest";
import {NameCard} from "../ourBest/ourBest";
import {Price} from "../ourBest/ourBest";

const Wrapper = styled.header`
	width: 100%;
	height: 640px;
	display: flex;
	justify-content: center;
	padding-bottom: 30px;
`;

const CardWrapper = styled(WrapperCard)`
	height: 260px;
	width: 220px;
	background-color: #ffffff;
	box-shadow: 4px 4px 20px #00000040;
	img {
		height: "115px";
		width: "167px";
		margin: "37px auto 14px auto";
	}
`;

const Country = styled.div`
	margin: 14px 27px 0;
	display: flex;
	justify-content: flex-end;
`;

const CardName = styled(NameCard)`
	margin-top: 14px;
`;

const Card = styled.div`
	margin-top: 60px;
	gap: 71px;
	row-gap: 60px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	flex-wrap: wrap;
	max-width: 810px;
`;

const Cards = ({visibleData}) => {
	const cards = visibleData.map(({title, img, price, country, id}) => {
		return (
			<CardWrapper key={id}>
				<img src={img} alt='coffee' />
				<CardName>{title}</CardName>
				<Country>{country}</Country>
				<Price>{price}</Price>
			</CardWrapper>
		);
	});
	return (
		<Wrapper>
			<Card>{cards}</Card>
		</Wrapper>
	);
};

export default Cards;
