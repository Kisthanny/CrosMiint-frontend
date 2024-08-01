"use client";

import { useParams } from "next/navigation";

export default function Profile() {
  const { id } = useParams();

  if (!id) {
    return <div>404</div>;
  }
  return <section>userId: {id}</section>;
}
