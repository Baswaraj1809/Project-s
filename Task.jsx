import React, { useState } from 'react';

function Task(){

    const [fromdate,setFromdate]=useState('')
    const [todate,setTodate]=useState('')
    const [display,setDisplay]=useState([])
    let arr=[
        {
            date:'06/02/2023',
            names:'Indiana Jones and the Dial of Denstiny',
            image:'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg/220px-Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg',
            message:'2023 2h 34m',
            rating:'6.9'
        },
        {
            date:'07/04/2023',
            names:'No Hard Feelings',
            image:'https://th.bing.com/th/id/OIP.LG41ef8IWfINe7qYlVvFCgHaK8?w=114&h=180&c=7&r=0&o=5&pid=1.7',
            message:'2023 2h 43m',
            rating:'6.8'
        },
        {
            date:'04/16/2023',
            names:'Asteroid City',
            image:'https://th.bing.com/th?id=ODL.94ea84a777829b4694074d4c4d017ec2&w=135&h=201&c=10&rs=1&qlt=90&o=6&pid=13.1',
            message:'2023 1h 45m',
            rating:'7.1'
        },
        {
            date:'06/06/2023',
            names:'The Flash',
            image:'https://th.bing.com/th/id/OIP.lZKCvF2NujeR3qkgVXXY4AHaLH?w=115&h=180&c=7&r=0&o=5&pid=1.7',
            message:'2023 2h 24m',
            rating:'7.2'
        }
    ]

    const handleSubmit=()=>{
        const fromObj=new Date(fromdate)
        const toObj=new Date(todate)

        const item=arr.filter((ele)=>{
            const date=new Date(ele.date)
            return date >= fromObj && date <= toObj
        })
        setDisplay(item)
        console.log(item)
    }
    
    return(
        <>
       From <input type='date'  onChange={(e)=>setFromdate(e.target.value)} /> 
       To <input type='date'  onChange={(e)=>setTodate(e.target.value)} /> 
        <button onClick={handleSubmit}>Submit</button>
        
        
                        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr'}}>
{display.map((ele)=>{
                return(
                <div style={{ width:'200px'}}>
                <img style={{width:'200px'}} src={ele.image} alt={ele.names}/>
                <h1 style={{color:'red'}}>{ele.names}</h1>
                <p>{ele.message}</p>
                <h4>rating:{ele.rating}</h4>
                <h1 style={{color:'green',backgroundColor:'gray'}}>{ele.date}</h1>
                </div>  
            )})}
             </div>
        


</>

    )
}
export default Task