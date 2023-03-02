import Row from 'react-bootstrap/Row'

import bobaList from './bobalist.jsx';
import IndCard from '../Card/index.jsx';
import './index.css';

const BobaContainer = () => {
  return (
    <div className='indBoba'>
      <Row >
      {bobaList.map((boba) => (
        <IndCard key={boba.name} boba={boba} />
        ))}
      </Row>
    </div>
  );
};

export default BobaContainer;
