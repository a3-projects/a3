"use client";

import { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { cubicBezier } from "motion";
import { useInView } from "motion/react";

// Spring-like easing: fast start, very slow end
const springEasing = cubicBezier(0.4, 0.6, 0.2, 1);

interface DataPoint {
  name: string;
  [key: string]: string | number;
}

interface LineConfig {
  dataKey: string;
  label: string;
  color: string;
  strokeDasharray?: string;
}

interface ComparisonLineChartProps {
  data: DataPoint[];
  lines: LineConfig[];
  xAxisLabel?: string;
  yAxisLabel?: string;
  className?: string;
  animationDuration?: number;
}

export const ComparisonLineChart = ({
  data,
  lines,
  xAxisLabel,
  yAxisLabel,
  className = "",
  animationDuration = 3000,
}: ComparisonLineChartProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  return (
    <div ref={containerRef} className={`w-full h-[300px] md:h-[400px] ${className}`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 30,
            right: 30,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--color-border)"
            opacity={0.5}
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--color-muted-front)", fontSize: 12 }}
            tickLine={{ stroke: "var(--color-border)" }}
            axisLine={{ stroke: "var(--color-border)" }}
            label={
              xAxisLabel
                ? {
                    value: xAxisLabel,
                    position: "bottom",
                    fill: "var(--color-muted-front)",
                    fontSize: 14,
                  }
                : undefined
            }
          />
          <YAxis
            tick={{ fill: "var(--color-muted-front)", fontSize: 12 }}
            tickLine={{ stroke: "var(--color-border)" }}
            axisLine={{ stroke: "var(--color-border)" }}
            tickFormatter={(value) => `${value}%`}
            label={
              yAxisLabel
                ? {
                    value: yAxisLabel,
                    position: "top",
                    fill: "var(--color-muted-front)",
                    fontSize: 12,
                    dy: -15,
                  }
                : undefined
            }
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--color-back)",
              border: "1px solid var(--color-border)",
              borderRadius: "8px",
              padding: "12px",
            }}
            labelStyle={{
              color: "var(--color-front)",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
            itemStyle={{
              color: "var(--color-muted-front)",
            }}
            formatter={(value: number, name: string) => {
              const lineConfig = lines.find((l) => l.dataKey === name);
              return [`${value}%`, lineConfig?.label || name];
            }}
          />
          {isInView &&
            [...lines].reverse().map((line) => (
              <Line
                key={line.dataKey}
                type="monotone"
                dataKey={line.dataKey}
                name={line.dataKey}
                stroke={line.color}
                strokeWidth={3}
                strokeDasharray={line.strokeDasharray}
                dot={{
                  fill: line.strokeDasharray ? line.color : "var(--color-muted-back)",
                  stroke: line.color,
                  strokeWidth: 2,
                  r: 5,
                }}
                activeDot={{
                  fill: line.strokeDasharray ? line.color : "var(--color-muted-back)",
                  stroke: line.color,
                  strokeWidth: 2,
                  r: 7,
                }}
                animationDuration={animationDuration}
                animationBegin={0}
                animationEasing={springEasing}
              />
            ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
