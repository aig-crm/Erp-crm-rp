import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';

function ApplicantDetails(props) {

  const [result, setResult] = useState([]);

  const getData = () => {

    if (props.value != null) {
      return Api.get('/main/' + "'" + (props.value2) + "'/" + "'" + (props.value) + "'").then(result => {
        const res = result.data;
        return setResult(res);
      })
    } else {
      return Api.get('/main/').then(result => {
        const res = result.data;
        return setResult(res);
      })
    }
  }

  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      {result.map((res) =>

        <div className="Postform">
          <b>Customer id: ARP - {props.value}</b><br />
          <b>{res.applicant_name}</b><br />
          <b>{res.coapplicant_name}</b><br />
          <b>{res.address}</b><br />
          <b>(M): </b>{res.applicant_mob_no}<br />
          <b>Email: </b>{res.applicant_email}
        </div>
      )}
    </div>
  );
}

export default ApplicantDetails;

