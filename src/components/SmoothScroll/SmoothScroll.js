import { Link } from "react-scroll";

const SmoothScroll = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
};

export default SmoothScroll;
