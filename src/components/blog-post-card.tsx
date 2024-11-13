import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface BlogPostCardProps {
  title: string;
  date: string;
  image: string;
  description: string;
  link: string;
}

export default function BlogPostCard({
  title,
  date,
  image,
  description,
  link,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <time dateTime={date}>{date}</time>
        </div>
        <h3 className="text-lg font-semibold leading-none tracking-tight mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0">
        <Button asChild className="w-full">
          <Link href={link}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
