import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selector';
import { setFilter } from 'redux/slices/contactsSlice';
import { SearchIconStyle } from 'components/icons/icons.styled';
import { LabelFilter, InputFilter } from 'components/Filter/Filter.styled';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        name="filter"
        title="The ability to filter the contact book"
        required
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value))}
      />
      <SearchIconStyle />
    </LabelFilter>
  );
};

export default Filter;
