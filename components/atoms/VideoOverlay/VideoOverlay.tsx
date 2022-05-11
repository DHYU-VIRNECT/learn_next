import React from "react";
import styles from "./VideoOverlay.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type Props = {
  text: string;
};

const VideoOverlay = ({ text }: Props) => (
  <div className={cx("container")}>
    <span className={cx("text")}>{text}</span>
  </div>
);

export default React.memo(VideoOverlay);
