import { Card, CardContent } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

export function TaskCard({
  name,
  onDelete,
}: {
  name: string;
  onDelete?: () => void;
}) {
  return (
    <Card>
      <CardContent className="p-1 px-3">
        <div className="flex items-center justify-between">
          <p className="text-card-foreground cursor-pointer text-sm">{name}</p>
          <Trash2
            className="h-4 w-4 cursor-pointer text-gray-500 hover:text-red-500"
            onClick={onDelete}
          />
        </div>
      </CardContent>
    </Card>
  );
}
