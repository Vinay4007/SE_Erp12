import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Home";
import { HomeContent } from "./HomeContent";
import { AnimatePresence } from "framer-motion/dist/framer-motion";
import { FMHome } from "./components/FMHome";
import { ACHome } from "./components/ACHome";

import { BalanceSheetGen } from "./components/content-components/BalanceSheetGen";
import { IncomeSheetGen } from "./components/content-components/IncomeSheetGen";
import BudgetCalculator from "./components/content-components/Budget";

import Ledgers from "./components/content-components/Ledgers";
import { MISReports } from "./components/content-components/MISReports";
import HEFARequest from "./components/content-components/HEFARequest";
import { LetterOfCredit } from "./components/content-components/LetterOfCredit";

import { EMDShowCase } from "./components/content-components/EMDShowCase";
import { FacultyPayr } from "./components/content-components/FacultyPayr";

import Overview from "./components/Payroll/Payroll_overview/overview";
import { UserList } from "./components/Payroll/Payroll_side_comp/UserList";
import Dashboard from "./components/Payroll/Payroll_dash";
import User from "./components/Payroll/Payroll_side_comp/User";
import { AdHocPayr } from "./components/content-components/AdHocPayr";

import { HostelFeeChallan } from "./components/content-components/HostelFeeChallan";
import { HostelCheckOut } from "./components/content-components/HostelCheckOut";
import { HostelCheckIn } from "./components/content-components/HostelCheckIn";
import { PaymentPortal } from "./components/content-components/PaymentPortal";
import { FeeManagement } from "./components/content-components/FeeManagement";

import { ContentHome } from "./components/content-components/ContentHome";
import { Profile } from "./components/content-components/Profile";
import { Confirmation } from "./components/Confirmation";
import { PageNotFound } from "./components/PageNotFound";

import {Logins} from "./components/HomePages/Logins"

import { earningData } from "./components/content-components/StaffPayr";

import HomeAC from "./components/HomePages/Home";
import Gl from "./components/Others/Gl";
import Ha from "./components/Others/Ha";
import Others from "./components/Admin/Others/Others";
import Mess1 from "./components/Mess/Mess1";
import FEEDBACK from "./components/Mess/Messfeedback";

import Sp from "./components/Student/Sp";
import Curp from "./components/Others/Curp";

import Eal from "./components/Employee/Eal";
import Lohis from "./components/Employee/Lohis";
import Newadvance from "./components/Employee/Newadvance";
import NewLo from "./components/Employee/Newlo";

import CulEx from "./components/Others/Culex";
import Pk from "./components/Others/Pk";

import PayCul from "./components/Transactionstatus/paycul";

import DownloadReceipt from "./components/Others/DownloadReceipt";
import Budget from "./components/Admin/Budget/Budget";
import contact from "./components/Others/contact";
import Applyforloan from "./components/Others/Applyforloan";

import Login from "./components/Student/login";
import About from "./components/Others/about";
// import Errorpage from './components/Errorpage';

import Payments1 from "./components/Transactions/Payments1";
import Payments2 from "./components/Mess/payments2";
import Payments3 from "./components/Transactions/Payments3";

import Compr from "./components/Transactionstatus/Compr";
import CHECKSTAT from "./components/Transactionstatus/checkstaths";
import CHECKSTAT1 from "./components/Transactionstatus/checkstat1";

import Cultural from "./components/Admin/Student/Cultural/Cultural";

import Request from "./components/Admin/Cultural/Request";
import Scholar from "./components/Admin/Scholarship/scholar";
import SendReceipt from "./components/Admin/Scholarship/recscho";

import Budgets from "./components/Admin/Budget/budget1";
import Csb from "./components/Admin/Budget/Budgets/csbud";
import Eeb from "./components/Admin/Budget/Budgets/eebud";
import Meb from "./components/Admin/Budget/Budgets/mebud";
import Chb from "./components/Admin/Budget/Budgets/chbud";
import Ceb from "./components/Admin/Budget/Budgets/cebud";

import Studentadmin from "./components/Admin/Student/AdminStudent";
import Filling1 from "./components/Admin/Student/Adminsidestututfee";
import Filling2 from "./components/Admin/Student/Adminsidestuhosfee";
import AddStu from "./components/Admin/Student/addstu";

import Facultyadmin from "./components/Admin/Faculty/FacultyAdmin";

import NewFund from "./components/Employee/SponsoredProjects/fundrequest";

import AddFac from "./components/Admin/Faculty/AddFaculty";
import Login1 from "./components/Employee/Facultylogin";
import Signup2 from "./components/Admin/Adminsignuplogin/Adminsignup";
import Login2 from "./components/Admin/Adminsignuplogin/adminlogin";
import Home1 from "./components/HomePages/Home1";
import Home2 from "./components/HomePages/Home2";
import Team from "./components/Others/Team";

import QrA from "./components/QRCODES/QrA";
import QrH from "./components/QRCODES/QrH";
import QrM from "./components/QRCODES/QrM";

import TDSDETAILS from "./components/Admin/TDSDETAILS/Tdsdetails";
import SendTDS from "./components/Admin/TDSDETAILS/SendTDS";

