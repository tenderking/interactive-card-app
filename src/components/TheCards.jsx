import bgCardback from "../assets/images/bg-card-back.png";
import bgCardFront from "../assets/images/bg-card-front.png";
import cardLogo from "../assets/images/card-logo.svg"
function TheCards(props) {
  return <>
    <div className="App-header__container" >
      <div className="c-card--back">

      <img className="c-card--back__container" src={bgCardback} alt="header img" />
      <p className="c-card--cvc">{props.cvcNumber }</p>
      </div>
      <div className="c-card--front" >
        <img className="c-card--front__container" src={bgCardFront} alt="header img" />
      <img className="c-card--logo" src={cardLogo} alt="header img" />
        <p className="c-card--number">{props.cardNumber.replace(/\d{4}/g,"$&\n")}</p>
        <p className="c-card--name"> {props.cardHolderName}</p>
        <p className="c-card--expiry">{props.expiryMonth}/{ props.expiryYear}</p>
      </div>
    </div>
  </>
}

export default TheCards;