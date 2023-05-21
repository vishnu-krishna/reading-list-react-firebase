import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
    const { authIsReady, user } = useAuthContext();
    return (
        <div className='App'>
            {authIsReady && <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route exact path='/'>
                        {!user && <Redirect to='/login'/>}
                        {user && <Home/>}
                    </Route>
                    <Route path='/signup'>
                        {user && <Redirect to='/'/>}
                        {!user && <Signup/>}
                    </Route>
                    <Route path='/login'>
                        {user && <Redirect to='/'/>}
                        {!user && <Login/>}
                    </Route>
                </Switch>
            </BrowserRouter>}

        </div>
    );
}

export default App;
