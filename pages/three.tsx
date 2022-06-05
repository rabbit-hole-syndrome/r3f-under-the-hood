import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useEffectOnce } from "../hooks";

const Home: NextPage = () => {
  /**
   * A bit of hacking to get the vanilla Three.js demo
   * to automatically reload when making changes
   */
  useEffectOnce(() => {
    if (typeof window !== "undefined") {
      import("../demos/three");
    }
    return () => window.location.reload();
  });

  return <></>;
};

export default Home;
