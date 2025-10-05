"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/lib/page";
import styles from './page.module.css'

export default function catalog() {

  return (
    <div>
      <h1 className={styles.title}>期間限定・通信販売</h1>
      <table className={styles.tableProduct}>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                <Link href={`/products/${p.id}`}>{p.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}