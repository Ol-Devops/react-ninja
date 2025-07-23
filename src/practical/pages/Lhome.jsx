const Lhome = () => {
  return (
    <main>
      <h1>Landing Page</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi velit
        eveniet odit. Odio ratione repellat obcaecati sequi tenetur dolorum,
        commodi vel sint maiores error consequuntur adipisci nihil
        exercitationem placeat animi!
      </p>

      <div>
        <h2>Gallery</h2>

        <div style={{ display: "flex", gap: "1rem" }}>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="img" />

          <img src="https://picsum.photos/seed/picsum/200/300" alt="img" />
          <img src="https://picsum.photos/200" alt="img" />

          <img src="https://picsum.photos/200" alt="img" />
        </div>
      </div>
    </main>
  );
};

export default Lhome;
