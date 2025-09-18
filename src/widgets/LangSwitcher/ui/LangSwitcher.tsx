import { classNames } from "helpers/classNames/classNames"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme } from "shared/ui/Button"
import cls from "./LangSwitcher.module.scss"
import { FC } from "react"

interface LangSwitcherProps {
    className?: string
}

const LangSwitcher: FC<LangSwitcherProps> = (props) => {
    const { className } = props
    const { t, i18n } = useTranslation()
    const toggleBtn = () => i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')

    return (
        <Button theme={ButtonTheme.CLEAR} className={classNames(cls.langSwitcher, {}, [className])} onClick={toggleBtn}>{
            t('Мова')}
        </Button>
    )
}

export default LangSwitcher