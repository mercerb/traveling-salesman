import * as React from 'react';
import logo from './logo.svg';
// import './App.css';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Map from './Map';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Mercer Borris
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function App() {
  const locations = React.useState([]);
  return (
    <Container maxWidth="sm">
      <Box >
        <Typography variant="h4" component="h1" gutterBottom>
          Route Optimization of Multiple Stops (ROoMS)
        </Typography>
        <Copyright />
      </Box>
      <CheckboxList items={locations} />
      <Map />
    </Container>

  );
}



function CheckboxList(items) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {items.map((value) => {
        const labelId = `checkbox-list-label-${value.id}`;

        return (
          <ListItem
            key={value.id}
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(value.id)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value.id) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}