import './App.css';
import 'bootstrap';
import React, { useEffect, useState } from 'react';
import Api from './Api';
import { useLocation } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { PDFExport } from '@progress/kendo-react-pdf';
import PageTemplate from './pageTemplate';
import { NavBtn, NavBtnLink } from './NavbarElements';

function Welcome() {

  const [result, setResult] = useState([]);
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const pdfExportComponent = React.useRef(null);
  const location = useLocation();
  const { tower } = location.state;
  const { unit_no } = location.state;
  const { gst_choice } = location.state;

  const getData = () => {

    if (unit_no != null) {
      return Api.get('/main/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(result => {
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

  if(gst_choice === 'Excld GST' && tower === 'A'){return (
    <div className='Postform'>
      {result.map((res) =>

<div className="Postform">
<PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
  paperSize="A2"
  ref={pdfExportComponent}>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Grid container spacing={3} className='Postform'>
    <Grid container spacing={3} className='Postform'>
      <Grid item xs={12} sm={6}>
        <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
        <Grid container spacing={3}>
          <h6 className="Postform"><b>Date: {res.booking_date}</b></h6>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6}>
      <h6 className="Postform"><b>To,</b></h6>
      <h6 className="Postform"><b>{res.applicant_name}</b></h6>
      <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
      <h6 className="Postform"><b><u>ADDRESS:- </u>{res.address}</b></h6>
    </Grid>
  </Grid>
  <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}1</b>, in Tower Name- <b>Kashvi</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL PARK.</h6>
  <h6 className="Postform2">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in<b>"AIGIN ROYAL PARK"</b>,</h6> <h6 className="Postform2">Plot No.GH-3/4, Park Town, NH-24, Aditya World City, Ghaziabad (UP). We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the AIGIN BUILDCON PVT LTD I would take this opportunity to thank you for your application for Booking Flat No. </h6><h6 className="Postform2"><b>{unit_no}</b> in Tower <b>{tower}1,</b> in Tower Name- <b>Kashvi</b>,<b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.nbp}/- {gst_choice}</b></h6>
  <h6 className="Postform2"><b>However, IFMS @ Rs.35/- per sq.ft. & One KVA Power back @ Rs.30000/- & Electrical infrastructure charges + GST will be payable at the time of offer for possession. ________ is the parking alloted as per booking form.</b></h6>
  <h6 className="Postform2"><b>However, an amount of Rs.
    <input
      type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
  <h6 className="Postform2">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b></h6> <h6 className="Postform2">as chosen by you.</h6>
  <h6 className="Postform2">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @MCLR+1% P.A. shall be levied on any delayed payment.</h6>
  <h6 className="Postform2">In Case of any further Assistance, please contact <b>
    <input
      type="text" style={{ width: "370px" }} /></b></h6>
  <h6 className="Postform2">Thanking You, </h6>
  <h6 className="Postform2">For <b>AIGIN BUILDCON PVT LTD</b></h6>
            <br />
            <br />
  <h6 className="Postform2"><b>(Authorized Signatory)</b></h6>
</PDFExport>
<NavBtn
  onClick={() => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  }}
><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
</NavBtn>
</div>
      )}
    </div>
  );}
  else if(gst_choice === 'Excld GST' && tower === 'B'){return (
    <div className='Postform'>
      {result.map((res) =>

<div className="Postform">
<PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
  paperSize="A2"
  ref={pdfExportComponent}>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Grid container spacing={3} className='Postform'>
    <Grid container spacing={3} className='Postform'>
      <Grid item xs={12} sm={6}>
        <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
        <Grid container spacing={3}>
          <h6 className="Postform"><b>Date: {res.booking_date}</b></h6>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6}>
      <h6 className="Postform"><b>To,</b></h6>
      <h6 className="Postform"><b>{res.applicant_name}</b></h6>
      <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
      <h6 className="Postform"><b><u>ADDRESS:- </u>{res.address}</b></h6>
    </Grid>
  </Grid>
  <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}1</b>, in Tower Name- <b>Nitya</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL PARK.</h6>
  <h6 className="Postform2">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in<b>"AIGIN ROYAL PARK"</b>,</h6> <h6 className="Postform2">Plot No.GH-3/4, Park Town, NH-24, Aditya World City, Ghaziabad (UP). We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the AIGIN BUILDCON PVT LTD I would take this opportunity to thank you for your application for Booking Flat No. </h6><h6 className="Postform2"><b>{unit_no}</b> in Tower <b>{tower}1,</b> in Tower Name- <b>Nitya</b>,<b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.nbp}/- {gst_choice}</b></h6>
  <h6 className="Postform2"><b>However, IFMS @ Rs.35/- per sq.ft. & One KVA Power back @ Rs.30000/- & Electrical infrastructure charges + GST will be payable at the time of offer for possession. ________ is the parking alloted as per booking form.</b></h6>
  <h6 className="Postform2"><b>However, an amount of Rs.
    <input
      type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
  <h6 className="Postform2">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b></h6> <h6 className="Postform2">as chosen by you.</h6>
  <h6 className="Postform2">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @MCLR+1% P.A. shall be levied on any delayed payment.</h6>
  <h6 className="Postform2">In Case of any further Assistance, please contact <b>
    <input
      type="text" style={{ width: "370px" }} /></b></h6>
  <h6 className="Postform2">Thanking You, </h6>
  <h6 className="Postform2">For <b>AIGIN BUILDCON PVT LTD</b></h6>
            <br />
            <br />
  <h6 className="Postform2"><b>(Authorized Signatory)</b></h6>
</PDFExport>
<NavBtn
  onClick={() => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  }}
