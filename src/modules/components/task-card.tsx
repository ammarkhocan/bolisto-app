import { Card, CardContent } from "@/components/ui/card";

export function TaskCard({ name }: { name: string }) {
  return (
    <Card>
      <CardContent className="px-3 py-1">
        <p className="text-card-foreground cursor-pointer text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}
