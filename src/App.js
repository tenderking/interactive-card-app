import "./App.css";
import TheCards from "./components/TheCards.jsx";
import { useState } from "react";

function App() {
	const [cardInfo, setCardInfo] = useState({
		cardHolderName: "Jane Appleseed",
		cardNumber: "0000 0000 0000 0000",
		expiryDate: "00/00",
		cvcNumber: "000",
	});

	const [inputs, setState] = useState({});

	const [errorMessageName, setErrorStateName] = useState("Invalid Input");
	const [errorMessageNumber, setErrorStateNumber] = useState("Invalid Input");
	const [errorMessageDateCvc, setErrorStateDateCvc] = useState("Invalid Input");

	function handleChange(e) {
		const name = e.target.name;
		const value = e.target.value;
		setState((values) => ({ ...values, [name]: value }));

		return;
	}

	function handleFocus() {
		const errorMessage = document.querySelectorAll(".on-error");
		errorMessage.forEach((el) => el.classList.remove("show-error"));
	}

	function onValidate(inputType, inputId) {
		let validationMessage = "fail";
		function errorMessageOutput(message, id = inputId) {
			document.getElementById(id).nextSibling.classList.add("show-error");
			return message;
		}
		if (!inputType || !inputType.length) {
			switch (inputId) {
				case "card-name":
					setErrorStateName(errorMessageOutput("Input Cannot not be blank"));
					break;
				case "card-number":
					setErrorStateNumber(errorMessageOutput("Input Cannot not be blank"));
					break;
				case "card-date-cvc":
					setErrorStateDateCvc(errorMessageOutput("Input Cannot not be blank"));
					break;
			}

			return validationMessage;
		}

		if (inputType === inputs.cardNumber) {
			const regex = /^\d{16}$|^\d{4}\s+\d{4}\s\d{4}\s\d{4}$/;
			if (!regex.test(inputType)) {
				setErrorStateNumber(errorMessageOutput("Card Number must be valid"));
				console.log("no matching number");
				return validationMessage;
			}
		}
		if (inputType === inputs.cvcNumber) {
			const regex = /^\d{3}$/;
			if (!regex.test(inputType)) {
				setErrorStateDateCvc(errorMessageOutput("CVC Number must be valid"));

				return validationMessage;
			}
		}
		setCardInfo((currentValue) => (currentValue = inputs));
		validationMessage = "success";
		return validationMessage;
	}

	function handleSubmit(event) {
		event.preventDefault();
		const validations = [
			onValidate(inputs.name, "card-name", errorMessageName),
			onValidate(inputs.cardNumber, "card-number", errorMessageNumber),
			// onValidate(inputs.expiryDate, "card-date-cvc", errorMessageDateCvc),
			onValidate(inputs.cvcNumber, "card-date-cvc", errorMessageDateCvc),
		];
		if (validations.every((e) => e === "success")) {
			console.log("ready to submit");
		} else {
			console.log("something went wrong", inputs);
		}
	}
	return (
		<div className="App">
			<header className="App-header linear-gradient">
				<TheCards {...cardInfo} />
			</header>
			<main>
				<form onSubmit={handleSubmit}>
					<div className="w-100">
						<p className="Form--label">Card Holder Name</p>
						<input
							type="text"
							placeholder="e.g. Jane Appleseed"
							name="name"
							value={inputs.name || ""}
							onChange={handleChange}
							onFocus={handleFocus}
							id="card-name"
						/>
						<span className="on-error"> {errorMessageName}</span>
					</div>
					<div className="w-100">
						<p className="Form--label">Card Number</p>

						<input
							type="number"
							placeholder="e.g 1234 5678 9123 000"
							name="cardNumber"
							value={inputs.cardNumber || ""}
							onChange={handleChange}
							onFocus={handleFocus}
							id="card-number"
						/>
						<span className="on-error"> {errorMessageNumber}</span>
					</div>

					<div className="flex" id="card-date-cvc">
						<div className="w-100">
							<p className="Form--label">EXP.DATE(MM/YY)</p>
							<div className="flex w-100">
								<input
									type="number"
									placeholder="MM"
									name="month"
									value={inputs.month || ""}
									onChange={handleChange}
									onFocus={handleFocus}
									min="1"
									max="12"
								/>

								<input
									type="number"
									placeholder="YY"
									name="year"
									value={inputs.year || ""}
									onChange={handleChange}
									onFocus={handleFocus}
									min="22"
								/>
							</div>
						</div>
						<div className="w-100">
							<p className="Form--label">CVC</p>
							<input
								type="number"
								placeholder="e.g 123"
								name="cvcNumber"
								value={inputs.cvcNumber || ""}
								onChange={handleChange}
								onFocus={handleFocus}
							/>
						</div>
					</div>
					<span className="on-error"> {errorMessageDateCvc} </span>
					<button className="btn" type="submit">
						Confirm
					</button>
				</form>
			</main>
		</div>
	);
}

export default App;
