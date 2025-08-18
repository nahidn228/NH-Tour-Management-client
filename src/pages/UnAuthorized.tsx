import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const UnAuthorized = () => {
  return (
    <div>
      Muri kha tui Authorized na
      <Button>
        <Link to={"/"}>Home</Link>
      </Button>
    </div>
  );
};

export default UnAuthorized;
