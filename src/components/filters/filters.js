import styled from "styled-components";
import {Component} from "react";

// import "./filter.css";

const Wrapper = styled.div`
	padding-top: 60px;
	width: 696px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 284px 327px;
	gap: 83px;
	p {
		color: #000;
		margin: 0;
		font-size: 14px;
		font-weight: 400;
	}
`;

const Input = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 12px;
	input {
		background-color: #ffffff;
		border-radius: 4px;
		box-shadow: 4px 4px 20px #00000040;
		height: 30px;
		width: 180px;
		text-align: center;
		border: none;
	}
`;

const Filte = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	button {
		background-color: ${(props) => (props.active ? "#f0f0f0" : "#ffffff")};
		border-radius: 4px 4px 4px 4px;
		border: none;
		box-shadow: 4px 4px 20px #00000040;
		height: 30px;
		width: 75px;
		margin-left: 5px;
		transition: background-color 0.3s;
		cursor: pointer; // Добавлено для показа, что кнопка кликабельна
		&.active {
			background-color: #f0f0f0;
		}
	}
	button:hover {
		background-color: #f0f0f0;
	}
`;

class Filters extends Component {
	state = {
		term: "",
		activeFilter: null,
	};

	onUpdateSearch = (e) => {
		const term = e.target.value;
		this.setState({term});
		this.props.onUpdateSearch(term);
	};

	render() {
		const {onFilterSelect} = this.props;
		const {activeFilter} = this.state;
		const nameButtons = [{name: "Brazil"}, {name: "Kenya"}, {name: "Columbia"}];

		const buttons = nameButtons.map(({name}) => {
			return (
				<button
					key={name}
					className={activeFilter === name ? "active" : ""}
					value={name}
					onClick={(e) => {
						onFilterSelect(e.target.value);
						this.setState((prevState) => ({
							activeFilter: prevState.activeFilter === name ? null : name,
						}));
					}}
				>
					{name}
				</button>
			);
		});

		return (
			<Wrapper>
				<Input>
					<p>Lookiing for</p>
					<input
						type='text'
						value={this.state.term}
						onChange={this.onUpdateSearch}
						placeholder='start typing here...'
					/>
				</Input>
				<Filte>
					<p>Or filter</p>
					{buttons}
				</Filte>
			</Wrapper>
		);
	}
}

export default Filters;
