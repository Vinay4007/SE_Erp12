import React, { useState } from 'react'
import { MenuItem } from './utils/MenuItem'

import Style from "./modules/Menubar.module.css"
import { MenuContentItem, Menu } from "./utils/Essential-Funcs"

const menu1= new Menu("FinancialReports",
       [new MenuContentItem("/home/financial-reports/balance-sheet-gen","BalanceSheetGen"),
       new MenuContentItem("/home/financial-reports/income-sheet-gen","IncomeSheetGen"),
       new MenuContentItem("/home/financial-reports/budget","Budget")
       ]);

const menu2= new Menu("TransactionManagement", 
           [new MenuContentItem("/home/transaction-management/ledger", "Ledgers"),
            new MenuContentItem("/home/transaction-management/mis-reports", "MISReports"),
            new MenuContentItem("/home/transaction-management/hefa-manage", "HEFARequest"),
            new MenuContentItem("/home/transaction-management/letter-of-credit", "LetterOfCredit"),
            new MenuContentItem("/home/transaction-management/emd-showcase", "EMDShowCase")
          ]);

const menu3= new Menu("Faculty", 
   [new MenuContentItem("/home/faculty/payroll-faculty", "FacultyPayroll")])

    // new MenuContentItem("/home/faculty/payroll-staff", "StaffPayroll"),
    // new MenuContentItem("/home/faculty/payroll-adhoc", "AdHocPayroll")

const menu4= new Menu("StudentPortal", 
[new MenuContentItem("/home/students-portal/hostel-feechallan", "HostelFeeChallan"),
new MenuContentItem("/home/students-portal/hostel-checkout", "HostelCheckOut"),
new MenuContentItem("/home/students-portal/hostel-checkin","HostelCheckIn"),
new MenuContentItem("/home/students-portal/payment-portal","PaymentPortal")
])

//new MenuContentItem("/home/students-portal/fee-management", "FeeManagement")


export function Menubar(_props) {

  return (
    <>
      <div className={Style.menuitem}>
        <MenuItem menu={menu1} id="Menu1"/>
      </div>
      <div className={Style.menuitem}>
        <MenuItem menu={menu2} id="Menu2"/>
      </div>
      <div className={Style.menuitem}>
        <MenuItem menu={menu3} id="Menu3"/>
      </div>
      <div className={Style.menuitem}>
        <MenuItem menu={menu4} id="Menu4"/>
      </div>
      </>
  )
}
