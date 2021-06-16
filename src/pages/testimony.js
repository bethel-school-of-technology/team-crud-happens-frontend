import React from 'react';
import CreateTestimony from './CreateTestimony';
import DisplayList from './DisplayList';

const Testimony = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'left',
                height: '100vh'
            }}
        >
            
            <CreateTestimony></CreateTestimony>
            <DisplayList></DisplayList>
        </div>)
      
   
       
 
}

export default Testimony

  