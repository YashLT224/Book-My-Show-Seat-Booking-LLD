import "./styles.css";
import { useState } from "react";
import SeatGroup, { groupInterface } from "./Components/Seatgroup";
export default function App() {
  const [seatdata, setSeatData] = useState<groupInterface[]>([
    {
      groupName: "CLub: Rs250",
      seatRow: [
        {
          seat: [
            {
              price: 250,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "A1"
            },
            {
              price: 300,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "A2"
            },
            {
              price: 350,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "A3"
            }
          ],
          label: "A"
        },
        {
          seat: [
            {
              price: 450,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "B1"
            },
            {
              price: 550,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "B2"
            },
            {
              price: 550,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "B3"
            }
          ],
          label: "B"
        },
        {
          seat: [
            {
              price: 600,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "C1"
            },
            {
              price: 650,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "C2"
            },
            {
              price: 750,
              type: "notBooked",
              color: "green",
              onClick: () => {},
              id: "C3"
            }
          ],
          label: "c"
        }
      ]
    }
  ]);
  return (
    <div className="gridSeat">
      {seatdata.map((group) => {
        return <SeatGroup {...group} />;
      })}
    </div>
  );
}
