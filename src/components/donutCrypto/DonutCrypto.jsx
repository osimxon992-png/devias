
import { PieChart } from '@mui/x-charts/PieChart';

// Rasmdagi aniq ranglar va nisbatlar (qiymatlar)
const data = [
  { id: 1, label: 'Indigo', value: 55, color: '#5C62E6' },
  { id: 2, label: 'Cyan', value: 18, color: '#00A7D6' },
  { id: 3, label: 'Orange', value: 27, color: '#F38805' },
];

export default function DonutChart() {
  return (
    <PieChart
      series={[
        {
          innerRadius: 58, // Halqaning ichki radiusi (qalinligi rasmdagidek bo'lishi uchun)
          outerRadius: 95, // Tashqi radiusi
          paddingAngle: 0, // Bo'laklar orasida bo'shliq yo'q
          cornerRadius: 0,
          startAngle: 0,   // Bo'linish chizig'i roppa-rosa soat 12 dan boshlanadi
          endAngle: 360,
          data,
        },
      ]}
      width={200}
      height={200}
      margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
      hideLegend
    />
  );
}