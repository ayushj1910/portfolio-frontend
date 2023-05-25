async function getSkillsData() {
  // const dblink = process.env.DB_LINK;
  const res = await fetch(`${process.env.DB_LINK}/api/skills?populate=*`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Techstack(props) {
  const skills = await getSkillsData();
  return (
    <div className="mx-1 lg:pt-8 text-white text-center">
      <p className="inline sm:pb-0 pb-3 sm:pr-3  text-2xl text-indigo-500">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-7 justify-center mt-[20px]">
        {skills.data.map((item) => {
          return (
            <div className="flex justify-center bg-[#fff] p-2 rounded-[50%]   shadow-3d cursor-pointer">
              <img
                src={item.attributes.skill.data.attributes.url}
                title={item.attributes.alt}
                alt={item.attributes.alt}
                width={40}
                height={40}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
