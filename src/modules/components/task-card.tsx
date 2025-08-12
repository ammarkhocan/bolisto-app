import { Card, CardContent } from "@/components/ui/card";

export function TaskCard({ name }: { name: string }) {
  return (
    <Card>
      <CardContent className="p-1 px-3">
        <p className="text-card-foreground cursor-pointer text-sm">{name}</p>
      </CardContent>
    </Card>
  );
}
