import type { Metadata } from "next";
import { Container } from "@/components/container";
import { SearchResults } from "./search-results";

export const metadata: Metadata = { title: "Search" };

export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = typeof q === "string" ? q : "";

  return (
    <Container>
      <SearchResults query={query} />
    </Container>
  );
}