export function AnimatedRoutes() {
    const location = useLocation();

    return (
        <React.Fragment>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />}>

                        <Route index element={<HomeContent />} />
                        <Route path="finanmg" element={<FMHome />}>
                            <Route index element={<ContentHome />} exact strict />

                            <Route path="home" exact strict>
                                <Route path="financial-reports" exact strict>
                                    <Route index element={<BalanceSheetGen />} exact strict />
                                    <Route path="balance-sheet-gen" element={<BalanceSheetGen />} exact strict />
                                    <Route path="income-sheet-gen" element={<IncomeSheetGen />} exact strict />
                                    <Route path="budget" element={<BudgetCalculator />} exact strict />
                                </Route>

                                <Route exact strict path="transaction-management" >
                                    <Route exact strict path="ledger" element={<Ledgers />} />
                                    <Route exact strict path="mis-reports" element={<MISReports />} />
                                    <Route index exact strict element={<HEFARequest />} />
                                    <Route exact strict path="hefa-manage" element={<HEFARequest />} />
                                    <Route exact strict path="letter-of-credit" element={<LetterOfCredit />} />
                                    <Route exact strict path="emd-showcase" element={<EMDShowCase />} />
                                </Route>

                                <Route exact strict path="faculty">
                                    <Route exact strict path="payroll-faculty" element={<FacultyPayr />} >
                                        <Route exact strict index element={<Overview />} />
                                        <Route exact strict path="overview" element={<Overview />} />
                                        <Route exact strict path="members" element={<UserList />} />
                                        <Route exact strict path="faculty" element={<Dashboard />} />
                                        <Route exact strict path="staff" element={<UserList />}/>
                                        <Route exact strict path="adhoc" element={<UserList />} />
                                        <Route exact strict path="members/:userId" element={<User />} />
                                    </Route>
                                    <Route exact strict path="payroll-staff" element={<earningData />} />
                                    <Route exact strict path="payroll-adhoc" element={<AdHocPayr />} />
                                </Route>

                                <Route exact strict path="students-portal">
                                    <Route exact strict index element={<HostelFeeChallan />} />
                                    <Route exact strict path="hostel-feechallan" element={<HostelFeeChallan />} />
                                    <Route exact strict path="hostel-checkout" element={<HostelCheckOut />} />
                                    <Route exact strict path="hostel-checkin" element={<HostelCheckIn />} />
                                    <Route exact strict path="payment-portal" element={<PaymentPortal />} />
                                    <Route exact strict path="fee-management" element={<FeeManagement />} />
                                </Route>

                                <Route exact strict index element={<ContentHome />} />
                                <Route exact strict path="content-home" element={<ContentHome />} />
                                <Route exact strict path="profile" element={<Profile />} />
                            </Route>

                            <Route exact strict path="confirmation/:details" element={<Confirmation />} />

                            <Route exact strict path="*" element={<PageNotFound />} />
                        </Route>
                        <Route path="accountsmg" element={<ACHome />}>
          <Route index exact  strict element={<Logins />} />
          <Route exact strict path="logins" element={<Logins />} />

<Route path = "home" element={<HomeAC/>} />
<Route path="login" element={ <Login />} />
{/* <Route path="/home" component={Home} /> */}

<Route path="addfac" element={ <AddFac />} />
<Route path="login1" element={ <Login1 />} />
<Route path="home1" element={ <Home1/>} />

<Route path="signup2" element={<Signup2/>} />
<Route path="login2" element={<Login2/>} />
<Route path="home2" element={<Home2/>} />

<Route path="about" element={<About/>} />


<Route path="transactions" element={<Gl/>} />
<Route path="ha" element={<Ha/>} />
<Route path="others" element={<Others/>} />

<Route path="sp" element={<Sp/>} />
<Route path="compr" element={<Compr/>} />
<Route path="curp" element={<Curp/>} />

<Route path="eal" element={<Eal/>} />
<Route path="lh" element={<Lohis/>} />
<Route path="newloan" element={<NewLo/>} />

<Route path="ce" element={<CulEx/>} />
<Route path="pk" element={<Pk/>} />

<Route path="downreceipt"element={<DownloadReceipt/>} />
<Route path="budget" element={<Budget/>} />
<Route path="cont" element={<contact/>} />
<Route path="applyforloan" element={<Applyforloan/>} />

<Route path="pay1" element={<Payments1/>} />
<Route path="pay2" element={<Payments2/>} />
<Route path="pay3" element={<Payments3/>} />
<Route path="chs" element={<CHECKSTAT/>} />
<Route path="chs1" element={<CHECKSTAT1/>} />
<Route path="adv" element={<Newadvance/>} />
<Route path="cultural" element={<Cultural/>} />

<Route path="request" element={<Request/>} />
<Route path="paycul" element={<PayCul/>} />
<Route path="scholar" element={<Scholar/>} />
<Route path="sendreceipt" element={<SendReceipt/>} />

<Route path="dpb" element={<Budgets/>} />
<Route path="csbud" element={<Csb/>} />
<Route path="eebud" element={<Eeb/>} />
<Route path="mebud" element={<Meb/>} />
<Route path="chbud" element={<Chb/>} />
<Route path="cebud" element={<Ceb/>} />

<Route path="mess1" element={<Mess1/>} />
<Route path="feedback"element={<FEEDBACK/>} />
<Route path="fund" element={<NewFund/>} />
<Route path="team" element={<Team/>} />

<Route path="qra" element={<QrA/>} />
<Route path="qrh" element={<QrH/>} />
<Route path="qrm" element={<QrM/>} />

<Route path="stud" element={<Studentadmin/>} />
<Route path="stuadm1" element={<Filling1/>} />
<Route path="stuadm2" element={<Filling2/>} />
<Route path="addStu" element={<AddStu/>} />

<Route path="facul" element={<Facultyadmin/>} />
{/* <Route path="/facadm1" component={Facultyadmin} />
<Route path="/facadm2" component={Facultyadmin} /> */}

<Route path="tds" element={<TDSDETAILS/>} />
<Route path="mailtds" element={<SendTDS/>} />
{/* <Route path="/bsg" component={BalanceSheetGen} /> */}
                        </Route>
                    </Route>
                </Routes>
            </AnimatePresence>
        </React.Fragment>
    );
}
