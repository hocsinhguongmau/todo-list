import React from "react";

const AddTodo = props => {
	return (
		<div className="AddTodo">
			<form action="" onSubmit={props.submitted}>
				<input
					type="text"
					onChange={props.changed}
					value={props.values}
				/>
				<button type="submit">Add</button>
			</form>
		</div>
	);
};

export default AddTodo;
