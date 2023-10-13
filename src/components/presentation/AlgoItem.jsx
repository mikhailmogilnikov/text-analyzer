import PropTypes from 'prop-types';

const AlgoItem = ({ num, name, desc }) => {
  return (
    <div className="algo-item-wrapper">
      <div className="avatar">
        <p>{num}</p>
      </div>

      <div className="text-wrapper">
        <h2>{name}</h2>
        <p className="low-opacity">{desc}</p>
      </div>
    </div>
  );
};

AlgoItem.propTypes = {
  num: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default AlgoItem;
