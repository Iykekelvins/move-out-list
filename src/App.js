import { useSelector, useDispatch } from "react-redux";
import { selectRooms } from "./store/roomsSlice";
import { flipRoom } from "./store/roomsSlice";
import user from "./user.png";


function App() {
  const dispatch = useDispatch();

  //rooms list
  const rooms = useSelector(selectRooms);

  //order room list to make recent updated come first
  const sortedRooms = rooms.slice().sort((a, b) => b.now - a.now)

  return (
    <div className="container">
      <h1>Move-out List</h1>
      <table>
        <thead>
          <tr>
            <th>Move-out Date</th>
            <th>ID</th>
            <th>Address</th>
            <th>Room</th>
            <th>Location</th>
            <th>Last Occupant</th>
            <th>UID</th>
            <th>Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            sortedRooms.map((room) => (
              <tr key={room.id}>
                <td>{room.date}</td>
                <td>{room.id}</td>
                <td className="green-text">
                  <div className="address">
                    <img src={user} alt=" user" />
                    {room.address}
                  </div>
                </td>
                <td>{room.room_number}</td>
                <td>{room.location}</td>
                <td className="green-text">{room.last_occupant}</td>
                <td>{room.uid}</td>
                <td>{room.balance}</td>
                <td>
                  <button className="flip-btn"
                  onClick={()=> dispatch(flipRoom(room))}
                  >
                    Flip room
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
