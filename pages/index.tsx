import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const {
    query: { token },
  } = router;
  const props = { token };
  return (
    <div>
      merhaba
      <div>osman == {props.token}</div>
    </div>
  );
}
