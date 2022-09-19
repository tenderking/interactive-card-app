import { useState } from "react";
function TheForm(props) {

  
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
		const elementId=["card-name","card-number","card-date-cvc"]
		elementId.forEach(id =>document.getElementById(id).classList.remove("show-error-border"))
		
  }
   
	function onValidate(inputType, inputId) {
		let validationMessage = "fail";

		function errorMessageOutput(message, id = inputId) {
			document.getElementById(id).nextSibling.classList.add("show-error");
			document.getElementById(id).classList.add("show-error-border")
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
		if (inputType === inputs.cardHolderName) {
			const regex = /^[a-zA-Z ']+$/
			if (!regex.test(inputType)) {
				setErrorStateName(errorMessageOutput("Name cannot have number"));
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
    
		validationMessage = "success";
		return validationMessage;
	}
 
  function handleSubmit(event) {
		event.preventDefault();

		const validations = [
			onValidate(inputs.cardHolderName, "card-name", errorMessageName),
			onValidate(inputs.cardNumber, "card-number", errorMessageNumber),
			onValidate(inputs.expiryMonth, "card-date-cvc", errorMessageDateCvc),
			onValidate(inputs.expiryYear, "card-date-cvc", errorMessageDateCvc),
			onValidate(inputs.cvcNumber, "card-date-cvc", errorMessageDateCvc),
		];

		if (validations.every((e) => e === "success")) {
			props.setCardInfo((currentValue) => (currentValue = inputs));
			props.setSuccessState((currentValue) => currentValue =true);
			console.log("ready to submit");
		} else {
			console.log("something went wrong", inputs);
		}
	}

  return <>
    <form onSubmit={handleSubmit}>
					<div className="w-100">
						<p className="Form--label">Card Holder Name</p>
						<input
							type="text"
							placeholder="e.g. Jane Appleseed"
							name="cardHolderName"
							value={inputs.cardHolderName || ""}
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
									name="expiryMonth"
									value={inputs.expiryMonth || ""}
									onChange={handleChange}
									onFocus={handleFocus}
									min="1"
									max="12"
                  />

								<input
									type="number"
									placeholder="YY"
									name="expiryYear"
									value={inputs.expiryYear || ""}
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
                </>
			
  
}


export default TheForm;