import { Component, OnInit, Input } from '@angular/core';
import { CrimeData } from 'src/app/models/crimedata';
import * as d3 from 'd3';

@Component({
  selector: 'app-crimedata-chart',
  templateUrl: './crimedata-chart.component.html',
  styleUrls: ['./crimedata-chart.component.scss']
})
export class CrimedataChartComponent implements OnInit {
  @Input('crimeData') crimeData: CrimeData;
  chartMargin;
  chartWidth;
  chartHeight;
  svgSelector;
  constructor() { }
  ngOnInit(): void {
    this.setChartMargin();
    this.setChartWidth();
    this.setChartHeight();
    this.setSVGSelector();
    this.readData();
  }
  setChartMargin() {
    this.chartMargin = {top: 10, right: 30, bottom: 30, left: 60}
  }
  setChartWidth() {
    this.chartWidth = 460 - this.chartMargin.left - this.chartMargin.right;
  }
  setChartHeight() {
    this.chartHeight = 400 - this.chartMargin.top - this.chartMargin.bottom;
  }
  setSVGSelector() {
    this.svgSelector = d3.select('#my_dataviz')
    .append('svg')
    .attr('width', this.chartWidth + this.chartMargin.left + this.chartMargin.right)
    .attr('height', this.chartHeight + this.chartMargin.top + this.chartMargin.bottom)
    .append('g')
    .attr(
      'transform',
      `translate(${this.chartMargin.left},${this.chartMargin.top})`
      // 'translate(' + this.chartMargin.left + ',' + this.chartMargin.top + ')'
    );
  }
  readData() {
    // d3.csv('../../../../assets/3_TwoNumOrdered_comma.csv'
    d3.csv('../../../../assets/crimedata.csv'
    , (d) => {
      // each value point if you wanted to map it
      return this.formatVariable(d);
    }
    ).then((value) => {
      this.renderDataSet(value);
    });

  }
  formatVariable(d): { date: Date, value: any } {
    return { date : d3.timeParse('%Y-%m-%d')(d['cdatetime']), value : d['ucr_ncic_code'] };
  }
  renderDataSet(data: any[]) {
    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(
        d3.extent(data, (d) => d['cdatetime'])
      )
      .range([ 0, this.chartWidth ]);
    this.svgSelector.append('g')
      .attr(`transform`, `translate(0, ${this.chartHeight})`)
      // .attr(`transform, translate(0, ${this.chart})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => (+d['ucr_ncic_code']) )])
      .range([ this.chartHeight, 0 ]);
    this.svgSelector.append('g')
      .call(d3.axisLeft(y));

    // Add the line
    this.svgSelector.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr('d', d3.line()
        .x((d)  => x(d['cdatetime']))
        .y((d) => y(d['ucr_ncic_code']))
      );

  }

}
