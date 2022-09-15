import "./App.css";
import TheCards from "./components/TheCards.jsx";

function App() {
	const cardInfo = {
		cardHolderName: "Jane Appleseed",
		cardNumber: "0000 0000 0000 0000",
		expiryDate: "00/00",
		cvc: "000",
	};
	return (
		<div className="App">
			<header className="App-header">
				<TheCards {...cardInfo} />
			</header>
			<main>
				<form>
					<div className="w-100">
						<p className="Form--label">Card Holder Name</p>
						<input type="text" placeholder="e.g. Jane Appleseed" />
					</div>
					<div className="w-100">
						<p className="Form--label">Card Number</p>
						<input type="text" placeholder="e.g 1234 5678 9123 000" />
					</div>

					<div className="flex">
						<div className="w-100">
							<p className="Form--label">EXP.DATE(MM/YY)</p>
							<div className="flex w-100">
								<input type="text" placeholder="MM" />
								<input type="text" placeholder="YY" />
							</div>
						</div>
						<div className="w-100">
							<p className="Form--label">CVC</p>
							<input type="text" placeholder="e.g 123" />
						</div>
					</div>
					<button className="btn">Confirm</button>
				</form>
			</main>
		</div>
	);
}

export default App;
