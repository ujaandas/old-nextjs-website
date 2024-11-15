import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Tag, { TagProps } from "./tag";

interface BlogPostCardProps {
  filename: string;
  title: string;
  date: string;
  image: string;
  description: string;
  tags: TagProps[];
}

export default function BlogPostCard({
  filename,
  title,
  date,
  image,
  description,
  tags,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col w-full">
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
      <CardContent className="p-4 md:p-6 flex-grow">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <CalendarIcon className="mr-1 h-3 w-3" />
          <time dateTime={date}>{date}</time>
        </div>
        <h3 className="text-xl font-semibold leading-tight tracking-tight mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap mb-2">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag.text} color={tag.color} />
          ))}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 md:p-6 md:pt-0 mt-auto">
        <Button asChild className="w-full">
          <Link href={`blog/${filename.split(".")[0]}`}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
