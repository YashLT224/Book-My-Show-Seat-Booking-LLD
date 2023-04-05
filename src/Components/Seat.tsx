import "../styles.css";

export interface SeatInterface {
  price: number;
  type: "booked" | "notBooked";
  color: string;
  onClick: Function;
  id: string;
}
export default function Seat(pros: SeatInterface) {
  return (
    <div className="seat" onClick={() => pros.onClick()}>
      <p>{pros.id}</p>
    </div>
  );
}
