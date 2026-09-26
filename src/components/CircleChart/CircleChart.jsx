import Box from "@mui/material/Box";
import { PieChart } from "@mui/x-charts/PieChart";

function CircleChart() {
  return (
    <Box
      sx={{
        width: 293.98,
        height: 278.7,
        opacity: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PieChart
        width={293.98}
        height={278.7}
        margin={{ top: 0, bottom: 0, left: 0, right: 0 }}
        sx={{
          "& path": {
            stroke: "none !important",
            strokeWidth: 0,
          },
          "& .MuiPieArc-root": {
            stroke: "none !important",
            strokeWidth: 0,
          },
        }}
        series={[
          {
            innerRadius: 82,
            outerRadius: 96,
            paddingAngle: 0,
            startAngle: 0,
            endAngle: 360,
            data: [
              { value: 33, color: "#7772F5" },
              { value: 67, color: "#F1F1F1" },
            ],
          },

          {
            innerRadius: 66,
            outerRadius: 80,
            paddingAngle: 0,
            startAngle: 0,
            endAngle: 360,
            data: [
              { value: 58, color: "#FF9D22" },
              { value: 42, color: "#F1F1F1" },
            ],
          },

          {
            innerRadius: 50,
            outerRadius: 64,
            paddingAngle: 0,
            startAngle: 0,
            endAngle: 360,
            data: [
              { value: 15, color: "#2DB6D3" },
              { value: 85, color: "#F1F1F1" },
            ],
          },
        ]}
        hideLegend
      />
    </Box>
  );
}

export default CircleChart;
