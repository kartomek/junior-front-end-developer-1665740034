//styles
import './BusinessContext.css'
//svgs
import IconCompass from '../../svg/compass.svg';
//components
import MessagesContainer from './MessagesContainer/MessagesContainer';
//libs
import { Outlet } from 'react-router-dom';

const BusinessContext = () => {
    return(
        <div className='BusinessContext'>
            <div className='BusinessContext-header'>
                <div className='BusinessContext-header-content'>
                    <img src={IconCompass} alt="IconCompass" />
                    <p>Business Context</p>
                </div>
            </div>
            <div className='BusinessContext-content'>
                <MessagesContainer />
                <Outlet />
            </div>
        </div>
    )
}

export default BusinessContext;