import {
  LinkIcon,
  QrCodeIcon,
  ShieldCheckIcon,
  MessageSquareIcon,
  UserCheckIcon,
  DatabaseIcon,
  GlobeIcon,
  EyeOffIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";

const mockData = [
  {
    icon: LinkIcon,
    title: "Shareable Links",
    description: "Generate unique links for easy feedback collection.",
  },
  {
    icon: QrCodeIcon,
    title: "QR Code Support",
    description: "Instantly create QR codes for quick access to feedback forms.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Private",
    description: "All feedback is encrypted and stored securely.",
  },
  {
    icon: MessageSquareIcon,
    title: "Anonymous Feedback",
    description: "Users can submit responses without revealing their identity.",
  },
  {
    icon: UserCheckIcon,
    title: "Admin Control",
    description: "Manage, review, and analyze responses in one place.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Insights",
    description: "Visualize and export feedback for better decision-making.",
  },
  {
    icon: GlobeIcon,
    title: "Multi-Language Support",
    description: "Customize feedback forms for different languages.",
  },
  {
    icon: EyeOffIcon,
    title: "No Tracking",
    description: "Users can respond with confidence, knowing their data is not tracked."
  },
];

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[760px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Collect Feedback Effortlessly & Anonymously
        </h2>
        <div className="grid auto-rows-fr grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {mockData.map((item, index) => (
            <Item key={index} className="custom-shadow rounded-md">
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>
                  <item.icon className="h-5 w-5 stroke-1" />
                </ItemIcon>
                {item.title}
              </ItemTitle>
              <ItemDescription>
                {item.description}
              </ItemDescription>
            </Item>
          ))}
        </div>
      </div>
    </Section>
  );
}
