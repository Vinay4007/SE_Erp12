import React from 'react'


import { Home } from "./Home";
import { Confirmation } from "./Confirmation";
import { Login } from "./Login";
import { PageNotFound } from "./PageNotFound";
import { Profile } from "./content-components/Profile";

import { BalanceSheetGen } from "./content-components/BalanceSheetGen";
import { IncomeSheetGen } from "./content-components/IncomeSheetGen";

// import { Ledgers } from "./content-components/Ledgers";
import { MISReports } from "./content-components/MISReports";
import HEFARequest  from "./content-components/HEFARequest";
import { EMDShowCase } from "./content-components/EMDShowCase";
import { LetterOfCredit } from "./content-components/LetterOfCredit";

import { AdHocPayr } from "./content-components/AdHocPayr";
import { earningData } from "./content-components/StaffPayr";
import { FacultyPayr } from "./content-components/FacultyPayr";

import { HostelCheckIn } from "./content-components/HostelCheckIn";
import { HostelCheckOut } from "./content-components/HostelCheckOut";
import { HostelFeeChallan } from "./content-components/HostelFeeChallan";
import { FeeManagement } from "./content-components/FeeManagement";
import { PaymentPortal } from "./content-components/PaymentPortal";

import { ContentHome } from "./content-components/ContentHome";

import { Route, useLocation, Routes } from "react-router-dom";
import BudgetCalculator from "./content-components/Budget";
import Overview from "./Payroll/Payroll_overview/overview";
import { UserList } from "./Payroll/Payroll_side_comp/UserList";
import User from "./Payroll/Payroll_side_comp/User";
import Dashboard from "./Payroll/Payroll_dash";

import {AuthRoute} from "./utils/AuthRoute"

import { AnimatePresence } from "framer-motion/dist/framer-motion";
const Ledgers = React.lazy(() => import("./content-components/Ledgers"))

export function AnimatedRoutes() {

  const location = useLocation();

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Home />} exact strict />

          <Route path="/home" element={<Home />} exact strict>
            <Route path="financial-reports" exact strict>
              <Route index path="balance-sheet-gen" element={<BalanceSheetGen />} exact strict />
              <Route path="income-sheet-gen" element={<IncomeSheetGen />} exact strict />
              <Route path="budget" element={<BudgetCalculator />} exact strict />
            </Route>

            <Route exact strict path="transaction-management">
              <Route exact strict path="ledger" element={<Ledgers />} />
              <Route exact strict path="mis-reports" element={<MISReports />} />
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
                <Route exact strict path="staff" element={<UserList />} />
                <Route exact strict path="adhoc" element={<UserList />} />
                <Route exact strict path="members/:userId" element={<User />} />
              </Route>
              <Route exact strict path="payroll-staff" element={<earningData />} />
              <Route exact strict path="payroll-adhoc" element={<AdHocPayr />} />
            </Route>

            <Route exact strict path="students-portal">
              <Route exact strict index path="hostel-feechallan" element={<HostelFeeChallan />} />
              <Route exact strict path="hostel-checkout" element={<HostelCheckOut />} />
              <Route exact strict path="hostel-checkin" element={<HostelCheckIn />} />
              <Route exact strict path="payment-portal" element={<PaymentPortal />} />
              <Route exact strict path="fee-management" element={<FeeManagement />} />
            </Route>

            <Route exact strict index element={<ContentHome />} />
            <Route exact strict path="content-home" element={<ContentHome />} />
            <Route exact strict path="profile" element={<Profile />} />
          </Route>

          <Route exact strict path="/confirmation/:details" element={<Confirmation />} />
          <Route exact strict path="/login" element={<Login />}>
          </Route>

          <Route exact strict path="*" element={<PageNotFound />} />

        </Routes>
      </AnimatePresence>
    </>
  )
}
