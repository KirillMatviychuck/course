import { classNames } from "helpers/classNames/classNames"
import { ButtonHTMLAttributes, FC } from "react"
import cls from "./Button.module.scss"

export enum ButtonTheme {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
}
const Button: FC<ButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props

    return (
        <button
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button