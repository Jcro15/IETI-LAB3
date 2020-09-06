import React from 'react';
import clsx from 'clsx';
import { withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import { Redirect } from 'react-router-dom';



const drawerWidth = 240;

const useStyles =theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
});

class DrawerLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state={open : false, redirect:false}
        this.handleDrawer=this.handleDrawer.bind(this)
    }



    render(){
        const { classes } = this.props;
        if(this.state.redirect){
          return<Redirect to={'/userprofile'} />
      } 
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: this.state.open,
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={()=> this.handleDrawer()}
                  edge="start"
                  className={clsx(classes.menuButton, this.state.open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                   To Do App
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={this.state.open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={()=>this.handleDrawer()}>
                  {this.props.theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon fontSize="large"/>
                    <ListItemText primary={localStorage.getItem("name")} secondary={localStorage.getItem("email")}>
                      </ListItemText> 
                  </ListItemIcon>


                </ListItem>
                
              </List>
              <Divider />

              <List>
              <ListItem button key={"Update"} onClick={()=>{this.setState({redirect:true})}}>
                <ListItemIcon><SettingsApplicationsIcon/> </ListItemIcon>
                <ListItemText primary={"Actualizar datos"} />
              </ListItem>
          </List>

            </Drawer>
            <main
        className={clsx(classes.content, {
          [classes.contentShift]: this.state.open,
        })}
      >
        <div className={classes.drawerHeader} />
        {this.props.main}
      </main>
            </div>
        )



    }
    handleDrawer(e) {
      this.setState({
          open: !this.state.open
      });
  }
}

export default withStyles(useStyles, { withTheme: true })(DrawerLeft);
