const themeSwitcher = (): void => {
  const userCurrTheme = localStorage.getItem('userTheme');

  if (userCurrTheme === 'dark') {
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('userTheme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('userTheme', 'dark');
  }
};

export default themeSwitcher;
