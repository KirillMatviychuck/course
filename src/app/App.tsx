import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'app/providers/Router';
import './styles/index.scss';
import { Navbar } from 'widgets/Navbar';




const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <Navbar />
            <AppRoutes />
        </div>
    )
}

export default App;