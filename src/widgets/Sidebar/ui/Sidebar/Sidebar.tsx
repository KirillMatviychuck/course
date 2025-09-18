import { FC, useState } from "react"
import cls from "./Sidebar.module.scss"
import { classNames } from "helpers/classNames/classNames"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"
import { LangSwitcher } from "widgets/LangSwitcher"


interface SidebarProps {
    className?: string
}
const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props
    const [collapsed, setCollapsed] = useState(false)
    const toggleBtn = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <button onClick={toggleBtn}>TOGGLE</button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}

export default Sidebar