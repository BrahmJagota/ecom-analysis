import { useQuery } from "@tanstack/react-query";
import LineChart from "../../LineChart";
import { fetchSales } from "../../queries/sales";
import { Data } from "../../utils";

type ChartDataItem = {
  label: string; // Date string like "2025-06-09"
  value: number; // Total amount for that date
};

export default function Analysis() {
     const userId = "550e8400-e29b-41d4-a716-446655440000"
  const {data, error} = useQuery({
    queryKey: ["get-sales", userId],
    queryFn: () => fetchSales(userId || "")
  })

  const chartData: ChartDataItem[] = data
    ? Object.values(
        data.reduce((acc: Record<string, ChartDataItem>, sale: any) => {
          const date = new Date(sale.timestamp).toISOString().split("T")[0]; // Get just the date
          if (!acc[date]) {
            acc[date] = { label: date, value: 0 };
          }
          acc[date].value += sale.amount;
          return acc;
        }, {})
      )
    : [];



  if(data) {
    console.log("data", data)
  }
  if(error) {
    console.log("error", error)
  }
    return (
        <div className="h-screen grid grid-cols-[6rem_1fr] grid-rows-[1fr_2fr]">
            <div className="row-start-1 row-end-3 border-r-2"></div>
            <div className=""></div>
            <div className=" flex p-10 gap-6">
                <div className="flex-1 items-center justify-center">
                    <LineChart chartData={chartData}/>
                </div>
                <div className="flex-1">

                    <LineChart chartData={chartData}/>
                </div>
            </div>
        </div>
    )
}