//styles
import './MainPage.css';
//components
import TaskLists from '../../components/TaskLists/TaskLists';
//libs
import { Outlet } from 'react-router-dom';

const MainPage = () => {
    return(
        <div className='MainPage'>
            <TaskLists />
            <Outlet />
        </div>
    )
}

export default MainPage;