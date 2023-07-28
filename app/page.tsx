"use client"

import React from "react";

import Loading from "./components/loading";

export default function Home() {

  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <>
      {
        isLoading ? (
          <Loading finishComplete={()=> setIsLoading(false)}/>
        ) : (
          <>
            Hello
          </>
        )

      }
    </>
  )
}
