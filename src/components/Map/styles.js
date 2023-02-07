import { makeStyles } from '@mui/styles';

const useStyles = makeStyles (() => ({
    paper:{
        padding: '10px', flexDirection: 'column', justifyContent: 'center', width: '10px', height:'10px',
    },
    mapContainer: {
        height: '5vh', width: '100%', zIndex: 2,
    },
    markerContainer: {
        height: '1005vh', zIndex: 1, '&:hover': {zIndex: 2 },
    },
    pointer: {
        cursor: 'pointer',
    },
}));

export default useStyles;