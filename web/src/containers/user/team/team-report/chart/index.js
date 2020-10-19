import React, { PureComponent } from 'react';
import './style.scss';
import { withLocalize } from 'react-localize-redux';
import Chart from 'react-apexcharts';

class LineChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        xaxis: {
          categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        },
        colors: ['#6161F2'],
        chart: {
          id: 'basic-bar',
          toolbar: {
            show: true,
            tools: {
              download: true | '<img src="img/logo.png" class="ico-download" width="20">',
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true | '<img src="/static/icons/reset.png" width="20">',
              customIcons: [],
            },
            autoSelected: 'zoom',
          },
        },
      },
      series: [{
        name: 'series-1',
        data: [0.200, 0.223, 0.253, 0.242, 0.259, 0.266, 0.274, 0.279, 0.277, 0.280, 0.290, 0.300],
      }],
    };
  }

  render() {
    return (
      <div className="chart">
        <div className="control">
          <button type="button" className="btn-radius active">1試合平均得点</button>
          <button type="button" className="btn-radius">1試合平均失点</button>
          <button type="button" className="btn-radius">打率</button>
          <button type="button" className="btn-radius">OPS</button>
          <button type="button" className="btn-radius">先発防御率</button>
          <button type="button" className="btn-radius">救援防御率</button>
        </div>
        <div className="mixed-chart">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="line"
            width="100%"
            height="400"
          />
        </div>
        <textarea className="text-area" rows="3" placeholder="注釈が入ります" />
      </div>
    );
  }
}

export default withLocalize(LineChart);
