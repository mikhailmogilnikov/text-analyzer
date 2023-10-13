import { Warning, ClockCountdown, Cpu } from '@phosphor-icons/react';
import PropTypes from 'prop-types';

const ProblemCard = ({ icon, name, desc }) => {
  let iconComponent;
  if (icon === 'Warning') {
    iconComponent = <Cpu className="icon-card" />;
  } else if (icon === 'Graph') {
    iconComponent = <ClockCountdown className="icon-card" />;
  } else if (icon === 'CurrencyRub') {
    iconComponent = <Warning className="icon-card" />;
  } else {
    iconComponent = null;
  }

  return (
    <div className="card-wrapper">
      <div className="card-head">{iconComponent}</div>
      <div className="card-text-wrapper">
        <h2>{name}</h2>
        <p className="low-opacity">{desc}</p>
      </div>
    </div>
  );
};

ProblemCard.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default ProblemCard;
