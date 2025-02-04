import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  // FooterColumn,
  FooterBottom,
  // FooterContent,
} from "../../ui/footer";
import Link from "next/link";
import Container from "@/components/general/container";
// import LaunchUI from "../../logos/launch-ui";
// import { MessageCircle } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full">
      <Container>
        <Footer className="pt-0">
          {/* <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <MessageCircle />
                <h3 className="text-xl font-bold">FydBox</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <a href="/" className="text-sm text-muted-foreground">
                anonChat
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                FydBox
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a href="/" className="text-sm text-muted-foreground">
                About
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Careers
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a href="/" className="text-sm text-muted-foreground">
                Discord
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Twitter
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Github
              </a>
            </FooterColumn>
          </FooterContent> */}
          <FooterBottom>
            <div>© {new Date().getFullYear()} FydBox. All rights reserved</div>
            <div className="flex items-center gap-4 justify-center">
              <Link href={"https://anon-chat-five.vercel.app/"} target="_black">
                anonChat
              </Link>
              <Link href="/">Privacy Policy</Link>
              {/* <Link href="/">Terms of Service</Link> */}

              <ModeToggle />
            </div>
            <div>
              Made with &hearts; by <Link href="/">Sahil</Link>{" "}
            </div>
          </FooterBottom>
        </Footer>
      </Container>
    </footer>
  );
}
