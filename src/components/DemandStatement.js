import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

const current = new Date();
const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

function DemandStatement(props) {

  const [result, setResult] = useState([]);

  const getData = () => {

    if (props.value != null) {
      return Api.get('/total/' + "'" + (props.value5) + "'/" + "'" + (props.value4) + "'").then(result => {
        const res = result.data;
        return setResult(res);
      })
    } else {
      return Api.get('/total/' + "'" + (props.value5) + "'/" + "'" + (props.value4) + "'").then(result => {
        const res = result.data;
        return setResult(res);
      })
    }
  }

  useEffect(() => {
    getData()
  }, []);

  if (props.value2 === 'Reminder') {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform">You are requested to remit the total dues of <b>Rs. {res.pending_amount}/-</b> in favour of <b>"AIG BUILDCON PVT LTD"</b>payable at on or within 7 days from {date} in favour of<b> "AIG BUILDCON PVT. LTD." A/c No. 57500001233271 IFSC Code - HDFC0000153 RDC GHAZIABAD BRANCH</b></h6>
            <h6 className="Postform">Kindly note that in case of non-receipt of due amount within stipulated time,<b>interest @MCLR + 1% p.a.</b> shall be charged as per company's policy on delayed payments.</h6>
            <h6 className="Postform">Thanking you & assuring you of our best services always.</h6>
            <br></br>
            <h6 className="Postform">for <b>AIG BUILDCON PVT LTD</b></h6>
            <br></br>
            <br></br>
            <h6 className="Postform">Authorized Signatory</h6>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className='Postform'>
        {result.map((res) =>

          <div className="Postform">
            <h6 className="Postform">You are requested to remit the total dues of <b>Rs. {res.pending_amount}/-</b> in favour of <b>"AIG BUILDCON PVT LTD"</b> <h6 className="Postform">payable at on or within 7 days from {date} in favour of<b> "AIG BUILDCON PVT. LTD." A/c No. 57500001233271 IFSC Code - HDFC0000153 RDC GHAZIABAD BRANCH</b></h6>
            Kindly note that in case of non-receipt of due amount within stipulated time,<b>interest @MCLR + 1% p.a.</b> shall be charged as per company's policy on delayed payments.</h6>
            <h6 className="Postform">Thanking you & assuring you of our best services always.</h6>
            <br></br>
            <h6 className="Postform">for <b>AIG BUILDCON PVT LTD</b></h6>
            <br></br>
            <br></br>
            <h6 className="Postform">Authorized Signatory</h6>
          </div>
        )}
      </div>
    );
  }
}

export default DemandStatement;

