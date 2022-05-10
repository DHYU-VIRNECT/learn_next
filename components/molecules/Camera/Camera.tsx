import React from "react";
import { CameraType } from "../../../types/cameraType";
import Image from "next/image";
import Link from "next/link";
import styles from "./Camera.module.scss";
import classNames from "classnames/bind";
import { DefaultComponentProps } from "../../../types/defaultComponentProps";

const cx = classNames.bind(styles);

const Camera = ({
  id,
  image,
  num,
  className,
}: CameraType & DefaultComponentProps) => (
  <Link href={`/camera/${id}`}>
    <a>
      <div className={cx("container", className)}>
        <div className={cx("thumbnail")}>
          <Image src={image} layout="fill" alt="" />
        </div>
        <div className={cx("description")}>
          <p className="camera-num">{num}</p>
        </div>
      </div>
    </a>
  </Link>
);

export default React.memo(Camera);
