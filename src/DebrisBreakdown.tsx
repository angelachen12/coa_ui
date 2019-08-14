import * as React from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";

import "./DebrisBreakdown.css";

const EMPTY_SUNBURST_DATA = {
  name: "debris",
  children: [],
};

const DEFAULT_SUNBURST_DATA = {
  name: "debris",
  children: [
    {
      name: "Cloth",
      children: [
        {
          name: "Apparel",
          children: [
            {
              name: "Shoes/Sandals",
              count: 0,
            },
            {
              name: "Clothing",
              count: 7,
            },
          ],
        },
        {
          name: "Textiles",
          children: [
            {
              name: "String (No Balloon)",
              count: 3,
            },
            {
              name: "Blankets/Sheets/Towels",
              count: 3,
            },
            {
              name: "Other Cloth",
              count: 8,
            },
          ],
        },
      ],
    },
    {
      name: "Foam Plastic",
      children: [
        {
          name: "Dinnerware",
          children: [
            {
              name: "Fast Food Containers",
              count: 4,
            },
            {
              name: "Foam Plates",
              count: 3,
            },
            {
              name: "Foam Cups",
              count: 67,
            },
          ],
        },
        {
          name: "Packaging",
          children: [
            {
              name: "Meat Trays",
              count: 3,
            },
            {
              name: "Egg Cartons",
              count: 3,
            },
          ],
        },
        {
          name: "Homegoods",
          children: [
            {
              name: "Building Materials",
              ount: 19,
            },
          ],
        },
        {
          name: "Foam Plastic Pieces",
          children: [],
        },
        {
          name: "Buoys/Floats",
          children: [
            {
              name: "Buoys/Floats",
              count: 7,
            },
          ],
        },
      ],
    },
    {
      name: "Glass",
      children: [
        {
          name: "Bottles/Jars",
          children: [
            {
              name: "Beverage Bottles",
              count: 34,
            },
            {
              name: "Other Bottles/Jars",
              count: 1,
            },
          ],
        },
        {
          name: "Lights",
          children: [
            {
              name: "Bulbs",
              count: 2,
            },
            {
              name: "Fluorescent Tubes",
              count: 5,
            },
            {
              name: "Bulbs",
              count: 2,
            },
          ],
        },
        {
          name: "Glass Pieces",
          children: [
            {
              name: "Glass Pieces",
              count: 82,
            },
          ],
        },
      ],
    },
    {
      name: "Metal",
      children: [
        {
          name: "Cans",
          children: [
            {
              name: "Aerosol Cans",
              count: 2,
            },
            {
              name: "Beverage Cans",
              count: 58,
            },
            {
              name: "Other Cans",
              count: 1,
            },
          ],
        },
        {
          name: "Auto",
          children: [
            {
              name: "Car Parts",
              count: 2,
            },
          ],
        },
        {
          name: "Homegoods",
          children: [
            {
              name: "Foil",
              count: 2,
            },
            {
              name: "Nails",
              count: 2,
            },
          ],
        },
        {
          name: "Batteries",
          children: [
            {
              name: "Other",
              count: 63,
            },
          ],
        },
        {
          name: "Other Metal",
          children: [
            {
              name: "Other Metal",
              count: 3,
            },
          ],
        },
        {
          name: "Metal Pieces",
          children: [
            {
              name: "Other Pieces",
              count: 1,
            },
          ],
        },
        {
          name: "Packaging",
          children: [
            {
              name: "Wire",
              count: 5,
            },
          ],
        },
      ],
    },
    {
      name: "Paper",
      children: [
        {
          name: "Cardboard",
          children: [
            {
              name: "Cardboard",
              count: 20,
            },
          ],
        },
        {
          name: "Containers",
          children: [
            {
              name: "Bartons/Boxes",
              count: 15,
            },
            {
              name: "Paper Bags",
              count: 13,
            },
          ],
        },
        {
          name: "Dinnerware",
          children: [
            {
              name: "Cups",
              count: 104,
            },
            {
              name: "Plates",
              count: 7,
            },
          ],
        },
        {
          name: "Newspaper/Magazines",
          children: [
            {
              name: "Newspaper/Magazines",
              count: 28,
            },
          ],
        },
        {
          name: "Paper Pieces",
          children: [
            {
              name: "Paper Pieces",
              count: 190,
            },
          ],
        },
        {
          name: "Other Paper",
          children: [
            {
              name: "Other Paper",
              count: 10,
            },
          ],
        },
      ],
    },
    {
      name: "Plastic",
      children: [
        {
          name: "Packaging",
          children: [
            {
              name: "Strapping Bands",
              count: 3,
            },
            {
              name: "6-Pack Holders",
              count: 15,
            },
          ],
        },
        {
          name: "Bottles",
          children: [
            {
              name: "Tan Oil/Lotion Bottle",
              count: 3,
            },
            {
              name: "Motor Oil/Lube Bottles",
              count: 8,
            },
            {
              name: "Other Bottles",
              count: 13,
            },
            {
              name: "Cap/Rings",
              count: 68,
            },
            {
              name: "Cap/Lids",
              count: 444,
            },
            {
              name: "Bleach/Cleaner Bottles",
              count: 2,
            },
            {
              name: "Beverages/Soda Bottles",
              count: 273,
            },
          ],
        },
        {
          name: "Containers",
          children: [
            {
              name: "Buckets/Crates/Bins",
              count: 1,
            },
          ],
        },
        {
          name: "Cigarettes",
          children: [
            {
              name: "Lighers",
              count: 6,
            },
            {
              name: "Packaging",
              count: 120,
            },
            {
              name: "Filters",
              count: 1238,
            },
            {
              name: "Cigar Tips",
              count: 36,
            },
          ],
        },
        {
          name: "Homegoods",
          children: [
            {
              name: "Rope",
              count: 26,
            },
            {
              name: "Ribbon/Tape (No Balloon)",
              count: 15,
            },
            {
              name: "Diapers",
              count: 1,
            },
          ],
        },
        {
          name: "Fishing",
          children: [
            {
              name: "Line",
              count: 11,
            },
            {
              name: "Fishing Nets",
              count: 2,
            },
          ],
        },
        {
          name: "Bags/Wrappers",
          children: [
            {
              name: "Trash Bags",
              count: 22,
            },
            {
              name: "Store/Shopping Bags",
              count: 74,
            },
            {
              name: "Other Bags",
              count: 36,
            },
            {
              name: "Food, Candy Wrappers/Bags",
              count: 813,
            },
          ],
        },
        {
          name: "Utensils",
          children: [
            {
              name: "Forks/Knives/Spoons",
              count: 83,
            },
          ],
        },
        {
          name: "Plastic Pieces",
          children: [
            {
              name: "Plastic Pieces",
              count: 383,
            },
          ],
        },
        {
          name: "Firearms",
          children: [
            {
              name: "Shotgun Shells",
              count: 6,
            },
          ],
        },
        {
          name: "Personal Care Products",
          children: [
            {
              name: "Tampon Applicators",
              count: 125,
            },
            {
              name: "Syringes",
              count: 9,
            },
          ],
        },
        {
          name: "Toys",
          children: [
            {
              name: "Toys",
              count: 12,
            },
          ],
        },
      ],
    },
    {
      name: "Rubber",
      children: [
        {
          name: "Personal Care Products",
          children: [
            {
              name: "Condoms",
              count: 37,
            },
          ],
        },
        {
          name: "Apparel",
          children: [
            {
              name: "Gloves",
              count: 1,
            },
          ],
        },
        {
          name: "Balloons",
          children: [
            {
              name: " Rubber",
              count: 33,
            },
            {
              name: "Mylar",
              count: 26,
            },
          ],
        },
        {
          name: "Other Rubber",
          children: [
            {
              name: "Other Rubber",
              count: 1,
            },
          ],
        },
      ],
    },
    {
      name: "Wood",
      children: [
        {
          name: "Utensils",
          children: [
            {
              name: "Ice Cream Spoon/Sticks",
              count: 12,
            },
          ],
        },
        {
          name: "Lumber Pieces",
          children: [
            {
              name: "Lumber Pieces",
              count: 25,
            },
          ],
        },
        {
          name: "Other Wood",
          children: [
            {
              name: "Other Wood",
              count: 5,
            },
          ],
        },
      ],
    },
  ],
};

