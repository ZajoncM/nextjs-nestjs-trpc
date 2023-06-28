"use client";

import { trpc } from "@web/utils/trpc";
import { useEffect, useState } from "react";

export default function ClientSide() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello
      .query({ name: 123 })
      .then(({ greeting }) => setGreeting(greeting));
  }, []);
  return <p>I am client side: {greeting}</p>;
}
