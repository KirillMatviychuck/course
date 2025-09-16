type Mods = Record<string, string | boolean>

export function classNames(cls: string, mods: Mods, additional: string[]) {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]
        .join(' ')
}

classNames('btn-next', { proger: true, loser: false, rich: true }, ['will-be-proger-in-2026'])