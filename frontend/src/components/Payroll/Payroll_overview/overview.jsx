import React from 'react'
import  Style from './../Payroll_overview/overview.css'
import ReactApexChart from 'react-apexcharts'
import Widgets from './../Payroll_widget/Widgets'

const series= [{
    name: 'Expenses 2021',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Expenses 2022',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];
  const options= {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
  
  
  const series1= [{
    name: 'Members 2021',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'Members 2022',
    data: [11, 32, 45, 32, 34, 52, 41]
  }];
  const options1= {
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm'
      },
    },
  };
  

export default function Overview(){
  return(

    <div className="other">
    <div className="dashWidgets">
    <h2>Quick Overview</h2>
      <Widgets/>
    </div>
    <br/>

    

    <div className={Style.section}>
      <div className={Style.col1}>
        <h2>Expenditure Overview</h2>
        <ReactApexChart options={options} series={series} type="area" height={350} />
      </div>
      <div className={Style.col2}>
        <h2>New Employees</h2>
        <ReactApexChart options={options1} series={series1} type="bar" height={350} />
      </div>
    </div>

    </div>
  );
}