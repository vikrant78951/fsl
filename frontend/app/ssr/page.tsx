
import { useState, useEffect } from "react";

export default async function CSRPage() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0].name.first));
  }, []);

  if (!user) return <p>Loading...</p>;

  return <div>Hello {user}</div>;
}
