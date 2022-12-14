import React from "react";
import RoomFilter from './RoomFilter'
import RoomList from './RoomList.js'
import { RoomConsumer } from "../context";
import Loading from "./Loading";


export default function RoomsContainer(){
  return (
    <RoomConsumer>
      {value => {
        const { loading, setRoom, sortedRooms,rooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} setRoom={setRoom} />
          </>
        );
      }}
    </RoomConsumer>
  );
}