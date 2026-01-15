import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-charcoal text-warm-white/80">
      <div className="container-wide">
        <div className="flex flex-col items-center gap-6">
          {/* Gold accent line */}
          <div className="w-16 h-0.5 bg-primary mb-4" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
            <span className="text-sm tracking-wide">
              © {currentYear} {t.footer.rights}
            </span>
            <span className="text-sm tracking-wide text-primary">
              Desenvolvido com excelência
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