><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
</NavBtn>
</div>
      )}
    </div>
  );}
  else if(gst_choice === 'Incld GST' && tower === 'A'){return (
    <div className='Postform'>
      {result.map((res) =>

<div className="Postform">
<PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
  paperSize="A2"
  ref={pdfExportComponent}>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Grid container spacing={3} className='Postform'>
    <Grid container spacing={3} className='Postform'>
      <Grid item xs={12} sm={6}>
        <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
        <Grid container spacing={3}>
          <h6 className="Postform"><b>Date: {res.booking_date}</b></h6>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6}>
      <h6 className="Postform"><b>To,</b></h6>
      <h6 className="Postform"><b>{res.applicant_name}</b></h6>
      <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
      <h6 className="Postform"><b><u>ADDRESS:- </u>{res.address}</b></h6>
    </Grid>
  </Grid>
  <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}1</b>, in Tower Name- <b>Kashvi</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL PARK.</h6>
  <h6 className="Postform2">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in<b>"AIGIN ROYAL PARK"</b>,</h6> <h6 className="Postform2">Plot No.GH-3/4, Park Town, NH-24, Aditya World City, Ghaziabad (UP). We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the AIGIN BUILDCON PVT LTD I would take this opportunity to thank you for your application for Booking Flat No. </h6><h6 className="Postform2"><b>{unit_no}</b> in Tower <b>{tower}1,</b> in Tower Name- <b>Kashvi</b>,<b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.nbp}/- {gst_choice}</b></h6>
  <h6 className="Postform2"><b>However, IFMS @ Rs.35/- per sq.ft. & One KVA Power back @ Rs.30000/- & Electrical infrastructure charges + GST will be payable at the time of offer for possession. ________ is the parking alloted as per booking form.</b></h6>
  <h6 className="Postform2"><b>However, an amount of Rs.
    <input
      type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
  <h6 className="Postform2">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b></h6> <h6 className="Postform2">as chosen by you.</h6>
  <h6 className="Postform2">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @MCLR+1% P.A. shall be levied on any delayed payment.</h6>
  <h6 className="Postform2">In Case of any further Assistance, please contact <b>
    <input
      type="text" style={{ width: "370px" }} /></b></h6>
  <h6 className="Postform2">Thanking You, </h6>
  <h6 className="Postform2">For <b>AIGIN BUILDCON PVT LTD</b></h6>
            <br />
            <br />
  <h6 className="Postform2"><b>(Authorized Signatory)</b></h6>
</PDFExport>
<NavBtn
  onClick={() => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  }}
