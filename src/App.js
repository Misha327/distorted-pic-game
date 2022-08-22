import "./App.css";
import styled from "styled-components";
import { useState } from "react";
import InputText from "./components/InputText";

function App() {
	const [answerValue, setAnswerValue] = useState();
	const [correctAnswer, setCorrectAnswer] = useState("owl");
	const [tries, setTries] = useState(0);
	const [images, setImages] = useState([
		"owl-1.png",
		"owl-2.png",
		"owl-3.png",
		"owl-4.png",
		"owl-5.png",
		"owl-6.png",
	]);

	const handleChange = (event) => {
		// if (/|d/.test(event.target.value)) {
		// 	event.target.value = event.target.value.substr(
		// 		event.target.value.length - 1
		// 	);
		// 	return;
		// }
		let charArray = event.target.value.split("");
		setAnswerValue(event.target.value);
	};


	return (
		<Background className="App">
			<Picture src={require(`./pictures/owl/${images[tries]}`)}></Picture>
			<DotList>
				{images.map((element, i) => (
					<Dot className={i === tries && "active"}></Dot>
				))}
			</DotList>
			<InputText
				tries={tries}
				setTries={setTries}
				correctAnswer={correctAnswer}
				answerValue={answerValue}
				handleChange={handleChange}
			></InputText>
		</Background>
	);
}

export default App;

const Background = styled.div`
	background: #4c8b42;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	opacity: 0.7;
`;

const Picture = styled.img`
	width: 200px;
	height: 200px;
	background: white;
	border-radius: 4px;
	align-self: center;
	margin-top: 20%;
	box-shadow: 0 8px 15px -11px rgba(0, 0, 0, 0.62);
`;

const DotList = styled.div`
	display: flex;
	justify-content: center;
	margin: 1rem;
`;

const Dot = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background: white;
	&:not(:last-child) {
		margin-right: 10px;
	}
`;
