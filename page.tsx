import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, BarChart3, Brain, Calculator, PieChart } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6" />
          <span className="sr-only">FinancialAI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI-Powered Financial Planning
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Understand your financial situation and plan for a secure future with our intelligent advisor.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Calculator className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Personalized Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Tailored financial advice based on your unique situation and goals.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Retirement Projections</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Visualize your retirement savings and adjust your strategy in real-time.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <PieChart className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Tax Optimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Maximize your savings with AI-driven tax planning strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose FinancialAI?</h2>
                <ul className="grid gap-6">
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span>Comprehensive financial analysis powered by AI</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span>Personalized recommendations for your unique situation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span>Real-time updates and adjustments to your financial plan</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ArrowRight className="h-5 w-5 text-primary" />
                    <span>Secure and confidential handling of your financial data</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                  <div className="relative">
                    <Brain className="w-full h-full text-gray-800 dark:text-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Financial Future?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Sign up now to be notified when our AI-powered financial advisor launches.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Notify Me</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 FinancialAI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

