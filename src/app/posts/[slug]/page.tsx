import { fetchSlugs } from "@/app/lib/data";

export async function generateStaticParams() {
  // TODO: Fix for build
  const slugs = await fetchSlugs();

  return slugs.flat().map((slug) => {
    return { slug: slug };
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  return <div>My Post: {params.slug}</div>;
}
