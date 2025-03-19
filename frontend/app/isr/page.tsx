export const revalidate = 60

async function fetchUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    return data.results[0].name.first;
}

export default async function CSRPage() {
  const user = await fetchUser()

  return <div>Hello {user}</div>;
}
  