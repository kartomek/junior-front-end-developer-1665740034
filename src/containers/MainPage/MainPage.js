//styles
import './MainPage.css';
//components
import TaskLists from '../../components/TaskLists/TaskLists';

const MainPage = () => {
    return(
        <div className='MainPage'>
            <TaskLists />
        </div>
    )
}

export default MainPage;