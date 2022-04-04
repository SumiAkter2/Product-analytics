import React from 'react';
import { Pie, PieChart } from 'recharts';

const AnglePieChart = () => {
    const data = [
        { month: 'Mar', investment: 700000},
        { month: 'Apr', investment: 200000 },
        { month: 'May', investment: 400000},
        { month: 'Jun', investment: 500000 },
        { month: 'Jul', investment: 600000 },
        { month: 'Aug', investment: 800000 },
      ];
      
    return (
        <div>
             {/* responsiveContainer width="100%" height="100%"> */}
        <PieChart width={400} height={400} >
          <Pie
    
            dataKey="investment"
            startAngle={360}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
      {/* </ResponsiveContainer> */}
        </div>
    );
};

export default AnglePieChart;