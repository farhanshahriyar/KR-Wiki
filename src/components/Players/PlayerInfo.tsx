import { Card } from "@/components/ui/card";

export function PlayerInfo({ player }: { player: any }) {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="flex justify-center">
          <img
            src={player.image}
            alt={player.name}
            className="object-cover rounded-lg w-[200px] h-[200px]"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">Player Information</h3>
          <div className="space-y-2">
            <InfoRow label="Name" value={player.fullName} />
            <InfoRow label="Nationality" value={player.nationality} />
            <InfoRow label="Born" value={`${player.birthDate} (age ${player.age})`} />
            <InfoRow label="Status" value={player.status} />
            <InfoRow label="Years Active (Player)" value={player.yearsActive} />
            <InfoRow label="Team" value={player.team} />
            <InfoRow label="Role" value={player.role} />
            {/* <InfoRow label="Approx. Total Winnings" value={player.totalWinnings} /> */}
          </div>
        </div>
      </div>
    </Card>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}:</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}