import { Theme, useTheme } from "app/providers/ThemeProvider"
import { classNames } from "helpers/classNames/classNames"
import cls from './ThemeSwitcher.module.scss'
import { FC } from "react"
import DarkTheme from 'shared/assets/icons/theme-dark.svg'
import LightTheme from 'shared/assets/icons/theme-light.svg'
import { Button, ButtonTheme } from "shared/ui/Button"



interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
    const { className } = props
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            onClick={toggleTheme}
            className={classNames(cls.themeSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR}
        >
            {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
        </Button>

    )
}

export default ThemeSwitcher