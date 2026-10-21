import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/marcus/")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301, replace: true });
  },
});
