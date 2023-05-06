import { useState } from 'react';

import NavigationBar from 'components/NavigationBar';
import Homepage from 'pages/Home';
import { BobaProps } from 'types/common/main';

const Main = () => {
    const [order, setOrder] = useState<BobaProps[]>([]);

    return (
        <>
            <NavigationBar cartItemsCount={order.length} />
            <Homepage order={order} setOrder={setOrder} />
        </>
    );
};

export default Main;
