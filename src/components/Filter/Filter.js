// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import css from "./Filter.module.css";
import { setFilter } from "redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.filter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <label className={css.filterLabel}>Find contacts by name</label>
      <input type="text" name="filter" value={filter} onChange={handleChange} />
    </div>
  );
};

