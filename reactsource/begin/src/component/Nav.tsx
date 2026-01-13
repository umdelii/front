import type { Topic } from "../types/Topic";

type NavProps = {
  topics: Topic[];
};

function Nav({ topics }: NavProps) {
  return (
    <nav>
      <ol>
        {topics.map((topic) => (
          <li key={topic.id}>
            <a href={`/read/${topic.id}`}>{topic.title}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Nav;
