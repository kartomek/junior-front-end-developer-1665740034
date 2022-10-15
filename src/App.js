import { BrowserRouter, Routes, Route} from 'react-router-dom';
//components
import BusinessContext from './components/BusinessContext/BusinesssContext';
import MessageBox from './components/BusinessContext/MessageBox/MessageBox';
//containers
import MainPage from './containers/MainPage/MainPage';
//styles
import './styles/styles.css'

const App = () =>{
    return(
        <BrowserRouter>
            <Routes> 
                <Route path="/" exact element={<MainPage />}>
                    <Route path=":context_id" element={<BusinessContext />}>
                        <Route path=":message_id" element={<MessageBox />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;