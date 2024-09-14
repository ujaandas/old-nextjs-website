interface ChunkProps {
  children: React.ReactNode;
  className?: string;
}

export default function Chunk({ children, className }: ChunkProps) {
  return (
    <section
      className={`flex flex-col justify-center items-center mt-20 ${className}`}
    >
      {children}
    </section>
  );
}
