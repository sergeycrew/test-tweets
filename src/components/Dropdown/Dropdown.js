import Select from 'react-select';
import { filterValues } from 'utils/filterValues';
import PropTypes from 'prop-types';
const options = [
  filterValues.all,
  filterValues.follow,
  filterValues.followings,
];

export const TweetsFilter = ({ selectedOption, setSelectedOption }) => {
  return (
    <Select
      name="selected-option"
      value={selectedOption}
      onChange={setSelectedOption}
      options={options}
      theme={theme => ({
        ...theme,
        borderRadius: 0,
        colors: {
          ...theme.colors,
          primary25: '#EBD8FF',
          primary: '#471CA9',
        },
      })}
    />
  );
};

TweetsFilter.propTypes = {
  selectedOption: PropTypes.object,
  setSelectedOption: PropTypes.func,
};
