import LoadingSpinner from '@/components/LoadingSpinner';

export default function Loading() {
  return (
    <div className="h-full flex items-center justify-center">
      <LoadingSpinner size="lg" label="Initializing Sentinel Dashboard..." />
    </div>
  );
}
