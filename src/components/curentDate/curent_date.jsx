import './curentDate.css'
import moment from 'moment';

function Curent_date() {
    const date = new Date();
    const formattedDate = moment(date).format("DD  MMMM,YYYY");
  return (
    <div className="curent-date">{formattedDate}</div>
  )
}

export default Curent_date;
