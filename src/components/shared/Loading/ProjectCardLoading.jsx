import React from 'react'
import style from "./skeleton.module.css";

export default function ProjectCardLoading() {
  return (
    <div className="p-5 w-full max-w-64 border flex flex-col gap-4">
      <div
        className={"h-40 max-w-60 w-full " + style["skeletonanimation"]}
      ></div>
      <div className={"h-6 w-3/4  " + style["skeletonanimation"]}></div>

      <div className="flex flex-col gap-2">
        <div className={"h-4 w-full  " + style["skeletonanimation"]}></div>
        <div className={"h-4 w-full  " + style["skeletonanimation"]}></div>
      </div>

      {/* <div className={"h-4 w-24 " + style["skeletonanimation"]}></div> */}
    </div>
  )
}
