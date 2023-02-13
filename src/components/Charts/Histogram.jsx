import { ResponsiveBar } from "@nivo/bar";
import { useState } from "react";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export const Histogram = ({ data, toggle /* see data tab */ }) => {
  const [expand, setExpand] = useState(false);
  const [hiddendata, setHiddendata] = useState("");
  function handleclick (data) {
    console.log(data);
    setHiddendata(JSON.stringify(data.data));
    setExpand(true);
  }

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <ResponsiveBar
        data={data}
        keys={["current"]}
        indexBy="value"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={"hsl(113deg 34% 58%)"}
        onClick={(data) => toggle(data)}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) {
          return (
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          );
        }}
      />
      {expand ? (
        <div className="basic-card basic-card-aqua">
                <div className="card-content">
                    <span className="card-title">Card Title</span>
                    <p className="card-text">
                        {hiddendata}
                    </p>
                </div>

                <div className="card-link">
                    <a href="#" title="Read Full"><button onClick={(setExpand(false))}>Read Full</button></a>
                </div>
            </div>
      ) : (
        <></>
      )}
    </div>
  );
};
