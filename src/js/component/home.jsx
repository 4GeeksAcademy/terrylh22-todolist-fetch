import React, { useEffect, useState } from "react";
import List from "./list.jsx";

//create your first component
const Home = () => {
	const [textArray, setTextArray] = useState([]);
	const [textBox, setTextBox] = useState("");

	function handleOnEnter(event) {
		if (event.key === "Enter") {
			setTextArray(prevTextArray => [...prevTextArray, textBox]);
			setTextBox("");
		}
	}

	function handleOnChange(event) {
		setTextBox(event.target.value);
	}

	useEffect(() => {
		console.log(textArray);
	}, [textArray])

	return (
		<>
			<input type="text" value={textBox} onKeyDown={handleOnEnter} onChange={handleOnChange}></input>
			<List />
		</>
	);
};

export default Home;
