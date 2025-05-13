import "../styles/ItemLogo.css";

const ItemLogo = ({ src, text }) => {
  return (
    <div className="pic_logo">
      <div className="item_pic">
        <img src={src} alt={text} />
      </div>
      <div className="item_text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ItemLogo;
