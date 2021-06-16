import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";
const Filters = (handleFilters) => {
  console.log(handleFilters);
  return (
    <section>
      <form action="">
        <FilterName handleFilters={handleFilters}></FilterName>
        <FilterSpecies></FilterSpecies>
      </form>
    </section>
  );
};

export default Filters;
