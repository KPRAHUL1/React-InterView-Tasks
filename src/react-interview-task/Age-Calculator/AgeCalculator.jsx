import React, { useState } from 'react';
import '../../App.css'
function AgeCalculator() {
    const [birthdate, setBirthdate] = useState('');
    const calculateAge =()=>{
        if (!birthdate) {
            alert("Please select a birthdate");
            return;
        }
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        console.log(age);
        
        const monthDiff = today.getMonth() - birthDate.getMonth();
        console.log(monthDiff);
        

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        document.querySelector('.age-result').textContent = `Your age is: ${age} years ${monthDiff} months ${today.getDate() - birthDate.getDate()} days`;
    }
  return (
    <div className="conatiner">
      <h2 className="title">Age Calculator</h2>
      <label className="label">Enter/Select a birthdate:</label>
      <input id="birthdate"  type="date" className="input-date" value={birthdate} onChange={(e)=>setBirthdate(e.target.value)}/>
      <button className="btn-calc" onClick={calculateAge}>Calculate Age</button>
      <p className="error-msg"></p>
      <p className="age-result"></p>
    </div>
  );
}

export default AgeCalculator;
