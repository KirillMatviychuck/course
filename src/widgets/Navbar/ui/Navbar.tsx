import { classNames } from "helpers/classNames/classNames"
import { FC } from "react"
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink"
import cls from "./Navbar.module.scss"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={(classNames(cls.links))}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.mainLink)}>Mains</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} >About</AppLink>
            </div>
        </div>
    )
}

export default Navbar