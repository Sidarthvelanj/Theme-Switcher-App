import { useTheme } from './context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-500">
      <div
        onClick={toggleTheme}
        className="w-[30vw] h-[30vw] flex items-center justify-center rounded-full bg-yellow-300 dark:bg-gray-700 transition-all duration-500 shadow-lg cursor-pointer hover:scale-105"
      >
        {theme === 'light' ? (
          <FaSun className="text-[12vw] text-yellow-600" />
        ) : (
          <FaMoon className="text-[12vw] text-white" />
        )}
      </div>
    </div>
  );
}