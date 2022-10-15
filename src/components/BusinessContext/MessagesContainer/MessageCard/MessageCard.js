//styles
import './MessageCard.css';
//libs
import { useNavigate, useParams } from 'react-router-dom';

const MessageCard = ({data}) => {

    const navigate = useNavigate();
    const {context_id} = useParams();

    const today = new Date();
    const createdContext = new Date(data.created_at)
    const diff = today.getTime() - createdContext.getTime();
    const days = Math.floor(diff / 1000 / 60 / 60 /24);

    return(
        <div 
            onClick={() => navigate(`/${context_id}/${data.id}`)} 
            className={data.status === 'OPEN' ||  data.status === 'NEW' ? 'MessageCard MessageCardOpen' : 'MessageCard'}
        >
            <div className='MessageCard-header'>
                {data.status === 'NEW' && <p className='MessageCard-header-badge'>New</p>}
                <p className='MessageCard-header-title'>{data.author} • Oct {days}</p>
            </div>
            <p className='MessageCard-title'>{data.title}</p>
            <p className='MessageCard-text'>{data.content}</p>
        </div>
    )
}

export default MessageCard;