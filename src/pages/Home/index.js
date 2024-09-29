import * as echarts from "echarts";
import { useEffect, useRef } from "react";


const Home = () => {
    const chartRef = useRef(null)
    useEffect(() => {
        // 保证dom可用才进行图表的渲染
        //获取渲染图标的dom节点
        const chartDom = chartRef.current
        //图标初始化生成
        const myChart = echarts.init(chartDom);

        //图表参
        const option = {
            xAxis: {
            type: "category",
            data: ["Vue","React","Angular"],
            },
            yAxis: {
                type: "value",
            },
            series: [
                {
                data: [10, 40, 70],
                type: "bar",
                },
            ],
        };
    //使用图标参数完成渲染
    option && myChart.setOption(option);
    }, []);
    return (
        <div>
        <div ref={chartRef} style={{ width: "500px", height: "400px" }}></div>
        </div>
    );
};

export default Home;
