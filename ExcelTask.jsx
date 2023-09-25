import React from "react";
function ExcelTask(){
    let arr=
        [{
          "EmployeeNo": 1809,
          "Name": "Baswaraj",
          "JoinDate": "June",
          "DAYSINMONTH": 22,
          "EMPEFFECTIVEWORKDAYS": 21,
          "BASIC": 11178,
          "HRA": 3353,
          "MEDICALALLOWANCE": 1677,
          "TRANSPORTALLOWANCE": 1677,
          "SPECIALALLOWANCE": 2670,
          "PF": 1800,
          "PROFTAX": 200,
          "TOTALDEDUCTIONS": 2000,
          "NETPAY": 24144,
          "BankName":"State Bank Of India",
          "BankAccountNo":39004091234,
          "PFNO":"MAMUM00641480000001258",
          "PFUAN":100904319456,
          "ESINO":123456,
          "PANNO":'BDRPH8923D',
          "LOP":123456
         }]
    return(
        <>
        <div style={{height:'500px',width:'60%',position:'relative',left:'300px'}}>
       {
        arr.map((e)=>{
            return(
                <>
        <div style={{display:'flex',border:'1px solid black'}}>
                <div>
                    <img style={{width:'150px',height:'150px',position:'relative',left:'100px'}} src='https://mantragroup.com/images/mantra-logo-2.svg'/>
                </div>
                <div className="one" style={{position:'relative',left:'150px',height:'150px'}}>
                <h1 style={{textAlign:'center'}}>Mantra Technologies pvt.Ltd</h1>
                <p style={{textAlign:'center'}}>1st floor ,Vertex Corporate Bldg,jubilee Enclave,HITEX Madhapur,Hyderabad-500081.p:(040)2980028</p>
                <h3 style={{textAlign:'center'}}>payslip for the month of july</h3>
                </div>
        </div>
        <div style={{display:'flex'}} className="two">
            <div style={{border:'1px solid black',width:'50%'}} className="two-one">
            <h4>Name:{e.Name}</h4>
            <h4>Join Date:{e.JoinDate}</h4>
            <h4>Designation:Developer</h4>
            <h4>Department:Engineering</h4>
            <h4>Location:Hyderabad</h4>
            <h4>Effective Work Days:{e.EMPEFFECTIVEWORKDAYS}</h4>
            <h4>Days In Month:{e.DAYSINMONTH}</h4>
            </div>
            <div style={{border:'1px solid black',width:'50%'}} className="two-two">
            <h4>Bank Name:{e.BankName}</h4>
            <h4>Bank Account No:{e.BankAccountNo}</h4>
            <h4>PF No:{e.PFNO}</h4>
            <h4>Pf UAN:{e.PFUAN}</h4>
            <h4>ESI no:{e.ESINO}</h4>
            <h4>PAN No:{e.PANNO}</h4>
            <h4>LOP:{e.LOP}</h4>
            </div>
        </div>
        <div style={{display:'flex'}} className="three">
                <div style={{border:'1px solid black',width:'50%'}}>
                    <h3>Earnings</h3>
                </div>
                <div style={{border:'1px solid black',width:'50%'}}>
                    <h3>Deductions</h3>
                </div>
        </div>
        <div className="four" style={{display:'flex'}}>
            <div style={{border:'1px solid black',width:'50%'}}>
                <h4>Basic:{e.BASIC}.00</h4>
                <h4>HRA:{e.HRA}.00</h4>
                <h4>MEDICAL ALLOWANCE:{e.MEDICALALLOWANCE}.00</h4>
                <h4>TRANSPORT ALLOWANCE:{e.TRANSPORTALLOWANCE}.00</h4>
                <h4>SPECIAL ALLOWANCE:{e.SPECIALALLOWANCE}.00</h4>
            </div>
            <div style={{border:'1px solid black',width:'50%'}}>
                <h4>PF :{e.PF}.00</h4>
                <h4>PROF TAX:{e.PROFTAX}.00</h4>
            </div>
        </div>
        <div className="five" style={{display:'flex'}}>
            <div style={{border:'1px solid black',width:'50%'}}>
                <h4>Total Earnings:INR {e.NETPAY}.00</h4>
            </div>
            <div style={{border:'1px solid black',width:'50%'}}>
                <h4>Total Deductions:INR {e.TOTALDEDUCTIONS}.00</h4>
            </div>
        </div>
        <div style={{border:'1px solid black'}}>
            <p>Net Pay for the month:(Total Earnings - Total Deductions)</p>
            <p>Twenty Four Thousand One Hundred Forty Four</p>
        </div>
        <p style={{textAlign:'center'}}>This is a sysyem generated Payslip Does not require Signature</p>
        <input type="button" value='print' onClick={(e)=>{window.print()}}/>
        <p>* Click on Print to Print the PaySlip</p>
                </>
            )
        })
       }
       </div>
        </>
    )
}
export default ExcelTask