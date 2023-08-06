import { FC } from 'react';
import {PiDotsThreeBold} from 'react-icons/pi'

interface BurgerIconProps {
  
}

const BurgerIcon: FC<BurgerIconProps> = ({}) => {
  return <div className='mr-2 opacity-70'>
    <PiDotsThreeBold size={21} />
  </div>
}

export default BurgerIcon