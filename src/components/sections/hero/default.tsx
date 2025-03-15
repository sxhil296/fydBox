"use client";

import { Button } from "../../ui/button";
import { Badge } from "../../ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../../ui/section";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Glow from "../../ui/glow";
import Image from "next/image";
import { useTheme } from "next-themes";
import Link from "next/link";
// import Github from "../../logos/github";

export default function Hero() {
  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/fydboxdark.png";
      break;
    case "dark":
      src = "/fydboxlight.png";
      break;
    default:
      src = "/fydboxdark.png";
      break;
  }

  return (
    <Section className="fade-bottom overflow-hidden pb-0 sm:pb-0 md:pb-0">
      <div className="mx-auto flex max-w-container flex-col gap-8 pt-8 sm:gap-20">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          <Badge variant="outline" className="animate-appear">
            <span className="text-muted-foreground">
              New version of{" "}
              <Link
                href={"https://anon-chat-five.vercel.app/"}
                target="_black"
                className="font-bold text-brand"
              >
                anonChat
              </Link>{" "}
              is out!
            </span>
            <Link href="/dashboard" className="flex items-center gap-1">
              Get started
              <ArrowRightIcon className="h-3 w-3" />
            </Link>
          </Badge>
          <a href="https://www.producthunt.com/posts/fydbox?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-fydbox" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=942046&theme=light&t=1742065690541" alt="FydBox - Collect&#0032;genuine&#0044;&#0032;anonymous&#0032;feedback&#0032;with&#0032;ease&#0046; | Product Hunt" style={{width: "250px", height: '54px'}} width="250" height="54" /></a>
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-7xl md:leading-tight">
            Honest Feedback, No Names Attached
          </h1>
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground opacity-0 delay-100 sm:text-xl">
            Fydbox lets you collect genuine, anonymous feedback with ease. Share
            a link, gather insights, and improve—without the barriers of
            identity. Because real opinions matter.
          </p>
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <a href="/dashboard">Get Started</a>
              </Button>
              {/* <Button variant="glow" size="lg" asChild>
                <a href="/">
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button> */}
            
            </div>
            
          </div>
          
          <div className="relative pt-12">
            <MockupFrame
              className="animate-appear opacity-0 delay-700"
              size="small"
            >
              <Mockup type="responsive">
                <Image
                  src={src}
                  alt="Launch UI app screenshot"
                  width={1248}
                  height={765}
                />
              </Mockup>
            </MockupFrame>
            <Glow
              variant="top"
              className="animate-appear-zoom opacity-0 delay-1000"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
