import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/login");
  }, [navigate]);
}

export default HomePage;
