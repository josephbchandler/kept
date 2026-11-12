import Link from "next/link";
import { Container } from "@/components/container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <h1 className="font-serif text-6xl tracking-tight">Not found</h1>
      <p className="mt-4 text-muted">That page isn’t in the index.</p>
      <Link href="/" className="mt-8 inline-block text-sm underline underline-offset-4 hover:text-accent">
        Back to browse
      </Link>
    </Container>
  );
}
