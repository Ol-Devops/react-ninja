export function Gallery() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
      }}
    >
      <h2>Gallery</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1rem",
        }}
      >
        <img src="https://picsum.photos/200" alt="img" />

        <img src="https://picsum.photos/200" alt="img" />
        <img src="https://picsum.photos/200" alt="img" />

        <img src="https://picsum.photos/200" alt="img" />
        <img src="https://picsum.photos/200" alt="img" />

        <img src="https://picsum.photos/200" alt="img" />
        <img src="https://picsum.photos/200" alt="img" />

        <img src="https://picsum.photos/200" alt="img" />
      </div>
    </div>
  );
}
