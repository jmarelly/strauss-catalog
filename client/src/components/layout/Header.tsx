import { Link, useNavigate } from 'react-router-dom';
import {
  Toolbar,
  Typography,
  Button,
  Box,
  Chip,
} from '@mui/material';
import {
  ShoppingBag,
  Login as LoginIcon,
  Logout as LogoutIcon,
  Settings,
} from '@mui/icons-material';
import { useAuth } from '../../hooks/useAuth';
import { StyledAppBar, Logo } from './Header.styles';

export function Header() {
  const { user, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <StyledAppBar position="sticky" elevation={0}>
      <Toolbar sx={{ maxWidth: 1400, width: '100%', mx: 'auto', px: 3 }}>
        <Logo to="/">
          <ShoppingBag sx={{ color: 'primary.main' }} />
          <Typography variant="h6" fontWeight={700}>
            Strauss
          </Typography>
        </Logo>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {user ? (
            <>
              <Chip
                label={user.username}
                size="small"
                sx={{ bgcolor: 'background.paper' }}
              />
              {isAdmin && (
                <Button
                  component={Link}
                  to="/admin"
                  color="inherit"
                  startIcon={<Settings />}
                  size="small"
                >
                  Admin
                </Button>
              )}
              <Button
                onClick={handleLogout}
                color="inherit"
                startIcon={<LogoutIcon />}
                size="small"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              startIcon={<LoginIcon />}
              size="small"
            >
              Admin Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}

