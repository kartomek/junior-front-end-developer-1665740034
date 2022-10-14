//styles
import './TaskLists.css';
//svgs
import IconMark from '../../svg/mark.svg'
import IconArrow from '../../svg/arrow.svg'
import IconPadlock from '../../svg/padlock.svg'

const TaskLists = () => {

//data
const data = [
    {
        title: 'Appliction setup',
        status: 'DONE',
        context: []
    }, 
    {
        title: 'Static books list',
        status: 'DONE',
        context: []
    }, 
    {
        title: 'Administration panel',
        status: 'DONE',
        context: []
    }, 
    {
        title: 'Connect admin with frontend',
        status: 'PROGRESS',
        context: []
    }, 
    {
        title: 'Book review feature',
        status: 'CLOSED',
        context: []
    }
]

    return(
        <div className='TaskLists'>
            <div className='TaskLists-header'>
                <p>YOUR TASKS</p>
            </div>
            <div className='TaskLists-content'>
                {data.map((element, index) => {
                    return(
                        <div 
                            key={index}
                            className='TaskLists-content-element'
                        >
                            {element.status === 'DONE' ? 
                                (
                                    <div className='TaskLists-content-element-done'>
                                        <img src={IconMark} alt="IconMark"/>
                                    </div>
                                ): element.status === 'PROGRESS' ?
                                (
                                    <div className='TaskLists-content-element-progress'>
                                        <img src={IconArrow} alt="IconArrow"/>
                                    </div>
                                ) : (
                                    <div className='TaskLists-content-element-closed'>
                                        <img src={IconPadlock} alt="IconPadlock"/>
                                    </div>
                                )
                            }
                            <p className={element.status === 'DONE' ? 
                                'TaskLists-content-element-title-done' 
                                : element.status === 'PROGRESS' ? 
                                'TaskLists-content-element-title-progress' : 
                                'TaskLists-content-element-title-closed'}
                            >
                                {element.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default TaskLists;
