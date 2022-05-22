import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '450px',
    height: '600px',
    maxHeight: '600px',
    align: 'left',
    position: 'relative'

  },


  title: {
    padding: '0 16px',
   color: '#9B3FF3',
   textAlign:'center',
   fontFamily: 'Ultra, sans-serif' ,
   textTransform: 'uppercase',
   textShadow: '0 2px white, 0 3px #777'
  },

tagss:
{
  paddingTop:'5px',
  paddingBottom: '5px',
  textAlign:'center',
  color: '#BEB6C9'

},

mess:
{
  padding:'10px',
  paddingLeft: '20px',
  color: '#1B1523',
  display: 'flex'
},

creator:
{
  padding:'5px',
 textAlign: 'right',
  color: '#9B3FF3'
  
},

esc:
{
  padding:'0px',
 msImeAlign: 'left',
 background: 'none',
 border: 'none'
},

  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
    paddingLeft: '0px',
    position: 'relative',
    align: 'right'
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));
