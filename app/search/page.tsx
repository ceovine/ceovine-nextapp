'use client';

export const dynamic = 'force-dynamic';

import { Suspense } from 'react';
import SearchClient from './SearchClient';

export default function Page() {
  return (
    <Suspense fallback={<p className="p-10">Loading search...</p>}>
      <SearchClient />
    </Suspense>
  );
}
