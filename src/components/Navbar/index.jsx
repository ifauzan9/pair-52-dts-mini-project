import { AppBar, Box, Button, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

// logo netflix
import logoNetflix from "../../assets/icons/logo-netflix.svg";
import fontNetflix from "../../assets/icons/font-netflix.svg";

// import icon navbar kanan
import iconSearch from "../../assets/icons/icon-search.svg";
import iconGift from "../../assets/icons/icon-gift.svg";
import iconBell from "../../assets/icons/icon-bell.svg";
import profileImg from "../../assets/icons/ProfileIMG.svg";
import dropDown from "../../assets/icons/segitiga-bawah.svg";
import { Link, Navigate } from "react-router-dom";
import classNames from "classnames";

import { useAuthState } from "react-firebase-hooks/auth";

import { auth, keluarDariAplikasi } from "../../authentication/firebase";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuNavbar, setMenuNavbar] = useState([
    "home",
    "series",
    "movies",
    "new and popular",
    "my list",
  ]);
  const [email, setEmail] = useState("");

  const [showProfileBox, setShowProfileBox] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const handleProfileBox = () => {
    setShowProfileBox(!showProfileBox);
  };

  const handleLogOut = async () => {
    if (user) {
      await keluarDariAplikasi();
      setEmail("");
    }
  };

  useEffect(() => {
    if (user) {
      setEmail(user.email);
    }
  }, [loading, user, error]);

  return (
    <AppBar sx={{ backgroundColor: "#141414", p: 2 }} position="fixed">
      <Box
        sx={{
          marginLeft: 2,
          marginRight: 2,
          display: "flex",
          alignItems: "center",
          // backgroundColor: "#555555",
          justifyContent: "space-between",
          height: "50px",
        }}
      >
        {/* Navbar kiri */}
        <Box
          sx={{
            // backgroundColor: "green",
            display: "flex",
            flex: "1",
            alignItems: "center",
          }}
        >
          {/* logo */}
          <Link to="/">
            <Box component="img" src={logoNetflix} sx={{ width: "50px" }}></Box>
          </Link>
          <Box
            component="img"
            src={fontNetflix}
            sx={{
              width: { xs: "140px", sm: "15%" },
              display: { xs: "none", md: "block" },
              height: "35px",
              // backgroundColor: "green",
            }}
          ></Box>

          {/* menu */}
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              // backgroundColor: "gray",
            }}
          >
            {menuNavbar.map((nav, index) => {
              return (
                <Button
                  key={index}
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                  }}
                >
                  {nav}
                </Button>
              );
            })}
          </Box>
        </Box>

        {/* Navbar Kanan */}
        <Box sx={{ textAlign: "end", position: "relative" }}>
          <IconButton sx={{ display: { xs: "none", sm: "initial" } }}>
            <Box component="img" src={iconSearch} />
          </IconButton>
          <IconButton sx={{ color: "#fff", fontSize: 14 }}>{email}</IconButton>
          <IconButton sx={{ display: { xs: "none", sm: "initial" } }}>
            <Box component="img" src={iconGift} />
          </IconButton>
          <IconButton sx={{ display: { xs: "none", sm: "initial" } }}>
            <Box component="img" src={iconBell} />
          </IconButton>
          <IconButton sx={{ width: "50px" }} onClick={() => handleProfileBox()}>
            <Box
              component="img"
              src={profileImg}
              sx={{ marginRight: "0.2rem" }}
            />
            <Box component="img" src={dropDown} />
          </IconButton>
          <div
            className={classNames(styles.profileBox, {
              [styles.show]: showProfileBox,
              [styles.hide]: !showProfileBox,
            })}
          >
            <ul className={styles.listProfileBox}>
              {user ? (
                <li onClick={handleLogOut}>Logout</li>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}

              {/* <li>Logout</li> */}
              <li>
                <Link to="/manage">Manage Profile</Link>
              </li>
            </ul>
          </div>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Navbar;
