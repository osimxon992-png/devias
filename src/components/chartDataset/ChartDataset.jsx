import { LineChart } from "@mui/x-charts/LineChart";
import {
  FiArrowDown,
  FiArrowRight,
  FiExternalLink,
  FiInfo,
  FiSliders,
} from "react-icons/fi";

const metrics = [
  {
    label: "Impressions",
    value: "36,6K",
    action: "See sources",
    data: [2, 5, 3, 3, 2, 4, 7, 4, 8, 3, 6, 2],
  },
  {
    label: "Engagements",
    value: "19K",
    action: "See traffic",
    data: [2, 6, 4, 5, 3, 2, 6, 6, 2, 2, 2, 5],
  },
  {
    label: "Spent",
    value: "$41.2K",
    action: "See campaigns",
    data: [2, 6, 4, 3, 3, 5, 2, 7, 3, 4, 2, 2],
  },
];

const trafficSources = [52, 47, 40, 43, 49, 52, 44];

const countries = [
  { flag: "US", name: "United States", value: "31,200", seo: "40%" },
  { flag: "GB", name: "United Kingdom", value: "12,700", seo: "47%" },
  { flag: "RU", name: "Russia", value: "10,360", seo: "65%" },
  { flag: "CA", name: "Canada", value: "5,749", seo: "23%" },
  { flag: "DE", name: "Germany", value: "2,932", seo: "45%" },
  { flag: "ES", name: "Spain", value: "200", seo: "56%" },
];

const flagColors = {
  US: "linear-gradient(#b22234 0 14%, #fff 14% 28%, #b22234 28% 42%, #fff 42% 56%, #b22234 56% 70%, #fff 70% 84%, #b22234 84%)",
  GB: "linear-gradient(25deg, transparent 42%, #fff 42% 58%, transparent 58%), linear-gradient(-25deg, transparent 42%, #fff 42% 58%, transparent 58%), #1d4ed8",
  RU: "linear-gradient(#fff 0 33%, #2563eb 33% 66%, #dc2626 66%)",
  CA: "linear-gradient(90deg, #dc2626 0 25%, #fff 25% 75%, #dc2626 75%)",
  DE: "linear-gradient(#111827 0 33%, #dc2626 33% 66%, #f59e0b 66%)",
  ES: "linear-gradient(#dc2626 0 25%, #facc15 25% 75%, #dc2626 75%)",
};

const visitedPages = [
  ["/", "95,847", "8,584", "16%"],
  ["/auth/login", "7,500", "648", "5%"],
  ["/dashboard", "85,406", "568", "2%"],
  ["/blog/top-5-react-frameworks", "75,050", "12,322", "12%"],
  ["/blog/understand-programming-principles", "68,003", "11,645", "10%"],
  ["/blog/design-patterns", "49,510", "10,259", "8%"],
];

const socialSources = [
  { label: "LinkedIn", color: "#6366F1" },
  { label: "Facebook", color: "#F79009" },
  { label: "Instagram", color: "#16AED3" },
];

