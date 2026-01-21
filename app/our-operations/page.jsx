import OperationsHero from "@/components/operations/OperationsHero";
import OperationsOverview from "@/components/operations/OperationsOverview";
import OperationsFlow from "@/components/operations/OperationsFlow";
import LogisticsCompliance from "@/components/operations/LogisticsCompliance";
import OperationsCTA from "@/components/operations/OperationsCTA";

export default function OurOperationsPage() {
  return (
    <>
      <OperationsHero />
      <OperationsOverview />
      <OperationsFlow />
      <LogisticsCompliance />
      <OperationsCTA />
    </>
  );
}
