import AnalyticsHeader from "../../components/analyticsHeader/AnalyticsHeader";
import MainAnalytics from "../../components/mainAnalytics/MainAnalytics";

function Analytics() {
  return (
    <div>
      <section className="w-full h-auto min-h-[1546px] p-[64px_25px]">
        <AnalyticsHeader />
        <MainAnalytics />
      </section>
    </div>
  );
}

export default Analytics;
