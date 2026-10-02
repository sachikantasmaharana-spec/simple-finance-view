import { createFileRoute } from "@tanstack/react-router";
import App from "@/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinanceView — Transactions Dashboard" },
      {
        name: "description",
        content:
          "Simple finance dashboard with billing and RTGS transaction summaries, filters, and search.",
      },
      { property: "og:title", content: "FinanceView — Transactions Dashboard" },
      {
        property: "og:description",
        content:
          "Simple finance dashboard with billing and RTGS transaction summaries, filters, and search.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <App />;
}
