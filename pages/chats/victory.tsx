import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryStack,
  VictoryTheme,
} from "victory";

const data2012 = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

const data2013 = [
  { quarter: 1, earnings: 15000 },
  { quarter: 2, earnings: 12500 },
  { quarter: 3, earnings: 19500 },
  { quarter: 4, earnings: 13000 },
];

const data2014 = [
  { quarter: 1, earnings: 11500 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 20000 },
  { quarter: 4, earnings: 15500 },
];

const data2015 = [
  { quarter: 1, earnings: 18000 },
  { quarter: 2, earnings: 13250 },
  { quarter: 3, earnings: 15000 },
  { quarter: 4, earnings: 12000 },
];

const Victory = () => {
  return (
    <div className="flex justify-center items-center bg-rose-100">
      <div>
        <VictoryChart
          domainPadding={{ x: 40, y: 40 }}
          theme={VictoryTheme.material}
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis dependentAxis tickFormat={(x) => `$${x / 1000}k`} />
          <VictoryBar
            data={[
              { x: 1, y: 3, label: "first label" },
              { x: 2, y: 4, label: "second label" },
              { x: 3, y: 2, label: "third and final label" },
            ]}
            labelComponent={
              <VictoryLabel
                dy={-20}
                backgroundStyle={{
                  fill: "tomato",
                  opacity: 0.6,
                }}
                backgroundPadding={{ bottom: 5, top: 5 }}
              />
            }
          />
        </VictoryChart>
      </div>
    </div>
  );
};

export default Victory;
