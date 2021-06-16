const FilterSpecies = (props) => {
  const handleChange = (ev) => {
    console.log(ev.type, ev.target.value);
    props.handleFilters({
      value: ev.target.value,
      key: "species",
    });
  };
  return (
    <>
      <label htmlFor="" className="form__container--specie">
        Especie{" "}
      </label>
      <input type="text" className="search" onChange={handleChange} />
    </>
  );
};

export default FilterSpecies;
