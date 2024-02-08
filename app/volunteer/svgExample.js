import React from 'react';
import { View } from 'react-native';
import Svg, { Circle, Rect, Line } from 'react-native-svg';

export default function SvgExample() {
  return (
    <View>
      <Svg height="300" width="315">
      <Rect
            x="0"
            y="0"
            width="315"
            height="300"
            stroke="#rgb(217,183,165)"
            strokeWidth="3"
            fill="rgb(201,158,135)"
          />
      <Line x1="45" y1="0" x2="45" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="90" y1="0" x2="90" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="135" y1="0" x2="135" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="180" y1="0" x2="180" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="225" y1="0" x2="225" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="270" y1="0" x2="270" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="315" y1="0" x2="315" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />

      <Line x1="0" y1="50" x2="315" y2="50" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="0" y1="100" x2="315" y2="100" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="0" y1="150" x2="315" y2="150" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="0" y1="200" x2="315" y2="200" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="0" y1="250" x2="315" y2="250" stroke="#rgb(217,183,165)" strokeWidth="2" />
      <Line x1="0" y1="300" x2="315" y2="300" stroke="#rgb(217,183,165)" strokeWidth="2" />

      </Svg>
    </View>
  );
}