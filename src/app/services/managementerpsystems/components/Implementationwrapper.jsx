
"use client"; 
import dynamic from 'next/dynamic';
const DynamicImplementationProcess = dynamic(
  () => import('./ImplementationProcess'), 
  { 
    ssr: false, 
    loading: () => (
      <div className="w-full h-full bg-gray-100 rounded-xl animate-pulse">Loading Process Details</div>
    ),
  }
);

export default function ImplementationProcessWrapper() {
  return <DynamicImplementationProcess />;
}