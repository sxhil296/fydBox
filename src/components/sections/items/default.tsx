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

export default function Items() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[760px] text-center text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight">
          Collect Feedback Effortlessly & Anonymously
        </h2>
        <div className="grid auto-rows-fr grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <LinkIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Shareable Links
            </ItemTitle>
            <ItemDescription>
              Generate unique links for easy feedback collection.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <QrCodeIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              QR Code Support
            </ItemTitle>
            <ItemDescription>
              Instantly create QR codes for quick access to feedback forms.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <ShieldCheckIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Secure & Private
            </ItemTitle>
            <ItemDescription>
              All feedback is encrypted and stored securely.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <MessageSquareIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Anonymous Feedback
            </ItemTitle>
            <ItemDescription>
              Users can submit responses without revealing their identity.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <UserCheckIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Admin Control
            </ItemTitle>
            <ItemDescription>
              Manage, review, and analyze responses in one place.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <DatabaseIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Data Insights
            </ItemTitle>
            <ItemDescription>
              Visualize and export feedback for better decision-making.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <GlobeIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              Multi-Language Support
            </ItemTitle>
            <ItemDescription>
              Customize feedback forms for different languages.
            </ItemDescription>
          </Item>
          <Item>
            <ItemTitle className="flex items-center gap-2">
              <ItemIcon>
                <EyeOffIcon className="h-5 w-5 stroke-1" />
              </ItemIcon>
              No Tracking
            </ItemTitle>
            <ItemDescription>
              Users can respond with confidence, knowing their data isn’t
              tracked.
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
