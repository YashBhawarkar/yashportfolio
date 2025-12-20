import { useEffect, useState } from "react";

export default function useTypewriter({
  words,
  typingSpeed = 120,
  deletingSpeed = 80,
  pauseTime = 1500,
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    let timeout;

    if (!isDeleting && text !== currentWord) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (isDeleting && text !== "") {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}