export const getThemeBySystem = () => {
  if (typeof window !== 'undefined') {
    const isUserThemeDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches
    const userTheme = localStorage.getItem('userTheme')

    const themeToSet = isUserThemeDark ? 'dark' : 'light'

    if (userTheme === null) {
      localStorage.setItem('userTheme', themeToSet)
      document.documentElement.setAttribute('theme', themeToSet)
    }

    if (userTheme && themeToSet !== null) {
      document.documentElement.setAttribute('theme', themeToSet)
    }
  }
}
