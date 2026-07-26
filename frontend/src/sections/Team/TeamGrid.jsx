import teamData from "./teamData";
import TeamCard from "./TeamCard";

const TeamGrid = () => {
  return (
    <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

      {teamData.map((member) => (

        <TeamCard
          key={member.id}
          member={member}
        />

      ))}

    </div>
  );
};

export default TeamGrid;