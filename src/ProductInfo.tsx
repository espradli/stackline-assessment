interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return <div className="tag">{text}</div>;
};

export const ProductInfo = () => {
  const title = "Shark Ninja";
  const subtitle =
    "Magic Bullet NutriBullet 12-Piece High-Speed Blender/Mixer System";
  const tags = ["Pantry", "Obsolete", "Blender", "Lightning Deal"];
  const imgUrl =
    "https://images-na.ssl-images-amazon.com/images/I/51h-a5IaHeL.jpg";

  return (
    <div className="product-info">
      <div className="img-wrapper">
        <img src={imgUrl} alt="Product" />
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="tags">
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </div>
    </div>
  );
};
