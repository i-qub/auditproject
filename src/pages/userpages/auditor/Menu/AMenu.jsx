import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from '@mui/icons-material/Person';
import { isAuthenticated } from "../../../../utils/auth";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import "./AMenu.css";
//import { isAuthenticated, getUser } from "D:\INTERN\CouCou-Admin-Panel-dev latest\CouCou-Admin-Panel-dev\CouCou-Admin-Panel-dev\src\utils\auth.js";
import GroupsIcon from '@mui/icons-material/Groups';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupWorkIcon from '@mui/icons-material/GroupWork';



//import Logo from '../../assets/favicon.png'
const AMenu = () => {
  const userToken = JSON.parse(localStorage.getItem('user'))?.token;
  const username = JSON.parse(localStorage.getItem('user'))?.username;
  const dept = JSON.parse(localStorage.getItem('user'))?.dept;

  console.log('23',userToken);
  console.log('24',username);
  console.log('26',dept);

  const history = useHistory();

  return (
    <div className="feed-menu">
      {/* <img
        src={Logo}
        alt=""
        className="logo"
        onClick={() => history.push("/")}
      /> */}
      <p className="logo-text" style={{color:"black"}}>Audit Panel</p>
      <div className="menu-items">
      <div className="items1" style={{padding: "12px", fontWeight : "750", borderradius: "10px", backgroundColor: "#25373f", marginbottom: "1rem"}}>
          <div>
          <p>
              Welcome! {userToken}<br />
              Name - {username}<br />
              Dept. - {dept}
          </p>
          </div>
        </div>
        <Link to="/auditortable" className="menu-item">
        <div className="items">
          <PersonIcon />
          &nbsp;&nbsp;<span>Auditor</span>
        </div>
        </Link>
        
        <Link to="/auditeetable" className="menu-item">
        <div className="items">
          <PersonIcon />
          &nbsp;&nbsp;<span>Auditee</span>
          </div>
        </Link>
        {/* <Link to="/login" className="menu-item">
        <div className="items">
        <LogoutIcon />
          &nbsp;&nbsp;<span>Logout</span>
          </div>
        </Link> */}
        {/* <Link to="/posts" className="menu-item">
          <ExploreIcon />
          &nbsp;&nbsp;<span>Posts</span>
        </Link>
        <Link to="/explore" className="menu-item">
          <ExploreIcon />
          &nbsp;&nbsp;<span>Category</span>
        </Link>
        <Link to="/Orders" className="menu-item">
          <Diversity3Icon />
          &nbsp;&nbsp;<span>Order Details</span>
        </Link> */}
        
        {isAuthenticated() && (
          <>
              <div
                className="items"
                onClick={() => {
                  localStorage.removeItem("user");
                  if (history.location.pathname === "/") {
                    window.location.reload();
                  } else {
                    history.push("/login");
                  }
                }}
              >
                <LogoutIcon />
                &nbsp;&nbsp;<span>Logout</span>
              </div>
          </>
      )
    }
</div>
    </div>
  );
}

export default AMenu;
