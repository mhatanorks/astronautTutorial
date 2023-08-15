import { useState } from "react";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);
  console.log(greeting)

  return (
    <div className="">
      <h3>{greeting}！ 訪問いただきありがとうございます！</h3>
      <button onClick={() => setGreeting(randomMessage())}>新しい挨拶</button>
    </div>
  );
}
