
import React from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();

  const languages: { label: string; value: Language; flag: string }[] = [
    { label: t('language.en'), value: 'en', flag: '🇬🇧' },
    { label: t('language.de'), value: 'de', flag: '🇩🇪' },
  ];

  // Find the current language object
  const currentLanguage = languages.find(lang => lang.value === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-1" aria-label="Select language">
          <span className="flex items-center gap-1.5">
            <Globe className="h-5 w-5" />
            <span className="text-lg">{currentLanguage?.flag}</span>
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.value}
            onClick={() => setLanguage(lang.value)}
            className={language === lang.value ? "bg-primary/10 font-medium" : ""}
          >
            <span className="mr-2 text-lg">{lang.flag}</span> {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
