// import './../Payroll_widget/'
import './wid.css';
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { ArrowUpward } from '@mui/icons-material';

export default function Widgets(){
  return(
      <div className="featured">
        <div className="featuredItem">
          <span className="featuredTitle">New Faculty</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">12</span>
              <span className="featuredMoneyRatePos">+10.2%<ArrowUpward/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Revenue</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$461,020</span>
              <span className="featuredMoneyRateNeg">-2.0%<ArrowDownwardIcon/></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>

        <div className="featuredItem">
          <span className="featuredTitle">Expenditures</span>
          <div className="featuredMoneyContainer">
              <span className="featuredMoney">$183,441</span>
              <span className="featuredMoneyRatePos">+1.2%<ArrowUpward /></span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>

      </div>
  );
}