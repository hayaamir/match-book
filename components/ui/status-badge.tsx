import { CandidateStatus } from "@/lib/types";
import { Badge, badgeVariants } from "@/components/ui/badge";

type StatusBadgeProps = Omit<React.ComponentProps<typeof Badge>, "variant"> & {
  status: CandidateStatus;
};

export function StatusBadge({ status, ...props }: StatusBadgeProps) {
  return <Badge variant={status} {...props} />;
}
