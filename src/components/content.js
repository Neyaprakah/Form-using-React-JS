import React, { useState } from "react";
import "./style.css";

function Content(){
    const[firstname,setFirstname]=useState("");
    const[middlename,setMiddelname]=useState("");
    const[lastname,setLastname]=useState("");
    const[birthday,setBirthday]=useState("");
    const[email,setEmail]=useState("");
    const[phoneno,setPhoneno]=useState("");
    const[gender,setGender]=useState("");
    const[starttime,setStarttime]=useState("");
    const[endtime,setEndtime]=useState("");
    const[jobposition,setJobposition]=useState("");
    const[team,setTeam]=useState("");
    const[designation,setDesignation]=useState("");
    const[billablehours,setBillablehours]=useState("");
    const[isbillable,setIsbillable]=useState("");

    const handle=(event)=>{
        event.preventdefault();
        if(billablehours && !isbillable)
        {
            Window.alert("Billable Hours set to be Yes if You enter a input");
            return;
        }
    }
    console.log("Form :",{
        firstname,
        middlename,
        lastname,
        birthday,
        email,
        phoneno,
        gender,
        starttime,
        endtime,
        jobposition,
        team,
        designation,
        billablehours,
        isbillable
    });

    return(
        <div className="content" > 
            <form onSubmit={handle} >
                <div>
                    <h2>Employee Form</h2>
                </div>
                <div className="r1">
                    <div className="r1c1">
                        <label>First Name</label>
                        <input type="text" id="firstname" value={firstname} onChange={(e)=>setFirstname(e.target.value)} placeholder="Enter your First Name" required ></input>
                    </div>
                    <div className="r1c2">
                        <label>Middle Name</label>
                        <input type="text" id="middlename" value={middlename} onChange={(e)=>setMiddelname(e.target.value)} placeholder="Enter your Middle Name"></input>
                    </div>
                    <div className="r1c3">
                        <label>Last Name</label>
                        <input type="text" id="lastname" value={lastname} onChange={(e)=>setLastname(e.target.value)} placeholder="Enter your Last Name" required ></input>
                    </div>
                </div>
                <div className="r2">
                    <div className="r2c1">
                        <label>Birth Date</label>
                        <input type="date" id="birthday" value={birthday} onChange={(e)=>setBirthday(e.target.value)} required></input>
                    </div>
                    <div className="r2c2">
                        <label>Email</label>
                        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" required></input>
                    </div>
                    <div className="r2c3">
                        <label>Phone Number</label>
                        <input type="number" id="phoneno" value={phoneno} onChange={(e)=>setPhoneno(e.target.value)} placeholder="Enter your Phone Number" required></input>
                    </div>
                </div>
                <div className="r3">
                    <div className="r3c1">
                        <label>Select Gender</label>
                        <select value={gender} onChange={(e)=>setGender(e.target.value)} required >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="r3c2">
                        <label>Start Time</label>
                        <input type="time" id="starttime" value={starttime} onChange={(e)=>setStarttime(e.target.value)}  required></input>
                    </div>
                    <div className="r3c3">
                        <label>End Time</label>
                        <input type="time" id="endtime" value={endtime} onChange={(e)=>setEndtime(e.target.value)} required></input>
                    </div>
                </div>
                <div className="r4">
                    <div className="r4c1">
                        <label>Job Position</label>
                        <input type="text" id="jobposition" value={jobposition} onChange={(e)=>setJobposition(e.target.value)} required></input>
                    </div>
                    <div className="r4c2">
                        <label>Select Team</label>
                        <select value={team} onChange={(e)=>setTeam(e.target.value)} required >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                    <div className="r4c3">
                        <label>Select Designation</label>
                        <select value={designation} onChange={(e)=>setDesignation(e.target.value)} required >
                            <option>Manager</option>
                            <option>HR</option>
                            <option>TL</option>
                        </select>
                    </div>
                </div>
                <div className="r5">
                    <div className="r5c1">
                        <label>Billable Hours</label>
                        <input type="number" id="billablehours" value={billablehours} onChange={(e)=>setBillablehours(e.target.value)} required></input>
                    </div>
                    <div className="r5c2">
                        <label>is Billable</label>
                        <input type="checkbox" id="isbillable" value={isbillable} onChange={(e)=>setIsbillable(e.target.value)} ></input>
                    </div>
                </div>
                <div>
                    <button id="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Content;