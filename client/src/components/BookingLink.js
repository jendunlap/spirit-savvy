import { useNavigate, useParams } from 'react-router-dom'

const BookingLink = () => {
  const goToBooking = () => {
    navigate(`/booking/`)
  }

  let navigate = useNavigate()

  return (
    <div className="bookingHome" onClick={goToBooking}>
      <img
        className="bookingHomeImage"
        src="https://i.imgur.com/gTpwjLB.png"
      ></img>
      <h1 className="bookingLink">book now</h1>
    </div>
  )
}

export default BookingLink
