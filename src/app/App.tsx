import { AppRoutes } from 'app/providers/Router';
import { useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import './styles/index.scss';

const App = () => {
    const { theme } = useTheme()
    return (
        <div className={classNames('app', { hovered: true, selected: false }, [theme])}>
            <Navbar />
            <div className='content-page'>
                <Sidebar />
                <AppRoutes />
            </div>
        </div>
    )
}

export default App;