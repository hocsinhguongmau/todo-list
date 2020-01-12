import React from "react";

const Title = props => {
	return (
		<h1 className="Title">
			Todo list ({props.tasks.filter(task => !task.done).length}{" "}
			{props.tasks.filter(task => !task.done).length > 1
				? "items"
				: "item"}{" "}
			to do)
		</h1>
	);
};

const SmallTitle = props => {
	return (
		<p className="SmallTitle">
			<input
				type="checkbox"
				checked={props.showCompleted}
				onChange={props.toggled}
			/>
			Show completed tasks
		</p>
	);
};
export {Title, SmallTitle};
