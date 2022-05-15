
import classes from './MainHeader.module.css';
import CelebrationIcon from '@mui/icons-material/Celebration';

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <CelebrationIcon sx={{ fontSize: "50px" }} style={{ color: '#F33A6A' }}/>
      <h1>Raymond & Billie Wedding </h1>
    </header>
  );
};

export default MainHeader;