function ChartDataset() {
  return (
    <div className="space-y-[22px]">
      <div className="grid w-full grid-cols-1 gap-[22px] md:grid-cols-3">
        {metrics.map((metric) => (
          <article
            key={metric.label}
            className="min-w-0 rounded-[16px] border border-[#EAECF0] bg-white p-[16px] shadow-[0_2px_8px_rgba(16,24,40,0.04)]"
          >
            <div className="flex h-[92px] items-start justify-between gap-[8px]">
              <div className="min-w-0">
                <p className="inter text-[12px] text-[#667085]">
                  {metric.label}
                </p>
                <p className="inter mt-[5px] text-[20px] font-semibold text-[#101828]">
                  {metric.value}
                </p>
              </div>
              <LineChart
                height={62}
                width={142}
                margin={{ left: 0, right: 0, top: 4, bottom: 0 }}
                xAxis={[
                  {
                    data: metric.data.map((_, index) => index),
                    position: "none",
                  },
                ]}
                yAxis={[{ min: 0, max: 8, position: "none" }]}
                series={[
                  { data: metric.data, color: "#6366F1", curve: "monotoneX" },
                ]}
                sx={{
                  "& .MuiChartsAxis-root": { display: "none" },
                  "& .MuiLineElement-root": { strokeWidth: 2.2 },
                }}
                slotProps={{ legend: { hidden: true } }}
              />
            </div>
            <a
              className="inter inline-flex items-center gap-[8px] text-[11px] font-semibold text-[#101828]"
              href="#"
            >
              {metric.action}
              <FiArrowRight aria-hidden="true" size={14} />
            </a>
          </article>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <article className="rounded-[16px] border border-[#EAECF0] bg-white px-[30px] pb-[40px] pt-[25px] shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
          <h2 className="inter text-[14px] font-semibold text-[#101828]">
            Traffic Sources
          </h2>
          <div className="mt-[21px] space-y-[11px]">
            {trafficSources.map((source, index) => (
              <div
                key={`${source}-${index}`}
                className="h-[26px] border-t border-dashed border-[#EAECF0] pt-[5px]"
              >
                <div
                  className="h-[26px] overflow-hidden rounded-r-[7px] bg-[#EEF0FF]"
                  style={{ width: `${source}%` }}
                >
                  <div
                    className="h-full bg-[#7376ED]"
                    style={{ width: `${Math.min(source + 8, 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[7px] flex justify-between text-[10px] text-[#667085]">
            <span>0</span>
            <span>20</span>
            <span>40</span>
            <span>60</span>
            <span>80</span>
          </div>
        </article>

        <article className="overflow-hidden rounded-[16px] border border-[#EAECF0] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
          <div className="flex items-center justify-between border-b border-[#F2F4F7] px-[18px] py-[20px]">
            <h2 className="inter text-[14px] font-semibold text-[#101828]">
              Visits by Country
            </h2>
            <FiInfo
              aria-label="More information"
              className="text-[#667085]"
              size={16}
            />
          </div>
          <div className="grid grid-cols-[1fr_72px_42px] bg-[#F9FAFB] px-[13px] py-[12px] text-[9px] font-semibold uppercase tracking-[0.04em] text-[#344054]">
            <span>Country</span>
            <span>
              Value <FiArrowDown className="ml-[2px] inline" size={12} />
            </span>
            <span>SEO</span>
          </div>
          {countries.map((country) => (
            <div
              key={country.name}
              className="grid grid-cols-[1fr_72px_42px] items-center border-b border-[#F2F4F7] px-[13px] py-[12px] text-[11px] text-[#101828]"
            >
              <span className="flex items-center gap-[7px]">
                <span
                  className="h-[10px] w-[14px] rounded-[1px]"
                  style={{ background: flagColors[country.flag] }}
                />
                {country.name}
              </span>
              <span>{country.value}</span>
              <span>{country.seo}</span>
            </div>
          ))}
          <button className="inter flex items-center gap-[9px] px-[18px] py-[15px] text-[11px] font-semibold text-[#101828]">
            See more <FiArrowRight size={14} />
          </button>
        </article>
      </div>

      <div className="grid grid-cols-1 gap-[22px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <article className="overflow-hidden rounded-[16px] border border-[#EAECF0] bg-white shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
          <div className="flex items-center justify-between border-b border-[#F2F4F7] px-[18px] py-[20px]">
            <h2 className="inter text-[14px] font-semibold text-[#101828]">
              Most Visited Pages
            </h2>
            <FiInfo
              aria-label="More information"
              className="text-[#667085]"
              size={16}
            />
          </div>
          <div className="grid grid-cols-[minmax(180px,1fr)_78px_116px_78px] bg-[#F9FAFB] px-[13px] py-[12px] text-[9px] font-semibold uppercase tracking-[0.04em] text-[#344054]">
            <span>Page name</span>
            <span>Visitors</span>
            <span>Unique page visits</span>
            <span>Bounce rate</span>
          </div>
          {visitedPages.map(([page, visitors, uniqueVisits, bounceRate]) => (
            <div
              key={page}
              className="grid grid-cols-[minmax(180px,1fr)_78px_116px_78px] items-center border-b border-[#F2F4F7] px-[13px] py-[12px] text-[11px] text-[#101828]"
            >
              <span className="flex items-center gap-[10px] truncate">
                <FiExternalLink aria-hidden="true" size={15} />
                {page}
              </span>
              <span>{visitors}</span>
              <span>{uniqueVisits}</span>
              <span>{bounceRate}</span>
            </div>
          ))}
        </article>

        <article className="rounded-[16px] border border-[#EAECF0] bg-white px-[18px] pb-[25px] pt-[25px] shadow-[0_2px_8px_rgba(16,24,40,0.04)]">
          <div className="flex items-center justify-between">
            <h2 className="inter text-[14px] font-semibold text-[#101828]">
              Social Media Sources
            </h2>
            <FiInfo
              aria-label="More information"
              className="text-[#667085]"
              size={16}
            />
          </div>
          <div className="mx-auto mt-[38px] h-[128px] w-[128px] rounded-full bg-[conic-gradient(#6366F1_0deg_120deg,#F79009_120deg_210deg,#16AED3_210deg_360deg)] p-[23px]">
            <div className="h-full w-full rounded-full bg-white" />
          </div>
          <div className="mt-[22px] grid grid-cols-2 gap-x-[24px] gap-y-[10px] text-[11px] text-[#101828]">
            {socialSources.map((source) => (
              <span key={source.label} className="flex items-center gap-[7px]">
                <span
                  className="h-[7px] w-[7px] rounded-full"
                  style={{ backgroundColor: source.color }}
                />
                {source.label}
              </span>
            ))}
          </div>
        </article>
      </div>
      <button
        aria-label="Open dashboard settings"
        className="fixed bottom-[28px] right-[24px] flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#6366F1] text-white shadow-[0_4px_12px_rgba(99,102,241,0.35)]"
      >
        <FiSliders size={18} />
      </button>
    </div>
  );
}

export default ChartDataset;
