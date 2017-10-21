import Nav from './src/main';

/* istanbul ignore next */
Nav.install = function(Vue) {
  Vue.component(Nav.name, Nav);
};

export default Nav;
