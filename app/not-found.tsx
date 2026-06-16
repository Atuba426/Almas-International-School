import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <span className="font-heading text-6xl font-bold text-primary-700 sm:text-8xl">
        404
      </span>
      <h1 className="mt-4 font-heading text-2xl font-bold text-primary-800 sm:text-3xl">
        Page Not Found
      </h1>
      <p className="mt-3 max-w-md text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved. Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Button href="/contact" variant="outline">
          Contact Us
        </Button>
      </div>
      <Link
        href="/admissions"
        className="mt-6 text-sm font-medium text-primary-600 underline-offset-4 hover:underline"
      >
        Or explore our Admissions page
      </Link>
    </div>
  );
}
