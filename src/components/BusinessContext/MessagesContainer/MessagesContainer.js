import './MessagesContainer.css';
//components
import MessageCard from './MessageCard/MessageCard';
//provider
import { useProvider } from '../../../providers/AppContext';
//libs
import { useParams } from 'react-router-dom';

const MessagesContainer = () => {

    const {data} = useProvider();
    const {context_id} = useParams();

    return(
        <div className='MessagesContainer'>
            {data[context_id].context.map((el, index) => {
                return(
                    <MessageCard key={index} data={el}/>
                )
            })}
        </div>
    )
}

export default MessagesContainer;