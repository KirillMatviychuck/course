import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import './styles/index.scss';




const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <button onClick={toggleTheme}>TOGGLE THEME</button>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'} >About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route key={path}
                            element={element}
                            path={path} />
                    ))}
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;