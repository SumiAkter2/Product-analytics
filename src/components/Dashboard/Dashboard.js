import React from 'react';
import AnglePieChart from '../AnglePieChart/AnglePieChart';
import BarChart from '../BarChart/BarChart';
import './Dashboard.css'
import SimpleLineChart from '../SimpleLineChart/SimpleLineChart';
import TooltipChart from '../TooltipChart/TooltipChart';

const Dashboard = () => {
    return (
        <div>
            <div className='chart'>
                <SimpleLineChart></SimpleLineChart> 
                <BarChart></BarChart>
               
          </div>
          <div  className='chart'>
         
            <TooltipChart></TooltipChart>
            <AnglePieChart></AnglePieChart>
          </div>
           
        </div>
    );
};

export default Dashboard;