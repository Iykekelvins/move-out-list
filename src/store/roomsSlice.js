import { createSlice } from "@reduxjs/toolkit";
import { rooms } from "../utils/rooms"

const initialState = {
    rooms
}

export const roomsSlice = createSlice({
    name:"rooms",
    initialState,
    reducers:{
        flipRoom(state, action){
            const { id } = action.payload;
            const roomId = state.rooms.find((room) => 
            room.id === id)

            if(roomId && roomId.room_number !== 0){
                roomId.room_number--;
                roomId.now = new Date().getTime()
            }
        }
    }
})

export const { flipRoom } = roomsSlice.actions;

// export rooms list to be used in the app
export const selectRooms = (state) => state.rooms.rooms;

export default roomsSlice.reducer