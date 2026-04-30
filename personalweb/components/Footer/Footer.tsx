"use client";
import React from "react";
import Image from "next/image";
import moment from "moment";
import Menu from "../Menu/Menu";
import styles from "./Footer.module.css";

export default function Footer() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className={styles.footer}>
      <div
        className="title-bar"
        style={{ justifyContent: "space-between", position: "relative" }}
      >
        <div style={{ position: "relative" }}>
          <button onClick={() => setIsVisible(!isVisible)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/icon/computer.png"
                width={20}
                height={20}
                alt="computer"
              />
              Start
            </div>
          </button>

          {isVisible && <Menu />}
        </div>

        <button
          style={{
            boxShadow: "inset -1px -1px #ffffff, inset 1px 1px #0a0a0a",
          }}
          disabled={true}
        >
          {moment().format("HH:mm")}
        </button>
      </div>
    </div>
  );
}
