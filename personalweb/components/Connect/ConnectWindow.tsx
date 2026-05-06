"use client";
import Window from "@/components/Window/Window";
// import { useDesktop } from "@/app/src/data/desktop/useDesktop";
import styles from "./Connect.module.css";
import StatusBar from "../StatusBar/StatusBar";
import { connectLinks } from "@/app/src/data/data";
import Image from "next/image";

export default function ConnectWindow() {
  // TODO: fix the connect window on click and fix  the always happy to chat title
  return (
    <Window title="Let's Connect">
      <div className={styles.body}>
        <div>
          Always happy to chat about opportunities, collabs, or just say hi.
        </div>

        <div className={styles.links}>
          {connectLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.linkRow}
            >
              <div className={styles.linkIcon}>
                <Image
                  src={link.icon}
                  width={24}
                  height={24}
                  alt={link.label}
                />
              </div>
              <div className={styles.linkText}>
                <span className={styles.linkLabel}>{link.label}</span>
                <span>{link.description}</span>
              </div>
              <button>Open ↗</button>
            </a>
          ))}
        </div>

        <StatusBar footerText="Ready to connect" />
      </div>
    </Window>
  );
}
