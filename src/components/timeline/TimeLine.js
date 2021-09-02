import React, {useEffect, useState} from 'react';
import PointerArea from "./PointerArea"
import WelcomeModal from "./WelcomeModal";

const TimeLine = (props) => {
const [welcomeModal, setWelcomeModal] = useState(false)

  useEffect(() => {
    setWelcomeModal(true);
  }, []);

const hideWelcomeModal = () => {
setWelcomeModal (false)
}
 
    return (
      <>
        {welcomeModal && <WelcomeModal hideWelcomeModal={hideWelcomeModal} />}
        <PointerArea />
      </>
    );
};

export default TimeLine;