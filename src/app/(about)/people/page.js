import teamMembers from "@/src/components/People/teamMembers";
import TeamMemberCard from "@/src/components/People/TeamMemberCard";
import Skills from "@/src/components/About/Skills";

export default function AboutPage() {
  return (
    <section className="mt-24 px-5 xs:px-10 sm:px-12 md:px-16 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-light mb-12 text-center">
        Meet Our Team
      </h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} {...member} />
        ))}
      </div>

      <div className="mt-24">
        <Skills />
      </div>
    </section>
  );
}
