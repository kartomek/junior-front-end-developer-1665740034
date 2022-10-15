//styles
import './MessageCard.css';
//libs
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
//provider
import { useProvider } from '../../../../providers/AppContext';

const MessageCard = ({element}) => {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    const navigate = useNavigate();
    const {context_id, message_id} = useParams();
    let {data} = useProvider();

    const today = new Date();
    const createdContext = new Date(element.created_at)
    const diff = today.getTime() - createdContext.getTime();
    const days = Math.floor(diff / 1000 / 60 / 60 /24);

    useEffect(() => {
        if(!message_id) return;
        if(Number(message_id) === element.id){
            data[context_id].context[element.id].status = 'OPEN'
            forceUpdate();
        }else if(data[context_id].context[element.id].status === 'NEW'){
            return;
        }else if(data[context_id].context[element.id].status === 'OPEN'){
            data[context_id].context[element.id].status = 'READ'
            forceUpdate();
        }
    }, [message_id, element.id, context_id, data, forceUpdate])

    return(
        <div 
            onClick={() => navigate(`/${context_id}/${element.id}`)} 
            className={element.status === 'OPEN' ||  element.status === 'NEW' ? 'MessageCard MessageCardOpen' : 'MessageCard'}
        >
            <div className='MessageCard-header'>
                {element.status === 'NEW' && <p className='MessageCard-header-badge'>New</p>}
                <p className='MessageCard-header-title'>{element.author} • Oct {days}</p>
            </div>
            <p className='MessageCard-title'>{element.title}</p>
            <p className='MessageCard-text'>{element.content}</p>
        </div>
    )
}

export default MessageCard;