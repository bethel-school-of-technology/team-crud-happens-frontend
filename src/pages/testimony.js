import React from 'react';
import CreateTestimony from './CreateTestimony';

const Testimony = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'right',
                height: '100vh'
            }}
        >
            <h1>Testimonies</h1>
            <CreateTestimony></CreateTestimony>
        </div>
    );
};

export default Testimony
  