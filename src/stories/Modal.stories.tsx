import React, { useState } from 'react';

import Button from 'components/Button';
import BaseModal from 'components/Modal';

export default {
    title: 'BobaX/BaseModal',
    component: BaseModal,
};

const TestContainer: React.FC = () => {
    return (
        <div>
            <h1>Test Container</h1>
            <p>This is a test container paragraph.</p>
        </div>
    );
};

export const ModalClosed = (): JSX.Element => {
    const [modalShow, setModalShow] = useState<boolean>(false);

    const handleButtonClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <Button variant={'primary'} label={'Open Modal'} onClick={handleButtonClick} />
            <BaseModal
                title='Modal Title'
                modalShow={modalShow}
                onHide={() => setModalShow(false)}
                ModalBody={() => <TestContainer />}
            />
        </>
    );
};

export const ModalOpened = (): JSX.Element => {
    const [modalShow, setModalShow] = useState<boolean>(true);

    const handleButtonClick = () => {
        setModalShow(true);
    };
    return (
        <>
            <Button variant={'primary'} label={'Open Modal'} onClick={handleButtonClick} />
            <BaseModal
                title='Modal Title'
                modalShow={modalShow}
                onHide={() => setModalShow(false)}
                ModalBody={() => <TestContainer />}
            />
        </>
    );
};
