import CanvasJSReact from "@/components/chart/canvasjs-3.7.5/canvasjs.react"

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

export type LineChartProps = {
    type: string
    name: string
    showInLegend: boolean
    dataPoints: {
        y: number
        label: string
    }[]
}
export default function LineChart({className, data}:{
    className: string
    data: LineChartProps[]
}) {
    return <div className={className}>{data?.length > 0 && <CanvasJSChart options = {{
        animationEnabled: true,	
        // title:{
        //     text: "Number of New Customers"
        // },
        // axisY : {
        //     title: "Number of Customers"
        // },
        // toolTip: {
        //     shared: true
        // },
        data: data
    }} 
    />}</div>
}