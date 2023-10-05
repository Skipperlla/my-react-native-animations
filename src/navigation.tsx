import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ComponentScreenList } from "./constants";
import ComponentList from "./ComponentList";

export type RootStackParams = {
  [key in keyof typeof ComponentScreenList]: undefined;
} & {
  ComponentList: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

export const RootStackNavigation = () => {
  return (
    <RootStack.Navigator
      initialRouteName="ComponentList"
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name="ComponentList" component={ComponentList} />
      {Object.entries(ComponentScreenList).map(([name, component]) => (
        <RootStack.Screen
          key={name}
          name={name as keyof RootStackParams}
          component={component}
        />
      ))}
    </RootStack.Navigator>
  );
};
