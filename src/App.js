import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import Login from "./pages/Login/Login";
import Feed from "./pages/Feed/Feed";
import FeedDashboard from "./pages/FeedDashboad/FeedDashboard";
import Profile from "./pages/Profile/Profile";
import SingleProject from "./pages/SingleProject/ProjectWithComments";
import Create from "./pages/Create/Create";
import Edit from "./pages/Edit/Edit";
import ExploreAll from "./pages/ExploreAll/ExploreAll";
import Users from "./pages/Users/Users.jsx";
import Posts from "./pages/Posts/Posts.jsx";
import Track from "./pages/Track/Track.jsx"
import AuditorTable from "./pages/userpages/auditor/pages/Auditortable";
import AuditeeTable from "./pages/userpages/auditor/pages/Auditeetable";
import  Auditor from "../src/pages/userpages/auditor/auditor";
import  Auditee from "../src/pages/userpages/auditee/auditee";
import FileUploadModal from "./pages/userpages/auditor/pages/FileUploadModal ";
import Verifyusers from "./pages/userpages/auditor/pages/usersverification";
import RaiseNC from "./components/Modal/raiseNC";
import ViewNC from "./components/Modal/viewNC";
import ViewAuditeeNC from "./components/Modal/viewAuditeeNC";
import ViewAdminNC from "./components/Modal/viewAdminNC";
import ViewNC_Aud from "./pages/userpages/auditor/pages/viewNC_AUD";
import UploadAuditEvidence from "./components/Modal/UploadAuditEvidence";
import UploadAuditEvidenceAud from "./pages/userpages/auditor/pages/uploadAuditEvidenceAud";
import UploadEvidence from "./components/Modal/uploadEvidence";
import ViewEvidence from "./components/Modal/viewEvidence";
import ViewAuditEvidence from "./components/Modal/viewAuditEvidences";
import ViewAuditEvidenceAud from "./pages/userpages/auditor/pages/viewAuditEvidence";
import UploadEvidenceAud from "./pages/userpages/auditor/pages/uploadEvidenceAud";
import ViewEvidenceAud from "./pages/userpages/auditor/pages/viewEvidenceAud";
import ViewAuditeeNC_Aud from "./pages/userpages/auditor/pages/viewAuditeeNC";
import ViewAdminNC_Aud from "./pages/userpages/auditor/pages/viewAdminNC";
import UploadAuditeeNC_Aud from "./pages/userpages/auditor/pages/uploadAuditeeNCAud";
import UploadAdminNC from "./components/Modal/uploadAdminNC";
import UploadAuditeeNC from "./components/Modal/uploadAuditeeNC";
// import Orders from "./pages/Orders/OrderDetails";
import Order from "./pages/Order/Order.jsx"
import Clients from "./pages/Clients/Clients";
import Saved from "./pages/Saved/Saved";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ViewAllUsers from "./components/ViewAllUsers/ViewAllUsers";
import EditCategoriesModal from "./components/Modal/EditCategoriesModal";

import UserModal from "./components/Modal/UserModal";
import ViewAuditDetails from "./components/Modal/viewAuditDetails";
import ViewAuditDetailsAud from "./pages/userpages/auditor/pages/viewAuditDetailsAud";

import CloseNC from "./components/Modal/CloseNC";

import UserDetails from "./components/Modal/UserDetails"
import AddAudit from "./components/Modal/addAudit";                                                           
import EditPostModal from "./components/Modal/EditPostModal";
import AddnewChecklist from "./pages/addnewchecklist/addnewChecklist";
import DisplayPostModal from "./components/Modal/DisplayPostModal";
import DisplayOrderModal from "./components/Modal/DisplayOrderModal";
import DisplayUserModal from "./components/Modal/DisplayUserModal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { isAuthenticated } from "./utils/auth";

