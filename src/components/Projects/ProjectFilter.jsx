export default function ProjectFilter({
  current,

  setCurrent,

  categories,
}) {
  return (
    <div className="project-filter">
      <button
        className={current === "All" ? "active" : ""}
        onClick={() => setCurrent("All")}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          className={current === category ? "active" : ""}
          onClick={() => setCurrent(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
