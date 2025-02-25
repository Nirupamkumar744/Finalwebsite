import React, { useEffect } from 'react';

import { useGlobalContext } from './context';
import New from './components/new';
import Teacher from './components/Teacher';

const About = () => {
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [updateAboutPage]);

  return (
    <div>
     <New/>
      <Teacher/>
    </div>
  );
};

export default About;

