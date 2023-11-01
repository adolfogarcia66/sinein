import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Button,
  ClickAwayListener,
  Fade,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  PopperPlacementType,
  Tooltip,
  useMediaQuery,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, useTheme } from "@mui/material/styles";
import { useRef, useState } from "react";

import CheckIcon from "@mui/icons-material/Check";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MultilineChartIcon from "@mui/icons-material/MultilineChart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import WarningIcon from "@mui/icons-material/Warning";
import { useNavigate } from "react-router-dom";
const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

interface Props {
  children?: React.ReactNode;
}

export default function Inicio({ children }: Props) {
  const navigate = useNavigate();

  const anchorRef = useRef<HTMLButtonElement>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [placement, setPlacement] = useState<PopperPlacementType>();

  const [open, setOpen] = useState(false);
  const [openmodal, setopenmodal] = useState(false);

  const onLogOut = () => {
    localStorage.clear();
    navigate("/");
  };

  const onConfigProfile = () => {
    navigate("/perfil");
    setOpen((prevOpen) => !prevOpen);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleToggle =
    (newPlacement: PopperPlacementType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
      setPlacement(newPlacement);
      setopenmodal((prevOpen) => !prevOpen);
    };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setopenmodal(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setopenmodal(false);
    } else if (event.key === "Escape") {
      setopenmodal(false);
    }
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{ backgroundColor: "#F2F3F4" }}
        open={open}
      >
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="info"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="#000000"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            SISTEMA DE INVESTIGACIÓN E INTELIGENCIA
          </Typography>

          <Tooltip title="Haz click para ver más">
            <Button
              aria-controls={openmodal ? "composition-menu" : undefined}
              aria-expanded={openmodal ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle("left")}
            >
              <Avatar sx={{ width: 40, height: 40 }}>
                <PersonIcon
                  sx={{
                    width: "100%", // Ajusta el ancho al 100% para llenar el Avatar
                    height: "100%", // Ajusta el alto al 100% para llenar el Avatar
                  }}
                />
              </Avatar>
            </Button>
          </Tooltip>
          <Popper
            open={openmodal}
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
                      autoFocusItem={openmodal}
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
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon sx={{ ml: "auto" }} />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <ListItemButton onClick={() => navigate("/investigacion")}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="Investigación" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/inteligencia")}>
            <ListItemIcon>
              <ManageAccountsIcon />
            </ListItemIcon>
            <ListItemText primary="Inteligencia" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/analisis")}>
            <ListItemIcon>
              <MultilineChartIcon />
            </ListItemIcon>
            <ListItemText primary="Análisis" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/confianza")}>
            <ListItemIcon>
              <CheckIcon />
            </ListItemIcon>
            <ListItemText primary="Prueba de Confianza" />
          </ListItemButton>
          <ListItemButton onClick={() => navigate("/veritas")}>
            <ListItemIcon>
              <WarningIcon />
            </ListItemIcon>
            <ListItemText primary="Veritas" />
          </ListItemButton>
          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  );
}
