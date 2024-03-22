import SingleItem_86 from './SingleItem_86';
import { useQuery } from '@tanstack/react-query';
const Items_86 = ({ items }) => {
  return (
    <div className='items'>
      
      {items.map((item) => {
        return <SingleItem_86 key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items_86;
