const Projects = () => {
  return (
    <section>
      <div className="text-center justify-center items-center py-10">
        <h2 className="font-black text-2xl">My projects</h2>
        <p>
          {" "}
          My recent projects goes here. Connect to Firebase. See if analytics
          possible
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-center justify-center items-center py-10 my-10">
        {/* {map over Firebase data here} */}
        <div>
          <h1>Image Here</h1>
          <h2>Title</h2>
          <p>paragraph here</p>
          <p>Button here</p>
        </div>
        <div>
          <h1>Image Here</h1>
          <h2>Title</h2>
          <p>paragraph here</p>
          <p>Button here</p>
        </div>
        <div>
          <h1>Image Here</h1>
          <h2>Title</h2>
          <p>paragraph here</p>
          <p>Button here</p>
        </div>
        <div>
          <h1>Image Here</h1>
          <h2>Title</h2>
          <p>paragraph here</p>
          <p>Button here</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
