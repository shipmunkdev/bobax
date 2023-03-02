import bobaList from './bobalist.jsx';
import IndCard from '../Card/index.jsx';
import './index.css';

const BobaContainer = () => {
  return (
    <div className='indBoba'>
      {bobaList.map((boba) => (
        <IndCard key={boba.name} boba={boba} />
      ))}
    </div>
  );
};

export default BobaContainer;
