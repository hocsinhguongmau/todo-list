import React, {Component} from "react";
import Ax from "../Ax/Ax";

class Layout extends Component {
	state = {
		tasks: [
			{action: "Buy flowers", done: true},
			{action: "Doing homework", done: true},
			{action: "Cleaning", done: false},
			{action: "Laundry", done: false},
			{action: "Sleep", done: false}
		],
		newTask: "",
		showCompleted: false
	};

	checkboxHandler = todo => {
		this.setState({
			tasks: this.state.tasks.map(item =>
				item.action === todo.action ? {...item, done: !item.done} : item
			)
		});
	};

	todoDeleteHandler = todo => {
		const updatedTasks = this.state.tasks.filter(
			item => item.action !== todo.action
		);
		this.setState({tasks: updatedTasks});
	};

	inputTaskHandler = event => {
		this.setState({newTask: event.target.value});
	};

	addTaskHandler = e => {
		e.preventDefault();
		if (
			!this.state.tasks.find(
				item => item.action === this.state.newTask
			) &&
			this.state.newTask !== ""
		) {
			this.setState({
				tasks: [
					...this.state.tasks,
					{action: this.state.newTask, done: false}
				],
				newTask: ""
			});
		}
	};

	toggleCompletedHandler = () => {
		this.setState({showCompleted: !this.state.showCompleted});
	};

	render() {
		return (
			<Ax>
				<h1 className="Title">
					Todo list (
					{this.state.tasks.filter(task => !task.done).length}{" "}
					{this.state.tasks.filter(task => !task.done).length > 1
						? "items"
						: "item"}{" "}
					to do)
				</h1>
				<div className="Display">
					<div className="AddTodo">
						<form action="" onSubmit={this.addTaskHandler}>
							<input
								type="text"
								onChange={this.inputTaskHandler}
							/>
							<button type="submit">Add</button>
						</form>
					</div>
					<div className="List Todo">
						{this.state.tasks.filter(task => !task.done).length >
							0 && (
							<table>
								<thead>
									<tr>
										<th>Description</th>
										<th>Done</th>
										<th>Delete</th>
									</tr>
								</thead>
								<tbody>
									{this.state.tasks
										.filter(item => item.done === false)
										.map((item, index) => (
											<tr key={`task-${index}`}>
												<td>{item.action}</td>
												<td>
													<input
														type="checkbox"
														onChange={() =>
															this.checkboxHandler(
																item
															)
														}
														checked={item.done}
													/>
												</td>
												<td>
													<button
														className="Delete"
														onClick={() =>
															this.todoDeleteHandler(
																item
															)
														}
													></button>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						)}
					</div>
					<p className="SmallTitle">
						<input
							type="checkbox"
							checked={this.state.showCompleted}
							onChange={this.toggleCompletedHandler}
						/>
						Show completed tasks
					</p>
					{this.state.showCompleted && (
						<div className="List Completed">
							<table>
								<thead>
									<tr>
										<th>Description</th>
										<th>Done</th>
									</tr>
								</thead>
								<tbody>
									{this.state.tasks
										.filter(item => item.done === true)
										.map((item, index) => (
											<tr key={`task-${index}`}>
												<td>{item.action}</td>
												<td>
													<input
														type="checkbox"
														onChange={() =>
															this.checkboxHandler(
																item
															)
														}
														checked={item.done}
													/>
												</td>
											</tr>
										))}
								</tbody>
							</table>
						</div>
					)}
				</div>
			</Ax>
		);
	}
}

export default Layout;
