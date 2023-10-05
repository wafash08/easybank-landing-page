import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import {
  BudgetingIcon,
  FacebookIcon,
  InstagramIcon,
  OnboardingIcon,
  OnlineBankingIcon,
  OpenApiIcon,
  PinterestIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";

export default function App() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleOpen = () => {
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.code === "Escape") {
      setIsExpanded(false);
    }
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [isExpanded]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <header className='px-6 relative bg-white z-10'>
        <div className='flex justify-between items-center h-16 max-w-[1200px] mx-auto'>
          <div className='flex items-center'>
            <a
              href='#'
              aria-label='Go to easybank homepage'
              title='Go to easybank homepage'
            >
              <Logo color='dark-blue' />
            </a>
          </div>

          <div className='md:hidden flex items-center'>
            {isExpanded ? (
              <CloseButton handleClose={handleClose} />
            ) : (
              <HamburgerButton handleOpen={handleOpen} />
            )}
          </div>
          <MobileNavigation isExpanded={isExpanded} handleClose={handleClose} />
          <DesktopNavigation />
          <div className='hidden md:block'>
            <CTAButton>request invite</CTAButton>
          </div>
        </div>
      </header>
      <main>
        <section
          aria-label='Intro section'
          className='bg-neutral-very-light-gray pb-14 lg:pb-0'
        >
          <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row-reverse'>
            <div className='bg-intro lg:flex-[3]' />
            <div className='lg:flex-[2] lg:self-center'>
              <div className='p-6 grid place-content-center'>
                <div className='flex flex-col gap-6 items-center lg:items-start max-w-md'>
                  <h1 className='text-4xl md:text-5xl text-primary-dark-blue text-center lg:text-left'>
                    Next generation digital banking
                  </h1>
                  <p className='text-neutral-grayish-blue text-center lg:text-left'>
                    Take your financial life online. Your Easybank account will
                    be a one-stop-shop for spending, saving, budgeting,
                    investing, and much more.
                  </p>
                  <CTAButton>request invite</CTAButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-label='Feature section'
          className='bg-neutral-light-grayish-blue py-12 lg:py-16'
        >
          <div className='max-w-[1200px] mx-auto grid gap-6 lg:gap-10'>
            <div className='flex flex-col gap-4 items-center md:items-start text-center md:text-left px-6 lg:px-0'>
              <h2 className='text-3xl lg:text-4xl text-primary-dark-blue w-[200px] md:w-full'>
                Why choose Easybank?
              </h2>
              <p className='text-neutral-grayish-blue md:w-3/4 lg:w-1/2'>
                We leverage Open Banking to turn your bank account into your
                financial hub. Control your finances like never before.
              </p>
            </div>

            <FeatureList />
          </div>
        </section>

        <section
          aria-label='Article section'
          className='bg-neutral-very-light-gray py-16'
        >
          <div className='max-w-[1200px] mx-auto grid gap-6 lg:gap-10'>
            <h2 className='text-3xl lg:text-4xl text-primary-dark-blue text-center md:text-left md:ml-6 lg:ml-0'>
              Latest Articles
            </h2>
            <ArticleList />
          </div>
        </section>
      </main>
      <footer
        aria-label='Info website'
        className='bg-primary-dark-blue text-white py-12 px-6'
      >
        <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center md:flex-row md:justify-between md:items-start gap-6 md:gap-0'>
          <div className='flex-1 flex flex-col md:flex-row gap-6 md:gap-24'>
            <div className='grid gap-6 justify-center'>
              <a href='#'>
                <Logo color='white' />
              </a>
              <ul
                aria-label='Social media'
                className='flex-1 flex gap-4 justify-center'
              >
                <li>
                  <a href='#'>
                    <span className='sr-only'>facebook</span>
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='sr-only'>youtube</span>
                    <YoutubeIcon />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='sr-only'>twitter</span>
                    <TwitterIcon />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='sr-only'>pinterest</span>
                    <PinterestIcon />
                  </a>
                </li>
                <li>
                  <a href='#'>
                    <span className='sr-only'>instagram</span>
                    <InstagramIcon />
                  </a>
                </li>
              </ul>
            </div>
            <FooterNavigation />
          </div>
          <div className='flex flex-col gap-6 items-center md:items-end'>
            <CTAButton>request invite</CTAButton>
            <p
              aria-label='easybank copyright'
              className='text-neutral-grayish-blue capitalize'
            >
              &copy; easybank. all rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

function Logo({ color }: { color: "dark-blue" | "white" }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='139'
      height='20'
      aria-label='easybank logo'
    >
      <defs>
        <linearGradient id='a' x1='72.195%' x2='17.503%' y1='0%' y2='100%'>
          <stop offset='0%' stopColor='#33D35E' />
          <stop offset='100%' stopColor='#2AB6D9' />
        </linearGradient>
      </defs>
      <g fill='none' fillRule='evenodd'>
        <path
          fill={color === "white" ? "#FFFFFF" : "#2D314D"}
          fillRule='nonzero'
          d='M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z'
        />
        <g fill='url(#a)'>
          <path d='M10.802 0L0 19.704h5.986L16.789 0z' />
          <path opacity='.5' d='M18.171 0L7.368 19.704h5.986L24.157 0z' />
          <path opacity='.15' d='M25.539 0L14.737 19.704h5.986L31.525 0z' />
        </g>
      </g>
    </svg>
  );
}

