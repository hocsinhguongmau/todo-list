import React from "react";

const TodoRow = props => {
	return (
		<tr>
			<td>{props.items.action}</td>
			<td>
				<input
					type="checkbox"
					onChange={() => props.checked(props.items)}
					checked={props.items.done}
				/>
			</td>

			{props.deleteBtn && (
				<td>
					<button
						className="Delete"
						onClick={() => props.deleted(props.items)}
					></button>
				</td>
			)}
		</tr>
	);
};
export default TodoRow;
