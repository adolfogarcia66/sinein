/* eslint-disable jsx-a11y/alt-text */
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import NotesIcon from "@mui/icons-material/Notes";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Backdrop,
  Button,
  Fade,
  Hidden,
  SpeedDialAction,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import SpeedDial from "@mui/material/SpeedDial";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onDrawerToggle: () => void;
  name: string;
  id: any;
}

export default function Header(props: HeaderProps) {
  const btnPerson = "120%";

  const navigate = useNavigate();
  const [cnotif, setCnotif] = React.useState(0);
  const { onDrawerToggle } = props;
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  const handleToggle =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setPlacement(newPlacement);
      setOpen((prevOpen) => !prevOpen);
    };
  const onOpenCalendar = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate("/Calendario");
  };

  const onNotification = () => {
    setOpen((prevOpen) => !prevOpen);
    navigate("/Notification");
  };
  const onConfigProfile = () => {
    navigate("/perfil");
    setOpen((prevOpen) => !prevOpen);
  };

  const onLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const [openDial, setOpenDial] = React.useState(false);
  const handleOpenDial = () => setOpenDial(true);
  const handleCloseDial = () => setOpenDial(false);

  const actions = [
    {
      icon: (
        <>
          <Tooltip title=" Configuración de perfil">
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={onConfigProfile}
              color="inherit"
              sx={{
                width: "2.9rem",
                height: "2.9rem",
                fontSize: btnPerson,
                p: 0.1,
                backgroundColor: "#FFFFFF",
                "&:hover": { backgroundColor: "#CCCCCC" },
              }}
            >
              <PersonIcon className="IconoDentroBoton" />
            </IconButton>
          </Tooltip>
        </>
      ),
      name: " Configuración",
    },
    {
      icon: (
        <>
          <Tooltip title="Calendario">
            <IconButton
              className="ButtonColorGenerico"
              sx={{
                mt: 0.1,
                backgroundColor: "#FFFFFF",
                "&:hover": { backgroundColor: "#CCCCCC" },
              }}
              onClick={onOpenCalendar}
            >
              <CalendarMonthIcon className="IconoDentroBoton" />
            </IconButton>
          </Tooltip>
        </>
      ),
      name: "Calendario",
    },
    {
      icon: (
        <>
          <Tooltip title="Bandeja de correo">
            <Badge
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              badgeContent={cnotif}
              color="primary"
            >
              <IconButton
                className="ButtonColorGenerico"
                onClick={onNotification}
              >
                <NotificationsNoneIcon className="IconoDentroBoton" />
              </IconButton>
            </Badge>
          </Tooltip>
        </>
      ),
      name: "Notificaciones",
    },

    {
      icon: (
        <>
          <Tooltip title=" Cerrar sesión">
            <IconButton className="ButtonColorGenerico" onClick={onLogOut}>
              <LogoutIcon className="IconoDentroBoton" />
            </IconButton>
          </Tooltip>{" "}
        </>
      ),
      name: "Salir",
    },
  ];

  const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: "fixed",
    "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {},
    "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {},
  }));

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false && anchorRef.current) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <React.Fragment>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{ width: "99%", backgroundColor: "transparent" }}
      >
        <Grid
          container
          item
          xs={12}
          md={12}
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: "0", margin: "0" }}
        >
          <Grid
            container
            item
            xs={6}
            sm={1}
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Tooltip title="Menú">
              <div className="Grid-MenuButton-Header">
                <Button
                  className="buttonMenuBurger"
                  onClick={() => onDrawerToggle()}
                >
                  <NotesIcon />
                </Button>
              </div>
            </Tooltip>
          </Grid>
          <Grid
            container
            item
            xs={12}
            sm={11}
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Grid item container xs={12} sm={12}>
              <Hidden smUp>
                <Backdrop open={openDial} />
                <Grid item xs={12}>
                  <StyledSpeedDial
                    className="ButtonColorGenericoHeaderProfileMovil"
                    ariaLabel="SpeedDial tooltip example"
                    sx={{ top: "1%", bottom: 1, right: "10%" }}
                    icon={
                      <>
                        <Badge
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "left",
                          }}
                          badgeContent={cnotif}
                          max={10}
                          color="primary"
                        ></Badge>
                        <Button
                          className="ButtonColorGenericoHeaderProfileMovil"
                          ref={anchorRef}
                          aria-controls={open ? "composition-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleToggle("left-start")}
                          sx={{
                            width: "3.9rem",
                            height: "3.9rem",
                            fontSize: btnPerson,
                            p: 0.1,
                          }}
                        >
                          {/* <img
                            className="LogoMenu"
                            style={{
                              objectFit: "scale-down",
                              width: "60%",
                              height: "1000%",
                            }}
                            src={logoNL}
                          /> */}
                        </Button>
                      </>
                    }
                    onClose={handleCloseDial}
                    onOpen={handleOpenDial}
                    open={openDial}
                    direction={"down"}
                  >
                    {actions.map((action) => (
                      <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        tooltipOpen
                        onClick={handleClose}
                      />
                    ))}
                  </StyledSpeedDial>
                </Grid>
              </Hidden>
            </Grid>

            <Hidden smDown>
              <Grid
                container
                item
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                xs={12}
                sm={10}
                md={8}
                xl={8}
              >
                <Grid item paddingRight={2}>
                  <Grid
                    container
                    direction="column"
                    justifyContent="flex-end"
                    alignItems="center"
                  >
                    <Grid
                      container
                      justifyContent="flex-end"
                      alignItems="center"
                    >
                      <Typography variant="body2" color={"#000000"}>
                        Adolfo Angel Garcia
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Tooltip title="Haz click para ver más">
                    <Button
                      aria-controls={open ? "composition-menu" : undefined}
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleToggle("left")}
                    >
                      <Avatar sx={{ width: 56, height: 56 }}>
                        <PersonIcon
                          sx={{
                            width: "100%", // Ajusta el ancho al 100% para llenar el Avatar
                            height: "100%", // Ajusta el alto al 100% para llenar el Avatar
                          }}
                        />
                      </Avatar>
                    </Button>
                  </Tooltip>
                </Grid>
                <Popper
                  open={open}
                  role={undefined}
                  placement={placement}
                  anchorEl={anchorEl}
                  transition
                  disablePortal
                >
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="composition-menu"
                            aria-labelledby="composition-button"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={onConfigProfile}>
                              <IconButton onClick={onConfigProfile}>
                                <ManageAccountsIcon className="IconoDentroBoton" />
                              </IconButton>
                              Configuración de perfil
                            </MenuItem>
                            <MenuItem onClick={onNotification}>
                              <Badge
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "left",
                                }}
                                badgeContent={cnotif}
                                max={10}
                                color="primary"
                              >
                                <IconButton onClick={onNotification}>
                                  <NotificationsNoneIcon className="IconoDentroBoton" />
                                </IconButton>
                                Mi Buzón
                              </Badge>
                            </MenuItem>
                            <MenuItem onClick={onOpenCalendar}>
                              <IconButton onClick={onOpenCalendar}>
                                <CalendarMonthIcon className="IconoDentroBoton" />
                              </IconButton>{" "}
                              Calendario
                            </MenuItem>

                            <MenuItem onClick={onLogOut}>
                              <IconButton onClick={onLogOut}>
                                <LogoutIcon className="IconoDentroBoton" />
                              </IconButton>{" "}
                              Cerrar sesión
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </AppBar>
    </React.Fragment>
  );
}
