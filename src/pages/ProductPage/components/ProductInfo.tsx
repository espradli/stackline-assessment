import { Product } from "../interfaces";

interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return <div className="tag">{text}</div>;
};

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const { title, subtitle, tags, image: imgUrl } = product;

  return (
    <div className="product-info">
      <div className="img-wrapper">
        <img src={imgUrl} alt="Product" />
      </div>
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="tags">
        {tags.map((tag) => (
          <Tag text={tag} key={tag} />
        ))}
      </div>
    </div>
  );
};
