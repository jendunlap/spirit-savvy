import { useNavigate, useParams } from 'react-router-dom'

const BookingLink = () => {
  const goToBooking = () => {
    navigate(`/booking/`)
  }

  let navigate = useNavigate()

  return (
    <div onClick={goToBooking}>
      <h1>Book</h1>
    </div>
  )
}

export default BookingLink