function App() {
  return (
    <Router>
      <ToastContainer />
      
      <Switch>
        <Route path="/signup">
          {isAuthenticated() ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route path="/forgetpassword">
          {isAuthenticated() ? <Redirect to="/" /> : <ForgetPassword />}
        </Route>
        <Route path="/login">
          {isAuthenticated() ? <Redirect to="/" /> : <Login />}
        </Route>
        
        <PrivateRoute path="/profile/:username" component={Profile} />
        <PrivateRoute path="/projects/:id" component={SingleProject} />
        <PrivateRoute path="/create" component={Create} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <PrivateRoute path="/explore" component={ExploreAll} />
        <PrivateRoute path="/users" component={Users} />
        <PrivateRoute path="/posts" component={Posts} />
        <PrivateRoute path="/track" component={Track} />
        <PrivateRoute path="/auditor" component={Auditor} />
        <PrivateRoute path="/auditortable" component={AuditorTable} />
        <PrivateRoute path="/auditeetable" component={AuditeeTable} />
        <PrivateRoute path="/addnewChecklist" component={AddnewChecklist} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}

        <PrivateRoute path="/uploadAudit/:id" component={FileUploadModal} />
        <PrivateRoute path="/user/verification" component={Verifyusers} />
        <PrivateRoute path="/userdetails/:id" component={UserDetails} />
        <PrivateRoute path="/raise/nc/:id" component={RaiseNC} />
        <PrivateRoute path="/uploadAuditeeNCaud/:id" component={UploadAuditeeNC_Aud} />
        <PrivateRoute path="/uploadAuditeeNC/:id" component={UploadAuditeeNC} />
        <PrivateRoute path="/uploadAdminNC/:id" component={UploadAdminNC} />

        <PrivateRoute path="/viewnc/:id" component={ViewNC} />
        <PrivateRoute path="/viewAuditeeNC/:id" component={ViewAuditeeNC} />
        <PrivateRoute path="/viewAdminNC/:id" component={ViewAdminNC} />

        <PrivateRoute path="/closeNC/:id" component={CloseNC} />

        <PrivateRoute path="/view/ncaud/:id" component={ViewNC_Aud} />
        <PrivateRoute path="/viewAuditeeNCataud/:id" component={ViewAuditeeNC_Aud} />
        <PrivateRoute path="/viewAdminNCataud/:id" component={ViewAdminNC_Aud} />

        <PrivateRoute path="/uploadauditEvidence/:id" component={UploadAuditEvidence} />
        <PrivateRoute path="/uploadauditEvidenceAud/:id" component={UploadAuditEvidenceAud} />

        <PrivateRoute path="/uploadEvidence/:id" component={UploadEvidence} />
        <PrivateRoute path="/viewEvidence/:id" component={ViewEvidence} />
        <PrivateRoute path="/viewAuditEvidence/:id" component={ViewAuditEvidence} />
        <PrivateRoute path="/viewAuditEvidenceAud/:id" component={ViewAuditEvidenceAud} />

        <PrivateRoute path="/uploadEvidenceAud/:id" component={UploadEvidenceAud} />
        <PrivateRoute path="/viewEvidenceAud/:id" component={ViewEvidenceAud} />



        {/* <PrivateRoute path="/auditee" component={Auditee} /> */}
  
        {/* <PrivateRoute path="/order" component={Orders} /> */}
        <PrivateRoute path="/Orders" component={Order} />
        <PrivateRoute path="/clients" component={Clients} />
        <PrivateRoute path="/saved" component={Saved} />
        <PrivateRoute exact path="/" component={Feed} />
        <PrivateRoute exact path="/dashboard" component={FeedDashboard} />
        <PrivateRoute exact path="/category/edit/:id" component={EditCategoriesModal}/>
        <PrivateRoute exact path="/category/delete/:id" component={EditCategoriesModal}/>
        <PrivateRoute exact path="/auditdetails/:id" component={UserModal}/>
        <PrivateRoute exact path="/viewauditdetails/:id" component={ViewAuditDetails}/>
        <PrivateRoute exact path="/viewauditdetailsaud/:id" component={ViewAuditDetailsAud}/>

        <PrivateRoute exact path="/addAudit" component={AddAudit}/>
        <PrivateRoute exact path="/post/update/:id" component={EditPostModal}/>
        <PrivateRoute exact path="/user/display/:id" component={DisplayUserModal}/>
        <PrivateRoute exact path="/post/display/:id" component={DisplayPostModal}/>
        <PrivateRoute exact path="/order/display/:id" component={DisplayOrderModal}/>
        <PrivateRoute path="/active-users" component={ViewAllUsers} />
        <Route path="*">
          <PageNotFound />  
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
