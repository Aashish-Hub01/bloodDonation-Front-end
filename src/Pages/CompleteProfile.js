import React, { useState } from 'react';
import './CompleteProfile.css';

const CompleteProfile = (props) => {
  const [enteredName, setEnteredName] = useState('UserName');
  const [enteredWeight, setEnteredWeight] = useState('50');
  const [enteredDOB, setEnteredDOB] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredName: '',
  //   enteredWeight: '',
  //   enteredDate: '',
  // });

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredName: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredWeight: event.target.value,
    // });
  };

  const dateOfBirthChangeHandler = (event) => {
    setEnteredDOB(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDOB: event.target.value,
    // });
  };
  const submitHandler = (event)=>{
    event.preventDefault();

    const profileData = {
        name : enteredName,
        weight : enteredWeight,
        dateOfBirth : new Date(enteredDOB)
    };
    props.onSaveProfileData(profileData);
    
    setEnteredName('');
    setEnteredWeight('');
    setEnteredDOB('');
  };

  return (
    <form onSubmit = {submitHandler}>
      <div className='new-profile__controls'>
        <div className='new-profile__control'>
          <label>Name</label>
          <input type='text' onChange={nameChangeHandler} value = {enteredName}/>
        </div>
        <div className='new-profile__control'>
          <label>Weight</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value = {enteredWeight}
            onChange={weightChangeHandler}
          />
        </div>
        <div className='new-profile__control'>
          <label>Date Of Birth</label>
          <input
            type='date'
            min='1940-01-01'
            max='2023-12-31'
            value = {enteredDOB}
            onChange={dateOfBirthChangeHandler}
          />
        </div>
      </div>
      <div>
        <button type='submit'>Finish Profile</button>
      </div>
    </form>
  );
};

export default CompleteProfile;