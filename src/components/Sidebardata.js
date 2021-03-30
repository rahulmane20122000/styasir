import React from "react";
import * as faicons from "react-icons/fa";
import * as Aiicons from "react-icons/ai";
import * as Ioicons from "react-icons/io";
import * as Riicons from "react-icons/ri";

const SidebarData = [
  {
    title: "BASIC",
    path: "/basic",
    // icon: <Aiicons.AiFillHome />,
    iconClosed: <Riicons.RiArrowDropDownFill/>,
    iconUp: <Ioicons.IoMdArrowDropup/>,
    subnav: [
      {
        title: "Target",
        path: "/basic/target",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Train/Test Set",
        path: "/basic/train_test",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Metrics",
        path: "/basic/Metrics",
        icon: <Ioicons.IoIosPaper />,
      },
    ],
  },
  {
    title: "FEATURES",
    path: "/features",
    // icon: <Aiicons.AiFillHome />,
    iconClosed: <Riicons.RiArrowDropDownFill />,
    subnav: [
      {
        title: "Feature Handling",
        path: "/feature/feature_handling",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Feature Generation",
        path: "/feature/feature_generation",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Feature Reduction",
        path: "/feature/feature_reduction",
        icon: <Ioicons.IoIosPaper />,
      },
    ],
  },
  {
    title: "MODELING",
    path: "/modeling",
    // icon: <Aiicons.AiFillHome />,
    iconClosed: <Riicons.RiArrowDropDownFill />,
    subnav: [
      {
        title: "Algorithms",
        path: "/modeling/algorithms",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Hyperparameters",
        path: "/modeling/hyperparameters",
        icon: <Ioicons.IoIosPaper />,
      },
     
    ],
  },
  {
    title: "ADVANCED",
    path: "/advanced",
    // icon: <Aiicons.AiFillHome />,
    iconClosed: <Riicons.RiArrowDropDownFill />,
    subnav: [
      {
        title: "Runtime Environment",
        path: "/advanced/runtime_environment",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Weighting Strategy",
        path: "/advanced/weighting_statergy",
        icon: <Ioicons.IoIosPaper />,
      },
      {
        title: "Probability Calibration",
        path: "/advanced/probability_calibration",
        icon: <Ioicons.IoIosPaper />,
      },
     
    ],
  },
  
];

export default SidebarData;
