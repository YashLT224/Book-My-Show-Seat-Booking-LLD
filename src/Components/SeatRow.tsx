import "../styles.css";
import Seat, { SeatInterface } from "./Seat";
export interface seatRow {
  seat: SeatInterface[];
  label: string;
}
export default function SeatRow(props: seatRow) {
  return (
    <div className="seatRow">
      <div>{props.label}</div>
      <div className="seat_2ndRow">
        {props.seat.map((e) => {
          return <Seat {...e} />;
        })}
      </div>
    </div>
  );
}
