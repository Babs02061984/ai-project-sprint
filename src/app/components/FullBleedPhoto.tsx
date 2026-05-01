const photo =
  "https://www.figma.com/api/mcp/asset/34ef14e9-e069-49ed-b238-ea29c6981b85";

export default function FullBleedPhoto() {
  return (
    // Mobile: portrait crop (3:4). Desktop: full-bleed 900px landscape.
    <div className="w-full aspect-[3/4] md:aspect-auto md:h-[900px] overflow-hidden">
      <img
        src={photo}
        alt=""
        className="w-full h-full object-cover object-[center_20%] md:object-center"
      />
    </div>
  );
}
