import React from "react";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import firebase from "firebase/compat/app";
// import {collection, addDoc} from "firebase/compat/firestore"
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase"
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Jumbotron from "../components/Jumbotron";
import Banner from "../components/Banner";
import Title from "../components/Title";
import { Link } from "react-router-dom";

const Dates = () => {
  const collectionRef = collection(db, "bookings")
  const [newStartDate, setNewStartDate] = useState("")
  const [newLeaveDate, setNewLeaveDate] = useState("")
  const [newRoomType, setNewRoomType] = useState("")
  const history = useHistory();

  const createBooking = async() =>{
    await addDoc(collectionRef, {startDate: newStartDate, leaveDate:newLeaveDate, roomType:newRoomType})
  }

  function handleSubmit(){
    history.push("/success")
  }

  return ( 
    <>
      <Jumbotron jumbotron="formJumbotron">
          <Banner title="Book With Us">
            <Link to="/" className="btn-primary">Return Home</Link>
          </Banner>
      </Jumbotron>
      <div className="content services">
        <Title title="Book Now"/>
        <div className="form2">
          <form action="submit" onSubmit={handleSubmit} > 
          <div className="txt">Arrival:</div>
            <div className="inputData">
              <input type="date" name="" id="book-date" onChange={(event => {setNewStartDate(event.target.value)})}/>
            </div>
            <div className="txt">Departure:</div>
            <div className="inputData">
              <input type="date" name="" id="leave-date" onChange={(event => {setNewLeaveDate(event.target.value)})}/>
            </div>
            <div className="txt">Room Selection:</div>
            <div className="inputData">
              <select name="room-type" id="room-type" onChange={(event => {setNewRoomType(event.target.value)})}>
                <option value="single-economy">Single Economy</option>
                <option value="single-basic">Single Basic</option>
                <option value="single-standard">Single Standard</option>
                <option value="single-deluxe">Single Deluxe</option>
                <option value="double-economy">Double Economy</option>
                <option value="double-basic">Double Basic</option>
                <option value="double-standard">Double Standard</option>
                <option value="double-deluxe">Double Deluxe</option>
                <option value="family-economy">Family Economy</option>
                <option value="family-basic">Family Basic</option>
                <option value="family-standard">Family Standard</option>
                <option value="family-deluxe">Family Deluxe</option>
                <option value="presidential">Presidential</option>
              </select>
            </div>
            <div>
                <button onClick={createBooking} type="submit" className="btn-primary book">Book</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dates;
