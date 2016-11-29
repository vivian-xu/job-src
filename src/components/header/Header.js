const Header = ({title}) => {

  let onhandleBack = () => {
    window.history.back();
  }

  return (
    <nav
      className="c-nav-header"
    >
      <span className="iconfont icon-left c-nav-header__back" onClick={onhandleBack} />
      <h1 className="c-nav-header__title"> {title} </h1>
    </nav>
  );
}
export default Header;
