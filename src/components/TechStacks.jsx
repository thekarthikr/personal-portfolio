import { techStacks } from "../constants";

const TechStacks = () => {
  return (
    <ul className='tech-stacks'>
      {techStacks.map(({ name, img, className }) => (
        <li
          title={name}
          className={`tech-stacks__item ${className}`}
          key={name}
        >
          <img src={img} alt={name} />
        </li>
      ))}
    </ul>
  );
};

export default TechStacks;
