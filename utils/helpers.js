import React from "react";

// navigation buttons
import BtnSearch from "../navigation/BtnSearch";
import BtnAdd from "../navigation/BtnAdd";
import BtnNotifications from "../navigation/BtnNotifications";
import BtnMessage from "../navigation/BtnMessage";
import BtnOptions from "../navigation/BtnOptions";

export const getHeaderTitle = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";

  switch (routeName) {
    case "Home":
      return "Home";
    case "Events":
      return "Events";
    case "Messages":
      return "Messages";
  }
};

export const getHeaderButtons = ({ route }) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || "Home";
  switch (routeName) {
    case "Home":
      return {
        headerShown: true,
        headerLeft: () => <BtnSearch />,
        headerRight: () => <BtnNotifications />,
      };
    case "Events":
      return {
        headerShown: true,
        headerLeft: () => <BtnSearch />,
        headerRight: () => <BtnAdd screen="NewEvent" />,
      };
    case "Messages":
      return {
        headerShown: true,
        headerLeft: () => <BtnSearch />,
        headerRight: () => <BtnMessage />,
      };
    case "MyProfile":
      return {
        headerShown: false,
        headerRight: () => <BtnOptions />,
      };
    case "NewPost":
      return {
        headerShown: false,
      };
  }
};
