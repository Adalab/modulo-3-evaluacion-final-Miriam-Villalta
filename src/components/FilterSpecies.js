import "../stylesheets/_filters.scss";

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
      <select name="" id="" className="search" onChange={handleChange}>
        <option value="Select">Selecciona</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </>
  );
};

export default FilterSpecies;
