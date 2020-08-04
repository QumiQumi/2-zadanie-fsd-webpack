//SCSS
import "./assets/scss/main.scss";
import "../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min.css";
//JS
import "./components/text-field/text-field";
// import "./components/iqdropdown/iqdropdown";
import "../node_modules/item-quantity-dropdown/lib/item-quantity-dropdown.min";

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}
/*
requireAll(
  require.context("./components", true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/)
); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1
requireAll(
  require.context("./pages", true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/)
);
*/
