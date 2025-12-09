import { useState } from "react";

export default function Welcome() {
  const notes = [
    "What's on your mind today?",
    "What are you working on?",
    "What are you learning?",
    "What are you doing?",
    "Ready when you are.",
    "What's on the agenda today?",
    "What's on your mind?",
    "What can I help with?",
  ];

  const [note] = useState(
    () => notes[Math.floor(Math.random() * notes.length)]
  );

  return (
    <div className="h-14 mb-[35px]">
      <span className="text-[28px] ">{note}</span>
    </div>
  );
}
