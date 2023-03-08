import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, idx) => {
                        const Layout = route.layout;
                        return (<Route
                            key={idx}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />);
                    })}
                    {privateRoutes.map((route, idx) => {
                        const Layout = route.layout;
                        return (<Route
                            key={idx}
                            path={route.path}
                            element={
                                <Layout>
                                    <route.component />
                                </Layout>
                            }
                        />);
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
