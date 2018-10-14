import React from 'react';

const Contact = (props) => {
  setTimeout(() => {
    props.history.push('/About')
  }, 2000);
  return(
    <div className='container'>
      <h4 className='center'>Contact</h4>
      <p>I dont know how much I should write, I am not sure if this is where I should start or if I should do that stupid shit for p.p on ripple, I wonder who started first the program or the crypto. I only have a few more days and weeks to finish the dog bite</p>
    </div>
  );
};

export default Contact;
