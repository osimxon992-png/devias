import { Box, Typography, Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';

const channelsData = [
  { id: 1, label: 'Strategy', value: 14859, formattedValue: '$14,859.00', color: '#DFE3E8' },
  { id: 2, label: 'Outsourcing', value: 35690, formattedValue: '$35,690.00', color: '#00A7D0' },
  { id: 3, label: 'Marketing', value: 45120, formattedValue: '$45,120.00', color: '#5B60F6' },
  { id: 4, label: 'Other', value: 25486, formattedValue: '$25,486.00', color: '#F5820D' },
];

export default function TopChannelsDonutChart() {
  return (
    <Box sx={{ width: 280, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Donut Chart */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <PieChart
          series={[
            {
              innerRadius: 60,
              outerRadius: 100,
              paddingAngle: 0,
              data: channelsData.map(({ id, label, value, color }) => ({
                id,
                value,
                label,
                color,
              })),
            },
          ]}
          width={210}
          height={210}
          margin={{ top: 5, bottom: 5, left: 5, right: 5 }}
          slotProps={{
            legend: { hidden: true },
          }}
        />
      </Box>

      {/* Header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          mt: 4,
          mb: 2.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#2d3748',
            fontSize: '0.75rem',
          }}
        >
          TOP CHANNELS
        </Typography>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            letterSpacing: '0.06em',
            color: '#2d3748',
            fontSize: '0.75rem',
          }}
        >
          VALUE
        </Typography>
      </Box>

      {/* Channels List */}
      <Stack spacing={2.5} sx={{ width: '100%' }}>
        {channelsData.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: item.color,
                  flexShrink: 0,
                }}
              />
              <Typography
                sx={{
                  fontSize: '0.925rem',
                  fontWeight: 600,
                  color: 'text.primary',
                }}
              >
                {item.label}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: '0.925rem',
                color: 'text.secondary',
                fontWeight: 500,
              }}
            >
              {item.formattedValue}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}