import dynamic from "next/dynamic";
const Skills = dynamic(() => import("./skills"), {
  ssr: false,
});
export default Skills;
