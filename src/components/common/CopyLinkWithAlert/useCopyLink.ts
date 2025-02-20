import { useState } from 'react';

const useCopyLink = () => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyLink = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 3000);
    });
  };

  return { isCopied, copyLink };
};

export default useCopyLink;
