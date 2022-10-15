import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [charts, setCharts] = useState([]);
    useEffect( ()=>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const chartsLoaded = data.data.data;
            const chartData = chartsLoaded.map(chart =>{
                const chartName = chart.name;
                const chartTotal = chart.total;
                const Total = parseInt(chartTotal);
                const singleChart = {
                    name: chartName,
                    total: Total
                }
                return singleChart
            })
            console.log(chartData);
            setCharts(chartData);
        });
    }, [])
    return (
        <div>
            <h2 className='text-center underline text-2xl my-8 font-extrabold underline-offset-4'>Chart of Total Quizzes
            </h2>
            <ResponsiveContainer className='mx-auto' width="80%" aspect={2}>
                <LineChart width={400} height={300} data={charts}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" strokeWidth={2}></Line>
                    <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
                </LineChart>
                </ResponsiveContainer>
        </div>
    );
};

export default Statistics;