><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
</NavBtn>
</div>
      )}
    </div>
  );}
  else{return (
    <div className='Postform'>
      {result.map((res) =>

<div className="Postform">
<PDFExport pageTemplate={PageTemplate} fileName={'Welcome Letter-' + (unit_no) + '.pdf'}
  paperSize="A2"
  ref={pdfExportComponent}>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
  <Grid container spacing={3} className='Postform'>
    <Grid container spacing={3} className='Postform'>
      <Grid item xs={12} sm={6}>
        <h6 className="img"><b><u>WELCOME LETTER</u></b></h6>
        <Grid container spacing={3}>
          <h6 className="Postform"><b>Date: {res.booking_date}</b></h6>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12} sm={6}>
      <h6 className="Postform"><b>To,</b></h6>
      <h6 className="Postform"><b>{res.applicant_name}</b></h6>
      <h6 className="Postform"><b>{res.coapplicant_name}</b></h6>
      <h6 className="Postform"><b><u>ADDRESS:- </u>{res.address}</b></h6>
    </Grid>
  </Grid>
  <h6 className="Postform"><b><u>Ref:</u></b> Your application for booking of Flat No. <b>{unit_no}</b> in Tower <b>{tower}1</b>, in Tower Name- <b>Nitya</b>, Super Area <b>{res.area_sqft}</b> Sq.Ft in AIGIN ROYAL PARK.</h6>
  <h6 className="Postform2">Thank you for your application dated <b>{res.booking_date}</b> for booking of flat in<b>"AIGIN ROYAL PARK"</b>,</h6> <h6 className="Postform2">Plot No.GH-3/4, Park Town, NH-24, Aditya World City, Ghaziabad (UP). We are grateful to our customers for their overwhelming response. The trust and confidence response in us would continue to be the beacon light, guiding our business operation. On behalf of the AIGIN BUILDCON PVT LTD I would take this opportunity to thank you for your application for Booking Flat No. </h6><h6 className="Postform2"><b>{unit_no}</b> in Tower <b>{tower}1,</b> in Tower Name- <b>Nitya</b>,<b> {res.area_sqft}</b> Sq.Ft And Total Cost of <b>Rs. {res.nbp}/- {gst_choice}</b></h6>
  <h6 className="Postform2"><b>However, IFMS @ Rs.35/- per sq.ft. & One KVA Power back @ Rs.30000/- & Electrical infrastructure charges + GST will be payable at the time of offer for possession. ________ is the parking alloted as per booking form.</b></h6>
  <h6 className="Postform2"><b>However, an amount of Rs.
    <input
      type="text" style={{ width: "100px" }} />/- has been received by us.</b></h6>
  <h6 className="Postform2">The payment schedule for the aforesaid booking will fall as per <b>{res.plan}</b></h6> <h6 className="Postform2">as chosen by you.</h6>
  <h6 className="Postform2">Please Note that any Separate Demand Letter for the Installment falling due is not required to send by the Company. The payment on time is the main essence of the allotment, an interest @MCLR+1% P.A. shall be levied on any delayed payment.</h6>
  <h6 className="Postform2">In Case of any further Assistance, please contact <b>
    <input
      type="text" style={{ width: "370px" }} /></b></h6>
  <h6 className="Postform2">Thanking You, </h6>
  <h6 className="Postform2">For <b>AIGIN BUILDCON PVT LTD</b></h6>
            <br />
            <br />
  <h6 className="Postform2"><b>(Authorized Signatory)</b></h6>
</PDFExport>
<NavBtn
  onClick={() => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  }}
><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
</NavBtn>
</div>
      )}
    </div>
  );}
}

export default Welcome;

