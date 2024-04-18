import Image from 'next/image';
import Link from 'next/link';

import logo from 'public/icons/logo.svg';

import Footer from 'components/footer';
import Features from 'components/home/features';

import url from 'constants/url';
import { premiumPlan } from 'constants/usage';

export default function Home() {
	return (
		<div className="relative h-full bg-gradient-to-br from-sky-100 via-white to-sky-100 pl-2 pr-2 text-gray-800">
			<header className="relative m-auto h-[56px] max-w-4xl pt-3">
				<div className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between">
					<Link href={'.url'} className="flex max-w-[180px] items-center p-3 text-2xl">
						<Image src={logo} width={30} height={30} alt="KharchKhabri logo" className="mr-2" />
						<span className="font-black tracking-[-0.03em] text-gray-900">Kharchkhabri</span>
					</Link>
					<div className="flex space-x-4">
						<Link
							href={url.app.signin}
							className="leading-2 inline-flex h-[34px] items-center overflow-hidden rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90"
						>
							Sign in
						</Link>
						<Link
							href={url.app.signup}
							className="leading-2 inline-flex h-[34px] items-center overflow-hidden rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90"
						>
							Sign up
						</Link>
					</div>
				</div>
			</header>

			<main>
				<div className="absolute inset-x-0 top-[-55px] z-10 h-96 overflow-hidden text-gray-900/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
					<svg className="absolute inset-0 top-0 h-full w-full text-gray-900" xmlns="http://www.w3.org/2000/svg">
						<defs>
							<pattern
								id="pattern"
								width="32"
								height="32"
								patternUnits="userSpaceOnUse"
								x="50%"
								y="100%"
								patternTransform="translate(0 -1)"
							>
								<path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
							</pattern>
						</defs>
						<rect width="100%" height="100%" fill="url(#pattern)"></rect>
					</svg>
				</div>

	<div className="briefClass">
    <div className="intro">
      <h2>Effortless Expense Tracking: Take control of your finances in minutes a day</h2>
      <p>Manage Your Finances Effortlessly
        Gain control over your finances with our user-friendly expense tracker. Easily track your spending, set budgets, and achieve your financial goals. Stay organized, save time, and make informed decisions about your money.

        Sign up now to start managing your money smarter!</p>
    </div>
    <div className="introImageClass">
      <img src="public\demo\overview.jpg" alt="Logo Image" className="logo"></img>
    </div>
  </div>

  <b><h2 className="featureHeading">Features</h2></b><br />
  <div className="containerClass">
    <div className="feature">
      <h2>User Authentication</h2>
      <p>Allow users to register and securely log in to access their expense data.</p>
    </div>
    <div className="feature">
      <h2>Expense Logging</h2>
      <p>Provide an interface for users to manually enter their expenses, including date, amount, category, and description.</p>
    </div>
    <div className="feature">
      <h2>Expense Categories</h2>
      <p>Allow users to categorize expenses for better organization and insights into spending habits.</p>
    </div>
    <div className="feature">
      <h2>Income Tracking</h2>
      <p>Enable users to track their income sources to have a complete financial overview.</p>
    </div>
    <div className="feature">
      <h2>Budgeting</h2>
      <p>Allow users to set budgets for different expense categories and receive notifications when approaching or exceeding limits.</p>
    </div>
    <div className="feature">
      <h2>Expense Visualization</h2>
      <p>Present users with charts and graphs to visualize spending patterns and summaries.</p>
    </div>
  </div>



				
			</main>
			<Footer/>
		</div>
	);
}
