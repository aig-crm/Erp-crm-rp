import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Api from "./Api";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function ApproveReceipt() {

    const location = useLocation();
    const { date } = location.state;
    const { tower } = location.state;
    const { unit_no } = location.state;
    const { bank_name } = location.state;
    const { bank_branch } = location.state;
    const { ref_no } = location.state;
    const { rwgst } = location.state;
    const { rwogst } = location.state;
    const { rgst } = location.state;
    const { receipt_no } = location.state;

    const [status, setStatus] = useState("");
    const [clearing_bank, setClearing_bank] = useState("");
    const [clearing_date, setClearing_date] = useState("");

    async function register() {
        alert("Form submitted for receipt no - " + (receipt_no));
        await Api.put("/customer_account/" + "'" + (receipt_no) + "'", {
            status: status,
            clearing_bank: clearing_bank,
            clearing_date: clearing_date,
        }).then((response) => {
            console.log(response);
        });
    }

    return (
        <div>
            <div className='Postform'>
                <h2 className="mt-3 text-dark"><b>APPROVE RECEIPT FOR UNIT - {unit_no}</b></h2>
                <div className="mt-3 text-dark">
                    <label className="Postform"><b><u>Date:</u> {date}</b></label>
                    <label className="Postform"><b><u>Tower:</u> {tower}</b></label>
                    <label className="Postform"><b><u>Unit no:</u> {unit_no}</b></label>
                    <label className="Postform"><b><u>Bank Name:</u> {bank_name}</b></label>
                    <label className="Postform"><b><u>Bank Branch:</u> {bank_branch}</b></label>
                    <label className="Postform"><b><u>Instrument No:</u> {ref_no}</b></label>
                    <label className="Postform"><b><u>Amount received with gst:</u> {rwgst}</b></label>
                    <label className="Postform"><b><u>Amount received without gst:</u> {rwogst}</b></label>
                    <label className="Postform"><b><u>Received gst:</u> {rgst}</b></label>
                    <label className="Postform"><b><u>Receipt No:</u> {receipt_no}</b></label>
                    <label className="Postform"><b><u>Clearing Bank</u></b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for receipt - " + (receipt_no));
                            } else { setClearing_bank(e.target.value) }
                        }} required />
                    <label className="Postform"><b><u>Clearing Date</u></b></label>
                    <input
                        type="date"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for receipt - " + (receipt_no));
                            } else { setClearing_date(e.target.value) }
                        }} required />
                    <label className="Postform"><b><u>Status</u></b></label>
                    <input
                        type="text"
                        onChange={(e) => {
                            if (e.target.value === '' || e.target.value === null) {
                                alert("Form has errors for receipt - " + (receipt_no));
                            } else { setStatus(e.target.value) }
                        }} required />
                </div>
                <br />
                <NavBtn onClick={register}>
                    <NavBtnLink to='/'><b>Approve Booking</b></NavBtnLink>
                </NavBtn>
            </div>

        </div>


    );
}

export default ApproveReceipt;