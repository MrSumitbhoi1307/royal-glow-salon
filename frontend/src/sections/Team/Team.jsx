import TeamHeader from "./TeamHeader";
import TeamGrid from "./TeamGrid";

const Team = () => {
  return (
    <section
      id="team"
      className="bg-[#0B0B0B] py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <TeamHeader />

        <TeamGrid />

      </div>
    </section>
  );
};

export default Team;