import React, { type ReactElement } from 'react';

import FormData from './components/FormData';

export default function UserProfile(): ReactElement {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <FormData />
    </main>
  );
}
