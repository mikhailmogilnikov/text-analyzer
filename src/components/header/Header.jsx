import { GithubLogo } from '@phosphor-icons/react';
import '../../styles/header.scss';

import { NavLink } from 'react-router-dom';
import HackatonLogo from '../../../public/assets/svg/HackatonLogo';
import { RailwaysLogo } from '../../../public/assets/svg/Railways';
import { useScroll } from '../../hooks/useScroll';

const Header = () => {
  const isScrolled = useScroll();

  return (
    <header className={`header-wrapper${isScrolled ? ' scrolled' : ''}`}>
      <div className="header-fader"></div>
      <div className="header-content">
        <NavLink to={'/'} className="title">
          <RailwaysLogo />
          <h1>Анализатор текста</h1>
        </NavLink>
        <div className="additional-content">
          <NavLink
            to={'https://hacks-ai.ru'}
            target="_blank"
            className="hackaton-header"
          >
            <HackatonLogo />
          </NavLink>
          <NavLink
            to={'https://github.com/Sereneum/ai-railway-scanner-app'}
            target="_blank"
            className="github-button"
          >
            <GithubLogo weight="bold" className="icon-big" />
            <p>GitHub</p>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
