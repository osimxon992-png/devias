import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

// O'ngdagi haqiqiy grafikning to'lqinlari va nisbatlari
const chartData = [
  { id: 1, rate: 38 },
  { id: 2, rate: 41 },
  { id: 3, rate: 43 },
  { id: 4, rate: 41 },
  { id: 5, rate: 42 },
  { id: 6, rate: 42 },
  { id: 7, rate: 41 },
  { id: 8, rate: 44 },
  { id: 9, rate: 44 },
  { id: 10, rate: 43 },
  { id: 11, rate: 48 },
  { id: 12, rate: 42 },
  { id: 13, rate: 44 },
  { id: 14, rate: 39 },
  { id: 15, rate: 49 },
  { id: 16, rate: 52 },
  { id: 17, rate: 50 },
  { id: 18, rate: 47 },
  { id: 19, rate: 51 },
  { id: 20, rate: 54 },
  { id: 21, rate: 60 },
  { id: 22, rate: 61 },
  { id: 23, rate: 58 },
  { id: 24, rate: 63 },
  { id: 25, rate: 60 },
  { id: 26, rate: 64 },
  { id: 27, rate: 63 },
  { id: 28, rate: 64 },
  { id: 29, rate: 64 },
  { id: 30, rate: 63 },
  { id: 31, rate: 66 },
  { id: 32, rate: 76 },
];

export default function GridDemo() {
  const gradientId = React.useId();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 600,
        height: 140,
        bgcolor: '#ffffff',
        // Chiziq qalinligini haqiqiy grafikdek ingichka (2px) qilish
        '& .MuiLineElement-root': {
          strokeWidth: 2,
        },
        // O'qlarni butunlay yo'qotish
        '& .MuiChartsAxis-root': {
          display: 'none',
        },
      }}
    >
      {/* O'ngdagi juda xira, muloyim gradient foni */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={0.12} />
            <stop offset="60%" stopColor="#6366f1" stopOpacity={0.03} />
            <stop offset="100%" stopColor="#6366f1" stopOpacity={0.0} />
          </linearGradient>
        </defs>
      </svg>

      <LineChart
        dataset={chartData}
        xAxis={[
          {
            dataKey: 'id',
            scaleType: 'point',
            disableLine: true,
            disableTicks: true,
          },
        ]}
        yAxis={[
          {
            min: 15, // Chiziq pastga yopishib qolmasligi uchun minimal chegara
            max: 90, // Yuqoridan ham chiroyli joy qolishi uchun
            disableLine: true,
            disableTicks: true,
            sx: { display: 'none' },
          },
        ]}
        series={[
          {
            dataKey: 'rate',
            color: '#6366f1',
            curve: 'natural',
            showMark: false,
            area: true,
            sx: {
              '& .MuiAreaElement-root': {
                fill: `url(#${gradientId})`, // Yumshoq gradient
              },
            },
          },
        ]}
        height={140}
        margin={{ top: 10, right: 0, bottom: 0, left: 0 }}
      />
    </Box>
  );
}