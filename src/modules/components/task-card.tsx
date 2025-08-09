import { Card, CardContent } from "@/components/ui/card";

export function TaskCard({ name }: { name: string }) {
  return (
    <Card className="border-border/60 bg-card border border-l-4 border-l-red-400 transition hover:shadow-sm">
      <CardContent className="p-1">
        <p className="text-card-foreground cursor-pointer text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}
