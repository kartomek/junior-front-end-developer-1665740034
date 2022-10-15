//styles
import './MessageBox.css';
//libs
import { useParams } from 'react-router-dom';
//provider
import { useProvider } from '../../../providers/AppContext';
//images
import avatar from '../../../images/avatar.png';

const MessageBox = () => {

    const {context_id, message_id} = useParams();
    const {data} = useProvider();

    const today = new Date();
    const createdContext = new Date(data[context_id].context[message_id].created_at)
    const diff = today.getTime() - createdContext.getTime();
    const days = Math.floor(diff / 1000 / 60 / 60 /24);

    return(
        <div className='MessageBox'>
            <p className='MessageBox-title'>{data[context_id].context[message_id].title}</p>
            <div className='MessageBox-container'>
                <div className='MessageBox-container-header'>
                    <div className='MessageBox-container-header-image'>
                        <img src={avatar} alt="avatar" />
                    </div>
                    <p>{data[context_id].context[message_id].author}</p>
                    <p className='MessageBox-container-header-date'>Oct {days}</p>
                </div>
                <p className='MessageBox-container-text'>{data[context_id].context[message_id].content}</p>
            </div>
        </div>
    )
}

export default MessageBox;