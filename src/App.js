import "./App.css";
import TheCards from "./components/TheCards.jsx";
import TheForm from "./components/TheForm.jsx";
import Success from "./components/Success.jsx";
import { useState } from "react";

function App() {
	const [cardInfo, setCardInfo] = useState({
		cardHolderName: "Jane Appleseed",
		cardNumber: "0000000000000000",
		expiryMonth: "00",
		expiryYear: "00",
		cvcNumber: "000",
	});
	const [isSuccessful, setSuccessState] = useState(false);

	return (
		<div className="App">
			<header className="App-header linear-gradient">
				<TheCards {...cardInfo} />
			</header>
			<main>
				{isSuccessful ? (
					<Success />
				) : (
					<TheForm
						setCardInfo={setCardInfo}
						setSuccessState={setSuccessState}
					/>
				)}
			</main>
		</div>
	);
}

export default App;
