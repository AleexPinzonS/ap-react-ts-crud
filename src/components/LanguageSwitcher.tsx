// src/components/LanguageSwitcher.tsx
import React, { useContext } from 'react';
import { LanguageContext } from '../services/i18n';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'es' : 'en'));
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        Switch to {language === 'en' ? 'Spanish' : 'English'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;