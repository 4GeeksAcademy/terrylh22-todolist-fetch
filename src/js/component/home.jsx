import React, { useEffect, useState } from "react";
import Item from "./item.jsx";

//create your first component
const Home = () => {
	const [textArray, setTextArray] = useState([
		{
			label: "example item",
			done: false
		}
	]);
	const [textBox, setTextBox] = useState("");

	function getList() {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
		  method: 'GET',
		  headers: {
			'Content-Type': 'application/json'
		  }
		})
		  .then(res => {
			if (!res.ok) throw Error(res.statusText);
			return res.json();
		  })
		  .then(response => console.log('Success:', response))
		  .catch(error => console.error(error));
	}

	
	function updateList(data) {
		fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
			method: 'PUT',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		})
		  .then(res => {
			  if (!res.ok) throw Error(res.statusText);
			return res.json();
		})
		.then(response => console.log('Success:', response))
		.catch(error => console.error(error));
	}
	
	let listItem = {
		label: textBox,
		done: false
	}
	
	function handleOnEnter(event) {
		if (event.key === "Enter") {
			
			setTextArray(prevTextArray => [...prevTextArray, listItem]);
			setTextBox("");	
		}
	}
	
	function handleOnChange(event) {
		setTextBox(event.target.value);
	}
	
	function handleDelete(index) {
		setTextArray(prevTextArray => prevTextArray.filter((_, i) => i !== index));
	}
	
	// useEffect(() => {
	// 	updateList(textArray);
	// }, [])
	
	useEffect(() => {
		console.log(textArray);
		updateList(textArray);
	}, [textArray])
	
	return (
		<div className="myList">
			<h1 className="heading">todo list</h1>
			<ul className="list-group group">
				<input type="text" value={textBox} onKeyDown={handleOnEnter} onChange={handleOnChange} placeholder="What's the next task?"></input>
				{textArray.map((item, index) => (
					<Item key={index} text={item.label} onDelete={(() => handleDelete(index))}></Item>
					))}
			</ul>
		</div>
	);
};

export default Home;

// function deleteList() {
// 	fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
// 	  method: 'DELETE',
// 	  headers: {
// 		'Content-Type': 'application/json'
// 	  }
// 	})
// 	  .then(res => {
// 		if (!res.ok) throw Error(res.statusText);
// 		return res.json();
// 	  })
// 	  .then(response => console.log('Success:', response))
// 	  .catch(error => console.error(error));
//   }

// function createList() {
// 	fetch('https://playground.4geeks.com/apis/fake/todos/user/terrylh22', {
// 	  method: 'POST', // or 'POST'
// 	  body: JSON.stringify([]),// data can be a 'string' or an {object} which comes from somewhere further above in our application
// 	  headers: {
// 		'Content-Type': 'application/json'
// 	  }
// 	})
// 	  .then(res => {
// 		if (!res.ok) throw Error(res.statusText);
// 		return res.json();
// 	  })
// 	  .then(response => console.log('Success:', response))
// 	  .catch(error => console.error(error));
// }