import React, { useEffect, useState } from "react";
import Item from "./item.jsx";

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

	function handleDelete(index) {
		setTextArray(prevTextArray => prevTextArray.filter((_, i) => i !== index));
	}

	useEffect(() => {
		console.log(textArray);
	}, [textArray])

	return (
		<div className="myList">
			<h1 className="heading">todo list</h1>
			<ul className="list-group group">
				<input type="text" value={textBox} onKeyDown={handleOnEnter} onChange={handleOnChange} placeholder="What's the next task?"></input>
				{textArray.map((item, index) => (
					<Item key={index} text={item} onDelete={(() => handleDelete(index))}></Item>
				))}
			</ul>
		</div>
	);
};

export default Home;
