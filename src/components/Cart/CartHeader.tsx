import ClearCartAlert from "./ClearCartAlert";

const CartHeader = ({ cartLength }: { cartLength: number }) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="title">Your Cart</h3>
      {cartLength > 0 && <ClearCartAlert />}
    </div>
  );
};
export default CartHeader;
