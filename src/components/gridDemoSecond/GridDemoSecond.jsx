import * as React from 'react';
import Box from '@mui/material/Box';
import { LineChart } from '@mui/x-charts/LineChart';

const chartData = [
  { id: 1, rate: 47 },
  { id: 2, rate: 46 },
  { id: 3, rate: 45 },
  { id: 4, rate: 22 }, // keskin tushish
  { id: 5, rate: 16 }, // quyi nuqta
  { id: 6, rate: 25 },
  { id: 7, rate: 30 },
  { id: 8, rate: 32 },
  { id: 9, rate: 37 },
  { id: 10, rate: 41 },
  { id: 11, rate: 57 },
  { id: 12, rate: 61 },
  { id: 13, rate: 64 },
  { id: 14, rate: 65 },
  { id: 15, rate: 63 },
  { id: 16, rate: 63 },
  { id: 17, rate: 67 },
  { id: 18, rate: 68 },
  { id: 19, rate: 64 },
  { id: 20, rate: 62 },
  { id: 21, rate: 64 },
  { id: 22, rate: 67 },
  { id: 23, rate: 74 },
  { id: 24, rate: 78 },
  { id: 25, rate: 77 },
  { id: 26, rate: 74 },
  { id: 27, rate: 67 },
  { id: 28, rate: 75 },
  { id: 29, rate: 91 }, // cho'qqi
  { id: 30, rate: 89 },
  { id: 31, rate: 83 },
  { id: 32, rate: 84 },
  { id: 33, rate: 86 },
  { id: 34, rate: 80 },
  { id: 35, rate: 78 },
  { id: 36, rate: 80 },
  { id: 37, rate: 82 },
  { id: 38, rate: 84 },
  { id: 39, rate: 85 },
  { id: 40, rate: 82 },
  { id: 41, rate: 80 },
  { id: 42, rate: 81 },
  { id: 43, rate: 83 },
  { id: 44, rate: 83 },
  { id: 45, rate: 82 },
  { id: 46, rate: 86 },
  { id: 47, rate: 89 },
  { id: 48, rate: 88 },
  { id: 49, rate: 87 },
  { id: 50, rate: 88 },
  { id: 51, rate: 91 },
  { id: 52, rate: 89 },
  { id: 53, rate: 87 },
  { id: 54, rate: 88 },
  { id: 55, rate: 90 },
  { id: 56, rate: 92 },
  { id: 57, rate: 90 },
  { id: 58, rate: 88 },
  { id: 59, rate: 89 },
  { id: 60, rate: 91 },
];

export default function GridDemoSecond() {
  const gradientId = React.useId();

  // Rasmdagi aniq havorang tuslar
  const strokeColor = '#00AEEF';

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 700,
        height: 140,
        bgcolor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
        '& .MuiLineElement-root': {
          stroke: strokeColor,
          strokeWidth: 2.2,
          strokeLinecap: 'round',
        },
        '& .MuiChartsAxis-root': {
          display: 'none',
        },
      }}
    >
      {/* Rasmdagi och havorang gradient */}
      <svg style={{ height: 0, width: 0, position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#75D9FD" stopOpacity={0.42} />
            <stop offset="50%" stopColor="#BAEDFD" stopOpacity={0.18} />
            <stop offset="100%" stopColor="#EAF8FE" stopOpacity={0.02} />
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
            min: 10,
            max: 98,
            disableLine: true,
            disableTicks: true,
            sx: { display: 'none' },
          },
        ]}
        series={[
          {
            dataKey: 'rate',
            color: strokeColor,
            curve: 'natural',
            showMark: false,
            area: true,
            sx: {
              '& .MuiAreaElement-root': {
                fill: `url(#${gradientId})`,
              },
            },
          },
        ]}
        height={140}
        margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
      />
    </Box>
  );
}