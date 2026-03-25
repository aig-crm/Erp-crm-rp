import React, { useState, useEffect, useMemo } from "react";
import Pagination from "./pagination";
import Api from "./Api";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useLocation } from "react-router-dom";
import { Grid, Paper } from '@material-ui/core';
import pic1 from '../assets/pic1.jpg';
import pic2 from '../assets/pic2.png';
import ApplicantDetails from "./ApplicantDetails";
import StatementSubject from "./StatementSubject";
import DemandStatement from "./DemandStatement";
import PageTemplate from "./pageTemplate";
import { PDFExport } from "@progress/kendo-react-pdf";
import { NavBtn, NavBtnLink } from "./NavbarElements";

function DemandTable() {

    let PageSize = 10;

    const [currentPage, setCurrentPage] = useState(1);

    const [resultDemand, setresultDemand] = useState([]);
    const [resultDemand1, setresultDemand1] = useState([]);
    const [resultDemand2, setresultDemand2] = useState([]);
    const [resultDemand3, setresultDemand3] = useState([]);
    const [resultData, setresultData] = useState([]);
    const location = useLocation();
    const { tower } = location.state;
    const { unit_no } = location.state;
    const { id } = location.state;
    const { gst_choice } = location.state;
    const { interest_val } = location.state;
    const { interest } = location.state;
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const pen = [];

    const getDataDemand = () => {

        if (unit_no != null) {
            return Api.get('/demand/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand(res);
            })
        } else {
            return Api.get('/demand/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand(res);
            })
        }
    }

    const getDataDemand1 = () => {

        if (unit_no != null) {
            return Api.get('/cpp/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand1(res);
            })
        } else {
            return Api.get('/cpp/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand1(res);
            })
        }
    }

    const getDataDemand2 = () => {

        if (unit_no != null) {
            return Api.get('/reminder/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand2(res);
            })
        } else {
            return Api.get('/reminder/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand2(res);
            })
        }
    }

    const getDataDemand3 = () => {

        if (unit_no != null) {
            return Api.get('/total/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand3(res);
            })
        } else {
            return Api.get('/total/').then(resultDemand => {
                const res = resultDemand.data;
                return setresultDemand3(res);
            })
        }
    }

    const getData = () => {

        if (unit_no != null) {
            return Api.get('/main/' + "'" + (tower) + "'/" + "'" + (unit_no) + "'").then(result => {
                const res = result.data;
                return setresultData(res);
            })
        } else {
            return Api.get('/main/').then(result => {
                const res = result.data;
                return setresultData(res);
            })
        }
    }

    useEffect(() => {
        getDataDemand()
    }, []);

    useEffect(() => {
        getDataDemand1()
    }, []);

    useEffect(() => {
        getDataDemand2()
    }, []);

    useEffect(() => {
        getDataDemand3()
    }, []);

    useEffect(() => {
        getData()
    }, []);

    function sumArray(array) {
        let sum = 0;

        for (let i = 0; i < array.interest_value.length; i++) {
            sum += array.interest_value[i];
        }

        return sum;
    }

    const currentTableDataDemand = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand, currentPage]);

    const currentTableDataDemand1 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand1.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand1, currentPage]);

    const currentTableDataDemand2 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand2.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand2, currentPage]);

    const currentTableDataDemand3 = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultDemand3.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultDemand3, currentPage]);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return resultData.slice(firstPageIndex, lastPageIndex);
    }, [PageSize, resultData, currentPage]);

    const printRef = React.useRef();

    // const handleDownloadPdf = async () => {
    //     const element = printRef.current;
    //     const canvas = await html2canvas(element);
    //     const data = canvas.toDataURL('image/png');

    //     const pdf = new jsPDF();
    //     const imgProperties = pdf.getImageProperties(data);
    //     const pdfWidth = pdf.internal.pageSize.getWidth();
    //     const pdfHeight =
    //         (imgProperties.height * pdfWidth) / imgProperties.width;

    //     pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    if (unit_no != null) {
        var __filename = ((unit_no) + '-demand report.pdf');
    } else {
        var __filename = ('Demand report.pdf');
    }
    // };

    if (gst_choice === 'Excld GST' && interest === 'with interest') {
        return (

            <React.Fragment>

                <div className='Demand'>
                    <PDFExport pageTemplate={PageTemplate} fileName={__filename}
                        paperSize="A1"
                        ref={printRef}>
                        <br />
                        <br />
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
                            <Grid item xs={12}>
                                <h6 className="Postform"><b><u><center>Demand Letter</center></u></b></h6>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ApplicantDetails value={unit_no} value2={tower} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="Postform">
                                    {currentTableData.map((res) =>

                                        <div className="Postform">
                                            <h6 className="Postform"><b>Dated: </b>{date}</h6>
                                            <br></br>
                                            <h6 className="Postform"><b>Project Name - AIGIN ROYAL PARK</b><br />
                                                <b>Flat No. </b>{unit_no}<br />
                                                <b>Email: </b>aiginroyalpark@gmail.com<br />
                                                <b>Web: </b>https://aiginroyalpark.com/<br />
                                                <b>State: </b>Uttar Pradesh<br />
                                                <b>State Code: </b>09<br />
                                                <b><u>Net Basic Price: </u></b>{res.nbp}<br />
                                                <b><u>Gst: </u></b>{res.gst}<br />
                                                <b><u>Total Basic Price: </u></b>{res.tbc}</h6>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <StatementSubject value={unit_no} value2={tower} value3='Demand' />
                            <Grid item xs={12}>
                                <div >
                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr className="Postform" style={{ backgroundColor: "#0078AA" }}>
                                                <th >Perticulars</th>
                                                <th >Percentage</th>
                                                <th >Due Date</th>
                                                <th >Net BSP</th>
                                                <th >CGST</th>
                                                <th >SGST</th>
                                                <th >GST</th>
                                                <th >Due Amount</th>
                                                <th >Received Amount</th>
                                                <th >Receivable Amount</th>
                                                <th >Interest Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) => {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.pending_amount}</td>
                                                    <td ></td>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand.map((res) => {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.net_due - res.recieved}</td>
                                                    <td ></td>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand3.map((res) => {
                                                if (sumArray(interest_val) > 0) {
                                                    pen.set(res.net_due - res.recieved)
                                                    return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                        <td >{res.description}</td>
                                                        <td ></td>
                                                        <td > </td>
                                                        <td ><b>Rs. {res.net_bsp}</b></td>
                                                        <td ><b>Rs. {res.cgst}</b></td>
                                                        <td ><b>Rs. {res.sgst}</b></td>
                                                        <td ><b>Rs. {res.gst}</b></td>
                                                        <td ><b>Rs. {res.net_due}</b></td>
                                                        <td ><b>Rs. {res.recieved}</b></td>
                                                        <td ><b>Rs. {res.pending_amount}</b></td>
                                                        <td ><b>Rs. {sumArray(interest_val)}</b></td>
                                                    </tr>)
                                                }
                                                else {
                                                    pen.set(res.net_due - res.recieved)
                                                    return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                        <td >{res.description}</td>
                                                        <td ></td>
                                                        <td > </td>
                                                        <td ><b>Rs. {res.net_bsp}</b></td>
                                                        <td ><b>Rs. {res.cgst}</b></td>
                                                        <td ><b>Rs. {res.sgst}</b></td>
                                                        <td ><b>Rs. {res.gst}</b></td>
                                                        <td ><b>Rs. {res.net_due}</b></td>
                                                        <td ><b>Rs. {res.recieved}</b></td>
                                                        <td ><b>Rs. {res.net_due - res.recieved}</b></td>
                                                        <td ><b>Rs. 0</b></td>
                                                    </tr>)
                                                }
                                            }
                                            )}
                                        </tbody>
                                    </table>

                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                </div>
                            </Grid>
                            <DemandStatement value={id} value2='Demand' value3={pen[0]} value4={unit_no} value5={tower} />
                        </Grid>
                    </PDFExport>
                    <NavBtn
                        onClick={() => {
                            if (printRef.current) {
                                printRef.current.save();
                            }
                        }}
                    ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
                    </NavBtn>
                </div>
            </React.Fragment>
        );
    } else if (gst_choice === 'Excld GST' && interest === 'without interest') {
        return (

            <React.Fragment>

                <div className='Demand'>
                    <PDFExport pageTemplate={PageTemplate} fileName={__filename}
                        paperSize="A1"
                        ref={printRef}>
                        <br />
                        <br />
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
                            <Grid item xs={12}>
                                <h6 className="Postform"><b><u><center>Demand Letter</center></u></b></h6>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ApplicantDetails value={unit_no} value2={tower} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="Postform">
                                    {currentTableData.map((res) =>

                                        <div className="Postform">
                                            <h6 className="Postform"><b>Dated: </b>{date}</h6>
                                            <br></br>
                                            <h6 className="Postform"><b>Project Name - AIGIN ROYAL PARK</b><br />
                                                <b>Flat No. </b>{unit_no}<br />
                                                <b>Email: </b>aiginroyalpark@gmail.com<br />
                                                <b>Web: </b>https://aiginroyalpark.com/<br />
                                                <b>State: </b>Uttar Pradesh<br />
                                                <b>State Code: </b>09<br />
                                                <b><u>Net Basic Price: </u></b>{res.nbp}<br />
                                                <b><u>Gst: </u></b>{res.gst}<br />
                                                <b><u>Total Basic Price: </u></b>{res.tbc}</h6>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <StatementSubject value={unit_no} value2={tower} value3='Demand' />
                            <Grid item xs={12}>
                                <div >
                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr className="Postform" style={{ backgroundColor: "#0078AA" }}>
                                                <th >Perticulars</th>
                                                <th >Percentage</th>
                                                <th >Due Date</th>
                                                <th >Net BSP</th>
                                                <th >CGST</th>
                                                <th >SGST</th>
                                                <th >GST</th>
                                                <th >Due Amount</th>
                                                <th >Received Amount</th>
                                                <th >Receivable Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) => {
                                                return (<tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.pending_amount}</td>
                                                </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand.map((res) => {
                                                return (
                                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                        <td >{res.description}</td>
                                                        <td >{res.percentage}%</td>
                                                        <td >{res.due_date}</td>
                                                        <td >{res.net_bsp}</td>
                                                        <td >{res.cgst}</td>
                                                        <td >{res.sgst}</td>
                                                        <td >{res.gst}</td>
                                                        <td >{res.net_due}</td>
                                                        <td >{res.recieved}</td>
                                                        <td >{res.net_due - res.recieved}</td>
                                                    </tr>)
                                            }
                                            )}
                                            {currentTableDataDemand3.map((res) => {
                                                pen.push(res.net_due - res.recieved)
                                                return (
                                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                        <td >{res.description}</td>
                                                        <td ></td>
                                                        <td > </td>
                                                        <td ><b>Rs. {res.net_bsp}</b></td>
                                                        <td ><b>Rs. {res.cgst}</b></td>
                                                        <td ><b>Rs. {res.sgst}</b></td>
                                                        <td ><b>Rs. {res.gst}</b></td>
                                                        <td ><b>Rs. {res.net_due}</b></td>
                                                        <td ><b>Rs. {res.recieved}</b></td>
                                                        <td ><b>Rs. {res.net_due - res.recieved}</b></td>
                                                    </tr>
                                                )
                                            }
                                            )}
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                </div>
                            </Grid>
                            <DemandStatement value={id} value2='Demand' value3={pen[0]} value4={unit_no} value5={tower} />
                        </Grid>
                    </PDFExport>
                    <NavBtn
                        onClick={() => {
                            if (printRef.current) {
                                printRef.current.save();
                            }
                        }}
                    ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
                    </NavBtn>
                </div>
            </React.Fragment>
        );
    } else if (gst_choice === 'Incld GST' && interest === 'with interest') {
        return (

            <React.Fragment>

                <div className='Demand'>
                    <PDFExport pageTemplate={PageTemplate} fileName={__filename}
                        paperSize="A1"
                        ref={printRef}>
                        <br />
                        <br />
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
                            <Grid item xs={12}>
                                <h6 className="Postform"><b><u><center>Demand Letter</center></u></b></h6>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ApplicantDetails value={unit_no} value2={tower} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="Postform">
                                    {currentTableData.map((res) =>

                                        <div className="Postform">
                                            <h6 className="Postform"><b>Dated: </b>{date}</h6>
                                            <br></br>
                                            <h6 className="Postform"><b>Project Name - AIGIN ROYAL PARK</b><br />
                                                <b>Flat No. </b>{unit_no}<br />
                                                <b>Email: </b>aiginroyalpark@gmail.com<br />
                                                <b>Web: </b>https://aiginroyalpark.com/<br />
                                                <b>State: </b>Uttar Pradesh<br />
                                                <b>State Code: </b>09<br />
                                                <b><u>Net Basic Price: </u></b>{res.nbp}<br />
                                                <b><u>Gst: </u></b>{res.gst}<br />
                                                <b><u>Total Basic Price: </u></b>{res.tbc}</h6>
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <StatementSubject value={unit_no} value2={tower} value3='Demand' />
                            <Grid item xs={12}>
                                <div >
                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr className="Postform" style={{ backgroundColor: "#0078AA" }}>
                                                <th >Perticulars</th>
                                                <th >Percentage</th>
                                                <th >Due Date</th>
                                                <th >Net BSP</th>
                                                <th >CGST</th>
                                                <th >SGST</th>
                                                <th >GST</th>
                                                <th >Due Amount</th>
                                                <th >Received Amount</th>
                                                <th >Receivable Amount</th>
                                                <th >Interest Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) =>
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.pending_amount}</td>
                                                    <td ></td>
                                                </tr>
                                            )}
                                            {currentTableDataDemand.map((res) =>
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.net_due - res.recieved}</td>
                                                    <td ></td>
                                                </tr>
                                            )}
                                            {currentTableDataDemand3.map((res) => {
                                                pen.push(res.net_due - res.recieved)
                                                return (
                                                    <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                        <td >{res.description}</td>
                                                        <td ></td>
                                                        <td > </td>
                                                        <td ><b>Rs. {res.net_bsp}</b></td>
                                                        <td ><b>Rs. {res.cgst}</b></td>
                                                        <td ><b>Rs. {res.sgst}</b></td>
                                                        <td ><b>Rs. {res.gst}</b></td>
                                                        <td ><b>Rs. {res.net_due}</b></td>
                                                        <td ><b>Rs. {res.recieved}</b></td>
                                                        <td ><b>Rs. {res.net_due - res.recieved}</b></td>
                                                        <td ><b>Rs. {sumArray(interest_val)}</b></td>
                                                    </tr>
                                                )
                                            }
                                            )}
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                </div>
                            </Grid>
                            <DemandStatement value={id} value2='Demand' value3={pen[0]} value4={unit_no} value5={tower} />
                        </Grid>
                    </PDFExport>
                    <NavBtn
                        onClick={() => {
                            if (printRef.current) {
                                printRef.current.save();
                            }
                        }}
                    ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
                    </NavBtn>
                </div>
            </React.Fragment>
        );
    } else {
        return (

            <React.Fragment>

                <div className='Demand'>
                    <PDFExport pageTemplate={PageTemplate} fileName={__filename}
                        paperSize="A1"
                        ref={printRef}>
                        <br />
                        <br />
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
                            <Grid item xs={12}>
                                <h6 className="Postform"><b><u><center>Demand Letter</center></u></b></h6>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ApplicantDetails value={unit_no} value2={tower} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className="Postform">
                                    {currentTableData.map((res) =>

                                        <div className="Postform">
                                            <b>Dated: </b>{date}<br />
                                            <b>Project Name - AIGIN ROYAL PARK</b><br />
                                                <b>Flat No. </b>{unit_no}<br />
                                                <b>Email: </b>aiginroyalpark@gmail.com<br />
                                                <b>Web: </b>https://aiginroyalpark.com/<br />
                                                <b>State: </b>Uttar Pradesh<br />
                                                <b>State Code: </b>09<br />
                                                <b><u>Net Basic Price: </u></b>{res.nbp}<br />
                                                <b><u>Gst: </u></b>{res.gst}<br />
                                                <b><u>Total Basic Price: </u></b>{res.tbc}
                                        </div>
                                    )}
                                </div>
                            </Grid>
                            <StatementSubject value={unit_no} value2={tower} value3='Demand' />
                            <Grid item xs={12}>
                                <div >
                                    <table className="table-bordered text-black">
                                        <thead>
                                            <tr className="Postform" style={{ backgroundColor: "#0078AA" }}>
                                                <th >Perticulars</th>
                                                <th >Percentage</th>
                                                <th >Due Date</th>
                                                <th >Net BSP</th>
                                                <th >CGST</th>
                                                <th >SGST</th>
                                                <th >GST</th>
                                                <th >Due Amount</th>
                                                <th >Received Amount</th>
                                                <th >Receivable Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table">
                                            {currentTableDataDemand2.map((res) =>
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.pending_amount}</td>
                                                </tr>
                                            )}
                                            {currentTableDataDemand.map((res) =>
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td >{res.percentage}%</td>
                                                    <td >{res.due_date}</td>
                                                    <td >{res.net_bsp}</td>
                                                    <td >{res.cgst}</td>
                                                    <td >{res.sgst}</td>
                                                    <td >{res.gst}</td>
                                                    <td >{res.net_due}</td>
                                                    <td >{res.recieved}</td>
                                                    <td >{res.net_due - res.recieved}</td>
                                                </tr>
                                            )}
                                            {currentTableDataDemand3.map((res) =>
                                                <tr className="Postform" style={{ backgroundColor: "#FFFDD0" }}>
                                                    <td >{res.description}</td>
                                                    <td ></td>
                                                    <td > </td>
                                                    <td ><b>Rs. {res.net_bsp}</b></td>
                                                    <td ><b>Rs. {res.cgst}</b></td>
                                                    <td ><b>Rs. {res.sgst}</b></td>
                                                    <td ><b>Rs. {res.gst}</b></td>
                                                    <td ><b>Rs. {res.net_due}</b></td>
                                                    <td ><b>Rs. {res.recieved}</b></td>
                                                    <td ><b>Rs. {res.net_due - res.recieved}</b></td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                    <Pagination
                                        className="pagination-bar"
                                        currentPage={currentPage}
                                        totalCount={resultDemand.length}
                                        pageSize={PageSize}
                                        onPageChange={page => setCurrentPage(page)}
                                    />
                                </div>
                            </Grid>
                            <DemandStatement value={id} value2='Demand' value3={pen[0]} value4={unit_no} value5={tower} />
                        </Grid>
                    </PDFExport>
                    <NavBtn
                        onClick={() => {
                            if (printRef.current) {
                                printRef.current.save();
                            }
                        }}
                    ><NavBtnLink to='/'><b><u>Export PDF</u></b></NavBtnLink>
                    </NavBtn>
                </div>
            </React.Fragment>
        );
    }
}

export default DemandTable