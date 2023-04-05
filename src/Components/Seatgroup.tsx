import "../styles.css";
import SeatRow from "./SeatRow";
import { seatRow } from "./SeatRow";
export interface groupInterface {
  groupName: string;
  seatRow: seatRow[];
}
export default function SeatGroup(props: groupInterface) {
  console.log(props);
  return (
    <div className="seatGroup">
      <label className="seatgroup_label">{props.groupName}</label>
      <div className="seatGroup_column">
        {props.seatRow.map((row) => {
          return <SeatRow {...row} />;
        })}
      </div>
    </div>
  );
}
