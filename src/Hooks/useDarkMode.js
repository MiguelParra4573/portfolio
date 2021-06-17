import { useEffect,useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState(localStorage.theme)
    const colorTheme = (theme === 'dark') ? 'light': 'dark'
    useEffect(() => {
        const root = window.document.documentElement
        localStorage.setItem("Theme", theme)
        root.classList.remove(colorTheme)
        root.classList.add(theme)

    }, [theme,colorTheme])

    return [colorTheme, setTheme]
}
