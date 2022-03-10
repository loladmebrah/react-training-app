import React, { useEffect, useState } from 'react';

const FunctionalTest = () =>{
    //state definition on functional syntax
    //variable year has a function chained; everything is set using the useState function
    const [year, setYear] = useState('2012');
    
    //part of the life cycle
    useEffect(async ()=>{
        let y = await getTheYear();
        this.setYear(y);
    })

    //regular promise like function
    const getTheYear = () =>{
        return new Promise((resolve, reject)=>{
            const year = new Date().getFullYear();
            resolve(year);
        })
    }

    return (
        <div>
            This is our current year {year}
        </div>
    )
}

export default FunctionalTest;