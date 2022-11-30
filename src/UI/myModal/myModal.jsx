import React from 'react';
import   myModal from './myModal.module.css';

const MyModal = ({children, visible, setVisible}) => {

    const rootClasses = [myModal.myModal]

    if (visible) {
        rootClasses.push(myModal.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={myModal.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;