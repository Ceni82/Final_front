import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import logoAdminDesktop from "../../assets/logoAdminDesktop.png";
import logoAdminMobile from "../../assets/logoAdminMobile.png";

import { DesktopContainer, MobileContainer } from "./styles";
import { Button } from "../Button";
import { RxExit, RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export function Header({ children, isHide = false }) {
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);

  const [showMenu, setShowMenu] = useState(false);
  const [hideNavBar, setHideNaveBar] = useState(false);

  const { singOut } = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/new");
  };

  const handleSignOut = () => {
    singOut();
    navigate("/");
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenMobile(window.innerWidth < 820);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const handleHideNavBar = () => {
      setHideNaveBar(scrollY < 170);
    };
    handleHideNavBar();
    window.addEventListener("scroll", handleHideNavBar);
    return () => window.removeEventListener("scroll", handleHideNavBar);
  }, []);

  return isScreenMobile ? (
    <MobileContainer>
      <div className="nav">
        <button onClick={handleShowMenu}>
          {showMenu ? (
            <RxCross1 size={24}></RxCross1>
          ) : (
            <RxHamburgerMenu size={24}></RxHamburgerMenu>
          )}
        </button>

        {showMenu ? (
          <h1>Menu</h1>
        ) : (
          <Link to="/">
            <img src={logoAdminMobile} alt="FoodExplorer" />
          </Link>
        )}
      </div>

      <div className={`nav-elements ${showMenu && "active"}`}>
        {children}

        <ul>
          <li>
            <Link to="/new">Novo Prato</Link>
          </li>
          <li>
            <button onClick={handleSignOut}>Sair</button>
          </li>
        </ul>
      </div>
    </MobileContainer>
  ) : (
    <DesktopContainer>
      <Link to="/">
        <img src={logoAdminDesktop} alt="" />
      </Link>

      {children}

      <div className="wrapper">
        <div className="buttonWrapper">
          <Button title={"Novo Prato"} onClick={handleNavigate}></Button>
        </div>
        <button onClick={handleSignOut}>
          <RxExit size={24} />
        </button>
      </div>
    </DesktopContainer>
  );
}
