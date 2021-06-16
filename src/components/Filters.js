import FilterName from "./FilterName";
import FilterSpecies from "./FilterSpecies";
import "../stylesheets/_filters.scss";

const Filters = (props) => {
  return (
    <section className="form">
      <form action="" className="form__container">
        <FilterName handleFilters={props.handleFilters}></FilterName>
        <FilterSpecies handleFilters={props.handleFilters}></FilterSpecies>
      </form>
    </section>
  );
};

export default Filters;
