const FilterSpecies = (Filters) => {
  const handleChange = (ev) => {
    console.log(ev.type, Filters.ev.target.value);
  };
  return (
    <>
      <label htmlFor="">Especie </label>
      <input type="text" className="search" onChange={handleChange} />
    </>
  );
};

export default FilterSpecies;
