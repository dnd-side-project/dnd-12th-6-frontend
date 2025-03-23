'use client';

import { useEffect, useState } from 'react';

import ResponseCompleteAlert from '.';

type CompleteType = 'response' | 'edit' | null;

const CompleteAlertHandler = () => {
  const [open, setOpen] = useState(false);
  const [completeType, setCompleteType] = useState<CompleteType>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('completeAlert');

    if (stored === 'response' || stored === 'edit') {
      setCompleteType(stored);
      setOpen(true);
      sessionStorage.removeItem('completeAlert');
    }
  }, []);

  if (!open || !completeType) return null;
  return (
    <ResponseCompleteAlert completeType={completeType} open={open} onClose={() => setOpen(false)} />
  );
};

export default CompleteAlertHandler;
