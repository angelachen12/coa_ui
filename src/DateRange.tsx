import { getData } from "./BackendAccessor";

import * as React from "react";
import Select from "react-select";

import "./DateRange.css";

interface Location {
  category: string;
  name: string;
}

interface DateRangeOption {
  value: string;
  label: string;
}

interface SeasonOptions {
  label: string;
  startDay: string;
  endDay: string;
}

interface DateRange {
  firstDate: string;
  lastDate: string;
}

interface DateRangeResponse {
  validDateRange: DateRange;
}

interface DateRangeState {
  startDate: DateRangeOption;
  startDateOptions: Array<DateRangeOption>;
  endDate: DateRangeOption;
  endDateOptions: Array<DateRangeOption>;
  location: Location;
}

const DEFAULT_START_DATE: DateRangeOption = {
  value: "2018-01-01",
  label: "Spring 2018",
};

const DEFAULT_END_DATE: DateRangeOption = {
  value: "2018-08-01",
  label: "Fall 2018",
};

const SEASONS = {
  SPRING: {
    label: "Spring",
    startDay: "03-01",
    endDay: "05-31",
  },
  FALL: {
    label: "Fall",
    startDay: "09-01",
    endDay: "11-30",
  },
};

const SEASON_ORDER = [SEASONS.SPRING, SEASONS.FALL];

export class DateRangeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: DEFAULT_START_DATE,
      startDateOptions: [DEFAULT_START_DATE],
      endDate: DEFAULT_END_DATE,
      endDateOptions: [DEFAULT_END_DATE],
      location: {
        category: "",
        name: "",
      },
    };

    this.props.onDateRangeChanged(
      this.state.startDate.value,
      this.state.endDate.value
    );
  }

  componentDidMount(): void {
    // TODO: axiom request for valid date range
    this.setState({});
    this.props.onDateRangeChanged(
      this.state.startDate.value,
      this.state.endDate.value
    );
  }

  onMinDateChanged(selection: DateRangeOption): void {
    console.log("onMinDateChanged" + selection.value);
    this.setState({
      startDate: selection,
    });
    this.props.onDateRangeChanged(selection.value, this.state.endDate.value);
  }

  onMaxDateChanged(selection: DateRangeOption): void {
    this.setState({
      endDate: selection,
    });
    this.props.onDateRangeChanged(this.state.startDate.value, selection.value);
  }

  setLocation(location: Location): void {
    this.setState({
      location: {
        category: location.category,
        name: location.name,
      },
    });
    this.updateValidDateRange(location.category, location.name);
  }

  updateValidDateRange(locationCategory: string, locationName: string): void {
    console.log(
      "updatevaliddaterange query for: ",
      locationCategory,
      locationName
    );
    if (!locationCategory && !locationName) {
      return;
    }

    const url =
      "validdaterange" +
      `?locationCategory=${locationCategory}` +
      `&locationName=${locationName}`;

    getData(url).then(this.handleValidDateRangeResponse.bind(this));
  }

  getStartDateOption(season: SeasonOptions, year: number): DateRangeOption {
    return {
      label: season.label + " " + year.toString(),
      value: year.toString() + "-" + season.startDay,
    };
  }

  getEndDateOption(season: SeasonOptions, year: number): DateRangeOption {
    const endYear = season.label === "Winter" ? year + 1 : year;
    return {
      label: season.label + " " + year.toString(),
      value: endYear.toString() + "-" + season.endDay,
    };
  }

  handleValidDateRangeResponse(data: DateRangeResponse): void {
    console.log(
      "validdaterange response",
      data.validDateRange.firstDate,
      data.validDateRange.lastDate
    );
    const firstDate = data.validDateRange.firstDate;
    const lastDate = data.validDateRange.lastDate;

    let seasonIdx = 0;
    let season = SEASON_ORDER[seasonIdx];
    let year = parseInt(firstDate.substr(0, 4), 10);
    let seasonDate = this.getStartDateOption(season, year).value;

    if (firstDate < seasonDate) {
      year -= 1;
      season = SEASONS.WINTER;
    } else {
      let previousSeasonIdx = seasonIdx;
      let previousSeason = season;
      let previousYear = year;
      while (seasonDate < firstDate) {
        previousSeasonIdx = seasonIdx;
        previousSeason = season;
        previousYear = year;
        seasonIdx += 1;
        if (seasonIdx === SEASON_ORDER.length) {
          seasonIdx = 0;
          year += 1;
        }
        season = SEASON_ORDER[seasonIdx];
        seasonDate = this.getStartDateOption(season, year).value;
      }
      seasonIdx = previousSeasonIdx;
      season = previousSeason;
      year = previousYear;
    }

    const startDateOptions = [];
    const endDateOptions = [];
    let seasonEndDate = this.getEndDateOption(season, year).value;
    while (seasonEndDate < lastDate) {
      startDateOptions.push(this.getStartDateOption(season, year));
      endDateOptions.push(this.getEndDateOption(season, year));

      seasonIdx += 1;
      if (seasonIdx === SEASON_ORDER.length) {
        seasonIdx = 0;
        year += 1;
      }
      season = SEASON_ORDER[seasonIdx];
      seasonEndDate = this.getEndDateOption(season, year).value;
    }
    startDateOptions.push(this.getStartDateOption(season, year));
    endDateOptions.push(this.getEndDateOption(season, year));

    console.log("date options", startDateOptions, endDateOptions);
    const startDate = startDateOptions[0];
    const endDate = endDateOptions[endDateOptions.length - 1];
    this.setState({
      startDate,
      startDateOptions,
      endDate,
      endDateOptions,
    });
    this.props.onDateRangeChanged(startDate.value, endDate.value);
  }

  public render(): React.Component {
    return (
      <div className="date-range">
        <span>
          <h4>Date Range</h4>
        </span>
        <span>
          <Select
            bsStyle="default"
            className="select"
            value={this.state.startDate}
            options={this.state.startDateOptions}
            onChange={this.onMinDateChanged.bind(this)}
          />
        </span>
        <span>
          <h4> - </h4>
        </span>
        <span>
          <Select
            bsStyle="default"
            className="select"
            value={this.state.endDate}
            options={this.state.endDateOptions}
            onChange={this.onMaxDateChanged.bind(this)}
          />
        </span>
      </div>
    );
  }
}