function HamburgerButton({ handleOpen }: { handleOpen: () => void }) {
  return (
    <button
      type='button'
      aria-label='Menu Button'
      title='Open Menu'
      onClick={handleOpen}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='11'
        aria-hidden={true}
        aria-label='hamburger icon'
      >
        <g fill='#2D314D' fillRule='evenodd'>
          <path d='M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z' />
        </g>
      </svg>
    </button>
  );
}

function CloseButton({ handleClose }: { handleClose: () => void }) {
  return (
    <button type='button' onClick={handleClose} title='Close Menu'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='18'
        height='19'
        aria-hidden={true}
        aria-label='close icon'
      >
        <g fill='#2D314D' fillRule='evenodd'>
          <path d='M.868.661l16.97 16.97-.706.708L.162 1.369z' />
          <path d='M.161 17.632L17.131.662l.708.706-16.97 16.97z' />
        </g>
      </svg>
    </button>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type='button'
      className={clsx(
        "relative overflow-hidden bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan capitalize rounded-full px-7 py-3 text-white text-sm",
        "group"
      )}
    >
      <span className='absolute inset-0 bg-white opacity-0 group-hover:opacity-20' />
      {children}
    </button>
  );
}

const NAVIGATION_ITEM = [
  { label: "home", id: "" },
  { label: "about", id: "about" },
  { label: "contact", id: "contact" },
  { label: "blog", id: "blog" },
  { label: "careers", id: "careers" },
];

