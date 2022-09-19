import completedIcon from "../assets/images/icon-complete.svg"
function Success() {
  return <>
    <div className="success">
      <img src={completedIcon} alt="success-icon" />
      <h1>THANK YOU!</h1>
      <p className="success-text">We've added your card details</p>
      <button> Continue</button>
  </div>
  </>
}
export default Success