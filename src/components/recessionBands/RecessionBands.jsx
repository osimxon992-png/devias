import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { LineChart } from '@mui/x-charts/LineChart';

// Rasmdagi egri chiziqlarning 12 ta nuqtasi (pik va pasayishlar balandligi)
const dataset = [
  { date: '20 Jan', solidLine: 36, dottedLine: 50 },
  { date: '21 Jan', solidLine: 18, dottedLine: 62 },
  { date: '22 Jan', solidLine: 24, dottedLine: 110 },
  { date: '23 Jan', solidLine: 74, dottedLine: 63 },
  { date: '24 Jan', solidLine: 138, dottedLine: 16 },
  { date: '25 Jan', solidLine: 68, dottedLine: 26 },
  { date: '26 Jan', solidLine: 33, dottedLine: 45 },
  { date: '27 Jan', solidLine: 21, dottedLine: 59 },
  { date: '28 Jan', solidLine: 48, dottedLine: 56 },
  { date: '29 Jan', solidLine: 27, dottedLine: 88 },
  { date: '30 Jan', solidLine: 78, dottedLine: 46 },
  { date: '31 Jan', solidLine: 122, dottedLine: 51 },
];

export default function RecessionBands() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 720,
        bgcolor: '#ffffff',
        p: 2,
        borderRadius: 2,

        // Silliq ko'k chiziq qalinligi
        '& .series-solid path': {
          strokeWidth: 3,
        },

        // To'q sariq chiziqni rasmdagidek toza yumaloq nuqtalar qilish
        '& .series-dotted path': {
          strokeWidth: 2.8,
          strokeDasharray: '0 8',
          strokeLinecap: 'round',
        },

        // Chiziq ustidagi har bir sananing aylanacha nuqtalari
        '& .MuiMarkElement-root': {
          r: 3.5,
        },

        // X va Y o'qining asosiy qora chizig'i va belgilari (ticks)ni yashirish
        '& .MuiChartsAxis-line, & .MuiChartsAxis-tick': {
          display: 'none',
        },

        // Orqa fondagi juda xira gorizontal chiziqlar
        '& .MuiChartsGrid-line': {
          stroke: '#f1f3f9 !important',
          strokeDasharray: '4 4',
        },

        // Pastki sana yozuvlari (20 Jan, 21 Jan...)
        '& .MuiChartsAxis-tickLabel': {
          fill: '#8a94a6 !important',
          fontSize: '0.8rem',
          fontWeight: 400,
        },
      }}
    >
      <LineChart
        dataset={dataset}
        grid={{ horizontal: true }} // Rasmdagi xira fon panjarasi
        xAxis={[
          {
            scaleType: 'point',
            dataKey: 'date',
          },
        ]}
        yAxis={[
          {
            sx: { display: 'none' }, // Y o'qi ko'rinmaydi
          },
        ]}
        series={[
          {
            dataKey: 'solidLine',
            color: theme.palette.primary.main,
            curve: 'natural', // Rasmdagidek silliq to'lqinsimon
            showMark: true,   // Nuqtalarni ko'rsatish
            className: 'series-solid',
          },
          {
            dataKey: 'dottedLine',
            color: theme.palette.secondary.main,
            curve: 'natural', // Rasmdagidek silliq to'lqinsimon
            showMark: true,   // Nuqtalarni ko'rsatish
            className: 'series-dotted',
          },
        ]}
        height={260}
        margin={{ top: 30, right: 30, bottom: 35, left: 30 }}
      />
    </Box>
  );
}