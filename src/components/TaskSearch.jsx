const TaskSearch = ({ setSearchTerm }) => {
    return (
      <div className="task-search">
        <input
          type="text"
          placeholder="Search tasks..."
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
      </div>
    );
  };
  
  export default TaskSearch;
  