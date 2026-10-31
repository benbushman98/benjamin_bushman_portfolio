interface BackMobileProps {
  changeMobileMenu: (value: boolean) => void;
}

const BackMobile = ({ changeMobileMenu }: BackMobileProps) => {
  return (
    <span
      className="back-mobile"
      id="back-mobile"
      onClick={() => changeMobileMenu(false)}
    >
      <i className="fa fa-arrow-left" />
    </span>
  );
};
export default BackMobile;
