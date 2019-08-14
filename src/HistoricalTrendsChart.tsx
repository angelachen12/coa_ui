import { ResponsiveLine } from "@nivo/line";
import * as React from "react";
import { Panel } from "react-bootstrap";

import "./HistoricalTrendsChart.css";

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.

const DEFAULT_CHART_DATA = [
  {
    id: "japan",
    color: "hsl(123, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 94,
      },
      {
        x: "helicopter",
        y: 49,
      },
      {
        x: "boat",
        y: 2,
      },
      {
        x: "train",
        y: 268,
      },
      {
        x: "subway",
        y: 158,
      },
      {
        x: "bus",
        y: 256,
      },
      {
        x: "car",
        y: 283,
      },
      {
        x: "moto",
        y: 247,
      },
      {
        x: "bicycle",
        y: 258,
      },
      {
        x: "others",
        y: 3,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(187, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 179,
      },
      {
        x: "helicopter",
        y: 122,
      },
      {
        x: "boat",
        y: 176,
      },
      {
        x: "train",
        y: 129,
      },
      {
        x: "subway",
        y: 239,
      },
      {
        x: "bus",
        y: 105,
      },
      {
        x: "car",
        y: 62,
      },
      {
        x: "moto",
        y: 184,
      },
      {
        x: "bicycle",
        y: 190,
      },
      {
        x: "others",
        y: 97,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(314, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 176,
      },
      {
        x: "helicopter",
        y: 233,
      },
      {
        x: "boat",
        y: 265,
      },
      {
        x: "train",
        y: 206,
      },
      {
        x: "subway",
        y: 73,
      },
      {
        x: "bus",
        y: 55,
      },
      {
        x: "car",
        y: 177,
      },
      {
        x: "moto",
        y: 171,
      },
      {
        x: "bicycle",
        y: 213,
      },
      {
        x: "others",
        y: 281,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(71, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 261,
      },
      {
        x: "helicopter",
        y: 257,
      },
      {
        x: "boat",
        y: 34,
      },
      {
        x: "train",
        y: 24,
      },
      {
        x: "subway",
        y: 156,
      },
      {
        x: "bus",
        y: 57,
      },
      {
        x: "car",
        y: 135,
      },
      {
        x: "moto",
        y: 271,
      },
      {
        x: "bicycle",
        y: 120,
      },
      {
        x: "others",
        y: 266,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(171, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 235,
      },
      {
        x: "helicopter",
        y: 122,
      },
      {
        x: "boat",
        y: 38,
      },
      {
        x: "train",
        y: 285,
      },
      {
        x: "subway",
        y: 72,
      },
      {
        x: "bus",
        y: 206,
      },
      {
        x: "car",
        y: 230,
      },
      {
        x: "moto",
        y: 97,
      },
      {
        x: "bicycle",
        y: 109,
      },
      {
        x: "others",
        y: 75,
      },
    ],
  },
];

export class HistoricalTrendsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
    };
  }

  componentDidMount(): void {
    this.setState({
      chartData: DEFAULT_CHART_DATA,
    });
  }

  public render(): React.Component {
    return (
      <Panel>
        <Panel.Body>
          <div className="nivo-line">
            <ResponsiveLine
              data={this.state.chartData}
              margin={{
                top: 50,
                right: 110,
                bottom: 50,
                left: 60,
              }}
              xScale={{
                type: "point",
              }}
              yScale={{
                type: "linear",
                stacked: true,
                min: "auto",
                max: "auto",
              }}
              minY="auto"
              maxY="auto"
              stacked={true}
              axisBottom={{
                orient: "bottom",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "transportation",
                legendOffset: 36,
                legendPosition: "center",
              }}
              axisLeft={{
                orient: "left",
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "count",
                legendOffset: -40,
                legendPosition: "center",
              }}
              colors="yellow_green_blue"
              dotSize={10}
              dotColor="inherit:darker(0.3)"
              dotBorderWidth={2}
              dotBorderColor="#ffffff"
              enableDotLabel={true}
              dotLabel="y"
              dotLabelYOffset={-12}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </Panel.Body>
      </Panel>
    );
  }
}
