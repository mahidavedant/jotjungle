import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Templates from "./(data)/Templates";


export default async function Home() {
  const { userId } = await auth();
  const startCreatingLink = userId ? "/dashboard" : "/sign-up";

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
      {/* Animated Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Templates.map((template, index) => (
          <img
            key={template.slug}
            src={template.icon}
            alt=""
            className="absolute opacity-5 w-12 h-12 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${index * 0.5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          />
        ))}
      </div>

      {/* Existing Navigation */}
      <nav className="p-5 flex justify-between items-center relative z-10">
        <h1 className="text-2xl font-bold bg-gradient-to-br from-[#4F46E5] via-[#9B4DFF] to-[#FF9CFF] text-transparent bg-clip-text">
          JotJungle𝌞
        </h1>
        <div className="flex gap-2">
          {!userId ? (
            <>
              <Link href="/sign-in">
                <Button variant="outline" className="hover:bg-primary/5 cursor-pointer">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="default" className="bg-primary hover:bg-primary/90 cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <Link href="/dashboard">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Dashboard
              </Button>
            </Link>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
            AI-Powered Content Creation
            <br />Made Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your ideas into engaging content with JotJungle's AI-powered writing assistant.
          </p>
          <Link href={startCreatingLink}>
            <Button className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Start Creating <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              🚀
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Generate high-quality content in seconds with our advanced AI technology.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              🎯
            </div>
            <h3 className="text-xl font-semibold mb-2">Multiple Templates</h3>
            <p className="text-gray-600">Choose from a variety of templates designed for different content needs.</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-all">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              ✨
            </div>
            <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
            <p className="text-gray-600">Create content that ranks with built-in SEO best practices.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-primary/5 rounded-2xl p-10">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Content?</h3>
          <p className="text-gray-600 mb-6">Join thousands of creators using JotJungle to generate amazing content.</p>
          <Link href={startCreatingLink}>
            <Button className="bg-primary hover:bg-primary/90 cursor-pointer">
              Get Started Free
            </Button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-8 text-center text-gray-500">
        <p>© {new Date().getFullYear()} JotJungle. All rights reserved.</p>
      </footer>
    </div>
  );
}