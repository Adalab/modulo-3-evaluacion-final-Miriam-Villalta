import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";
const Filters = (props) => {
  console.log(props);
  return (
    <section>
      <form action="">
        <FilterName handleFilters={props.handleFilters}></FilterName>
        <FilterSpecies handleFilters={props.handleFilters}></FilterSpecies>
      </form>
    </section>
  );
};

export default Filters;
