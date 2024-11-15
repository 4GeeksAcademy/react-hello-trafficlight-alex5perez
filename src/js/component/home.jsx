import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selected, setSelected] = useState(null);
	const [newButton, setNewButton] = useState(false);

	const cambiarColor = () => {
		if (selected === "null") {
			setSelected("red");
		} else if (selected === "red") {
			setSelected("orange");
		} else if (selected === "orange") {
			setSelected("green");
		} else if (selected === "green") {
			setSelected("red");
		}
	};

	return (
		<div className="text-center mt-1">

			<div className="red"><button style={{
				fontSize: "4rem",
				backgroundColor: selected === "red" ? "red" : null,
			}}
				onClick={() => {
					setSelected(selected === "red" ? null : "red");
				}}>🔴</button></div>

			<div className="orange"><button style={{
				fontSize: "4rem",
				backgroundColor: selected === "orange" ? "orange" : null,
			}}
				onClick={() => {
					setSelected(selected === "orange" ? null : "orange");
				}}>🟠</button></div>

			<div className="green"><button style={{
				fontSize: "4rem",
				backgroundColor: selected === "green" ? "green" : null,
			}}
				onClick={() => {
					setSelected(selected === "green" ? null : "green");
				}}>🟢</button></div>

			<div className="purple"><button style={{
				fontSize: "4rem",
				backgroundColor: selected === "purple" ? "purple" : null,
				display: newButton ? "inline" : "none",
			}}
				onClick={() => {
					setSelected(selected === "purple" ? null : "purple");
				}}>🟣</button></div>

			<div className="d-flex flex-column align-items-center">
				<button className="btn btn-success mt-2 d-block" onClick={() => setNewButton(!newButton)}>Crea un semáforo lila</button>
				<button className="btn btn-success mt-2 d-block" onClick={() => {setSelected("red"); cambiarColor()}}>Cambia el semáforo seleccionado</button>
			</div>
		</div>
	);
};

export default Home;
