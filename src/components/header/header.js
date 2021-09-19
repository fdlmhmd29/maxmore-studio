/** @jsx jsx */
import { jsx, Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link } from "react-scroll";
import Logo from "components/logo";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";

import LogoDark from "assets/logo-dark.svg";
import Divider from "assets/divider.svg";

export default function Header({ className }) {
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />

          <Flex as="nav" sx={styles.nav}>
            {menuItems.map(({ path, label }, i) => (
              <Link
                activeClass="active"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
              >
                {label}
              </Link>
            ))}
          </Flex>
          {/* <a
            sx={{ textDecoration: "none" }}
            target="_blank"
            href="https://us8.list-manage.com/contact-form?u=2a1f277b33d0f3f94c94184e4&form_id=e68c7f5368b6244e1bd2fa16ad74e424"
          >
            <Button
              className="donate__btn"
              variant="secondary"
              aria-label="Get Started"
            >
              Hubungi Kami
            </Button>
          </a> */}

          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    py: [4, null, 5],
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
      backgroundImage: ["none", null, null, null, `url(${Divider})`],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
      backgroundColor: ["#FEEDEF", null, null, null, "transparent"],
      color: "primary",
      fontWeight: "bold",
      py: ["12px", null, null, null, 2],
      px: [3, null, null, null, 0],
      ":hover": {
        backgroundColor: ["primary", null, null, null, "transparent"],
        color: ["white", null, null, null, "primary"],
      },
    },
    "&.sticky": {
      position: "fixed",
      backgroundColor: "background",
      color: "heading",
      boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      py: "20px",
      "nev > a": {
        color: "heading",
      },
      ".donate__btn": {
        border: "0px solid",
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nav: {
    ml: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: "16px",
      fontWeight: "heading",
      px: 20,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      color: "text_secondary",
      "&:hover": {
        color: "#0367FF",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
