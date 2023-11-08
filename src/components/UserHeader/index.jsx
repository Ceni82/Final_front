import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import logoDesktop from "../../assets/logoDesktop.png";
import logoMobile from "../../assets/logoMobile.png";

import { DesktopContainer, MobileContainer } from "./styles";
import { Button } from "../Button";
import { RxExit, RxHamburgerMenu, RxCross1, RxReader } from "react-icons/rx";
import { TbReceipt } from "react-icons/tb";

export function Header({ children, isHide = false }) {
  const [isScreenMobile, setIsScreenMobile] = useState(window.innerWidth < 820);

  const [showMenu, setShowMenu] = useState(false);
  const [hideNavBar, setHideNaveBar] = useState(false);

  const { singOut } = useAuth();
  const navigate = useNavigate();

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSignOut = () => {
    singOut();
    navigate("/");
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
            <img src={logoMobile} alt="FoodExplorer" />
          </Link>
        )}

        {!showMenu ? (
          <div>
            <TbReceipt size={30} />
            <span>0</span>
          </div>
        ) : (
          <></>
        )}
      </div>

      <div className={`nav-elements ${showMenu && "active"}`}>
        {children}

        <ul>
          <li>
            <a href="">Pedidos(0)</a>
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
        <img src={logoDesktop} alt="" />
      </Link>
      {children}
      <div className="wrapper">
        <div className="buttonWrapper">
          <Button icon={TbReceipt} title={`Pedidos(0)`}></Button>
        </div>
        <button onClick={handleSignOut}>
          <RxExit />
        </button>
      </div>
    </DesktopContainer>
  );
}
