import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const InputText = (props) => {
	const inputRef = useRef(null);

	useEffect(() => {
		// console.log(props.correctAnswer);
	});

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			console.log(props.correctAnswer + " " + props.answerValue);
			if (props.correctAnswer === props.answerValue) {
				console.log("Correct");
			} else {
				props.setTries(props.tries + 1);
				console.log("Wrong");
			}
		}
	};

	const listText = props.correctAnswer
		.split("")
		.map((element, i) => (
			<TextBox onClick={() => inputRef.current.focus()}>
				{props.answerValue && props.answerValue[i]}
			</TextBox>
		));

	return (
		<>
			<TextWrapper>{listText}</TextWrapper>
			<input
				ref={inputRef}
				onChange={props.handleChange}
				maxLength={props.correctAnswer.length}
				onKeyDown={handleKeyDown}
				style={{ opacity: 0 }}
			></input>
		</>
	);
};

export default InputText;

const TextWrapper = styled.div`
	display: flex;
	margin: 2rem 0;
	justify-content: center;
`;

const TextBox = styled.div`
	height: 40px;
	width: 37px;
	font-size: 30px;
	font-weight: bold;
	background: white;
	border-radius: 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	padding: 5px;
	box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.25);

	&:not(:last-child) {
		margin-right: 10px;
	}
`;
