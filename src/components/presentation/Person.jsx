import PropTypes from 'prop-types';

const Person = ({ img, name, role }) => {
  return (
    <div className="person-wrapper">
      <div className="avatar">
        <img src={img} alt={name}></img>
      </div>
      <div className="text-wrapper">
        <h2>{name}</h2>
        <p className="low-opacity">{role}</p>
      </div>
    </div>
  );
};

Person.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Person;
