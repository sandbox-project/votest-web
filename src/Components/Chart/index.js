import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: props.chartData
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: 'right',
        location: 'City'
    }
    render() {
        const renderChartData = () => {
            console.log("TYPE", this.props.chartData.type)
            let renderChart = null;
            if (this.props.chartData.type === 'pie') {
                renderChart = (
                    <Pie
                        data={this.props.chartData}
                    />
                )
                return renderChart
            } else if (this.props.chartData.type === 'bar') {
                renderChart = (
                    <Bar
                        data={this.props.chartData}
                    />
                )
                return renderChart
            } else {
                renderChart = (
                    <Line
                        data={this.props.chartData}
                    />
                )
                return renderChart
            }
        }
        return (
            <div className="chart">
                {renderChartData()}
            </div>
        )
    }
}

export default Chart;