function MobileNavigation({
  isExpanded,
  handleClose,
}: {
  isExpanded: boolean;
  handleClose: () => void;
}) {
  return (
    <div
      className={clsx(
        "z-10 md:hidden block absolute top-16 left-0 w-full h-screen-min-16 p-6 transition-transform duration-300 ease-in-out",
        "bg-gradient-to-b from-neutral-grayish-blue to-transparent",
        isExpanded ? "translate-x-0" : "translate-x-full"
      )}
      onClick={handleClose}
    >
      <nav className='rounded-md bg-white' aria-label='Navigation Menu'>
        <ul className='flex flex-col py-4' aria-label='menu list'>
          {NAVIGATION_ITEM.map(({ id, label }) => {
            return (
              <li key={`${id}-${label}`} className='text-primary-dark-blue'>
                <a
                  href={`#${id}`}
                  className='block w-full text-center py-2 capitalize font-public-sans'
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function DesktopNavigation() {
  return (
    <nav aria-label='Navigation Menu' className='hidden md:flex h-full'>
      <ul className='flex gap-8'>
        {NAVIGATION_ITEM.map(({ id, label }) => {
          return (
            <li key={`${id}-${label}`}>
              <a
                href={`#${id}`}
                className='group relative flex items-center h-full text-neutral-grayish-blue capitalize text-base transition-colors duration-300 ease-in-out hover:text-primary-dark-blue'
              >
                <span
                  className='absolute bottom-0 w-full h-1 bg-gradient-to-r from-primary-lime-green to-primary-bright-cyan origin-left scale-x-0 transition-transform group-hover:scale-x-100 duration-300 ease-in-out'
                  aria-hidden={true}
                />
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

const FOOTER_NAVIGATION = [
  { label: "about us", href: "#" },
  { label: "contact", href: "#" },
  { label: "blog", href: "#" },
  { label: "careers", href: "#" },
  { label: "supports", href: "#" },
  { label: "privacy policy", href: "#" },
];

function FooterNavigation() {
  const left: JSX.Element[] = [];
  const right: JSX.Element[] = [];

  FOOTER_NAVIGATION.map(({ href, label }, idx) => {
    if (idx < 3) {
      left.push(
        <li key={label}>
          <a
            href={href}
            className='capitalize text-base transition-colors duration-200 hover:text-primary-lime-green'
          >
            {label}
          </a>
        </li>
      );
    } else if (idx >= 3) {
      right.push(
        <li key={label}>
          <a
            href={href}
            className='capitalize text-base transition-colors duration-200 hover:text-primary-lime-green'
          >
            {label}
          </a>
        </li>
      );
    }
  });
  return (
    <nav aria-label='sitemap'>
      <div className='grid justify-center text-center md:text-left gap-3 lg:gap-20 md:grid-cols-2'>
        <ul className='grid gap-3'>{left}</ul>
        <ul className='grid gap-3'>{right}</ul>
      </div>
    </nav>
  );
}

const FEATURE_LIST: FeatureItemProps[] = [
  {
    icon: <OnlineBankingIcon />,
    title: "online banking",
    description:
      "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
  },
  {
    icon: <BudgetingIcon />,
    title: "Simple Budgeting",
    description:
      "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
  },
  {
    icon: <OnboardingIcon />,
    title: "Fast Onboarding",
    description:
      "We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
  },
  {
    icon: <OpenApiIcon />,
    title: "Open API",
    description:
      "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
  },
];

function FeatureList() {
  return (
    <ul className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
      {FEATURE_LIST.map(({ description, icon, title }) => {
        return (
          <FeatureItem
            key={title}
            description={description}
            icon={icon}
            title={title}
          />
        );
      })}
    </ul>
  );
}

type FeatureItemProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};

function FeatureItem({ description, icon, title }: FeatureItemProps) {
  return (
    <li>
      <section className='flex flex-col gap-4 lg:gap-6 items-center p-6 lg:p-0 text-center md:items-start md:text-left'>
        {icon}
        <h3 className='text-primary-dark-blue text-2xl capitalize'>{title}</h3>
        <p className='text-neutral-grayish-blue'>{description}</p>
      </section>
    </li>
  );
}

const ARTICLE_LIST: ArticleItemProps[] = [
  {
    author: "Claire Robinson",
    imageUrl: "currency.webp",
    summary:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
    title: "Receive money in any currency with no fees",
  },
  {
    author: "Wilson Hutton",
    imageUrl: "restaurant.webp",
    summary:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
    title: "Treat yourself without worrying about money",
  },
  {
    author: "Wilson Hutton",
    imageUrl: "plane.webp",
    summary:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
    title: "Take your Easybank card wherever you go",
  },
  {
    author: "Claire Robinson",
    imageUrl: "confetti.webp",
    summary:
      "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...",
    title: "Our invite-only Beta accounts are now live!",
  },
];

function ArticleList() {
  return (
    <ul className='px-6 lg:px-0 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
      {ARTICLE_LIST.map(({ author, imageUrl, summary, title }) => {
        return (
          <ArticleItem
            key={title}
            author={author}
            imageUrl={imageUrl}
            summary={summary}
            title={title}
          />
        );
      })}
    </ul>
  );
}

type ArticleItemProps = {
  imageUrl: string;
  author: string;
  title: string;
  summary: string;
};

function ArticleItem({ author, imageUrl, summary, title }: ArticleItemProps) {
  return (
    <li>
      <article className='group grid bg-white rounded overflow-hidden shadow-sm cursor-pointer'>
        <div className='overflow-hidden h-[220px] lg:h-[180px] object-cover'>
          <img
            src={`/images/${imageUrl}`}
            alt={title}
            className='w-full transition-transform duration-500 ease-in-out group-hover:scale-105'
          />
        </div>
        <section className='p-6 grid gap-4'>
          <p className='text-neutral-grayish-blue text-xs'>
            By <span>{author}</span>
          </p>
          <h3 className='text-primary-dark-blue text-xl leading-none transition-colors duration-200 group-hover:text-primary-lime-green'>
            {title}
          </h3>
          <p className='text-neutral-grayish-blue text-sm'>{summary}</p>
        </section>
      </article>
    </li>
  );
}