interface Location {
  category: string;
  name: string;
}

export class DebrisBreakdownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {}, // {category: "", name: ""}
      startDate: "", // ISO date string (YYYY-MM-DD)
      endDate: "", // ISO date string (YYYY-MM-DD)
      chartData: {},
    };
  }

  componentDidMount(): void {
    this.setState({
      chartData: EMPTY_SUNBURST_DATA,
    });
  }

  setDateRange(startDate: string, endDate: string): void {
    console.log("DebrisBreakdown::setDateRange", startDate, endDate);
    this.setState({
      startDate,
      endDate,
    });
    this.queryDebrisBreakdown(
      this.state.location.category,
      this.state.location.name,
      startDate,
      endDate
    );
  }

  setLocation(location: Location): void {
    console.log("DebrisBreakdown::setLocation", location);
    if (location) {
      this.setState({
        location: {
          category: location.category,
          name: location.name,
        },
      });
      this.queryDebrisBreakdown(
        location.category,
        location.name,
        this.state.startDate,
        this.state.endDate
      );
    }
  }

  queryDebrisBreakdown(
    locationCategory: string,
    locationName: string,
    startDate: string,
    endDate: string
  ): void {
    console.log(
      "DebrisBreakdown::queryDebrisBreakdown",
      locationCategory,
      locationName,
      startDate,
      endDate
    );

    // TODO: This needs to be implemented.

    if (locationCategory && locationName && startDate && endDate) {
      urlLocationName = locationName.trim().replace(/ /g, "%20");
      const url =
        `http://coa-flask-app-dev.us-east-1.elasticbeanstalk.com/breakdown` +
        `?locationCategory=` +
        locationCategory +
        `&locationName=` +
        urlLocationName +
        `&startDate=` +
        startDate +
        `&endDate=` +
        endDate;
      console.log("url", url);
      fetch(url, { method: "GET", mode: "cors" }).then(
        function(results): void {
          results.json().then(
            function(data): void {
              console.log(data);
              this.setState({
                chartData: data.data,
              });
            }.bind(this)
          );
        }.bind(this),
        function(): void {
          console.log(
            "failed to query breakdown api, resolving to default data"
          );
          this.setState({
            chartData: DEFAULT_SUNBURST_DATA,
          });
        }.bind(this)
      );
    } else {
      console.log(
        "Not enough information to query for debris breakdown statistics."
      );
      this.setState({
        chartData: EMPTY_SUNBURST_DATA,
      });
    }
  }

  public render(): React.Component {
    return (
      <div className="nivo-sunburst">
        <ResponsiveSunburst
          data={this.state.chartData}
          margin={{
            top: 40,
            right: 20,
            bottom: 20,
            left: 20,
          }}
          identity="name"
          value="count"
          cornerRadius={2}
          borderWidth={1}
          borderColor="white"
          colors="paired"
          colorBy="id"
          childColor="inherit"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          isInteractive={true}
        />
      </div>
    );
  }
}
