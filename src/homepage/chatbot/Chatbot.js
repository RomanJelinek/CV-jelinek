import React, { useState, useEffect } from 'react';
import './Chatbot.css';

const Chatbot = ({ setShowChatbot, liftData }) => {
  const checkBoxValues = [
    { id: 'CvEducation', text: 'Education', isChecked: false },
    { id: 'CvExperience', text: 'Web development', isChecked: false },
    { id: 'CvOtherExperience', text: 'Other experience', isChecked: false },
    { id: 'CvHobbies', text: 'Hobbies', isChecked: false },
  ];

  const [companyName, setCompanyName] = useState('');
  const [checkBoxes, setCheckBoxes] = useState(checkBoxValues);
  // Getting a company name from URL (UTM Parameter)
  useEffect(() => {
    const url = window.location.href;
    if (url.includes('=')) {
      const company = url.split('=').pop();
      setCompanyName(company);
    }
  }, []);

  // handle items for generating CV //
  const handleFormCv = (e) => {
    const id = e.target.id; // getting ID of item
    const isChecked = e.target.checked; // getting whether the checkbox is checked or not
    const index = checkBoxes
      .map((x) => {
        return x.id;
      })
      .indexOf(id); // getting index of object in Array
    const arrayCopy = [...checkBoxes]; // making a copy of the checkBoxes state
    arrayCopy[index].isChecked = isChecked; // updating object
    setCheckBoxes(arrayCopy);
  };
  ///////

  const showCV = () => {
    let checkedBoxes = [];
    checkBoxes.map((box) => {
      box.isChecked && checkedBoxes.push(box.id);
    });

    const dataToSend = {
      company: companyName,
      itemsToShow: checkedBoxes,
      cvToPrint: true,
    };

    window.localStorage.setItem('userData', JSON.stringify(dataToSend)); // sending all needed data to local storage
    liftData(false); 
    setShowChatbot(false);
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-text-to-show">
        Welcome to my website.{' '}
        {companyName && `Anyne from ${companyName} is always welcome here. `}
        I&nbsp;am Roman, and I&nbsp;am looking for a&nbsp;job as
        a&nbsp;Front-end developer. Please choose the sections of the CV you are
        interested in, and I&nbsp;will generate a&nbsp;customized CV for you.
        Let's&nbsp;set it up!
      </div>

      <li className="chatbot-checkboxes">
        <input checked type="checkbox" id="CvMainText" />
        <label className="chatbot-checkboxes-label" for="CvMainText">
          Basic information
        </label>
      </li>
      {checkBoxes.map((cvItem) => {
        return (
          <li className="chatbot-checkboxes">
            {' '}
            <input
              type="checkbox"
              onChange={handleFormCv}
              id={cvItem.id}
              name={cvItem.id}
              value={cvItem.id}
            />
            <label className="chatbot-checkboxes-label" for={cvItem.id}>
              {cvItem.text}
            </label>
          </li>
        );
      })}
      <button onClick={showCV}>Generate CV</button>
    </div>
  );
};

export default Chatbot;
