import { Button } from "@mantine/core";
import "tailwindcss";
const Header = () => {
  return (
    <div className="">
      <div>
        <Button>button</Button>
      </div>
      <div className="text-red-500">Logout</div>
    </div>
  );
};
export default Header;
