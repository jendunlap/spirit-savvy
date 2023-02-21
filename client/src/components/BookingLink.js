import { useNavigate, useParams } from 'react-router-dom'

const BookingLink = () => {
  const goToBooking = () => {
    navigate(`/booking/`)
  }

  let navigate = useNavigate()

  return (
    <div className="bookingHome" onClick={goToBooking}>
      {/* <img
        className="bookingHomeImage"
        src="https://i.imgur.com/UbksiP0.png"
      ></img> */}
      <h1 className="bookingLink">BOOK NOW</h1>
    </div>
  )
}

export default BookingLink
