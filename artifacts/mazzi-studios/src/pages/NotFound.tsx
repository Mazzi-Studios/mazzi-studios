import { Head } from '@/components/seo/Head';
import { FadeUp } from '@/components/animations/FadeUp';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Head
        title="Page Not Found | Mazzi Studios"
        description="The requested page could not be found."
        robots="noindex, nofollow"
      />
      <FadeUp className="max-w-lg text-center">
        <h1 className="text-9xl font-heading font-black text-secondary/10 mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-secondary mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="rounded-full">
          <Link href="/">Return Home</Link>
        </Button>
      </FadeUp>
    </div>
  );
}