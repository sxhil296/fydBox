import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";


export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Fydbox?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Fydbox is an anonymous feedback platform that allows admins to
                share a unique link for users to submit honest feedback without
                revealing their identity.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              How does Fydbox ensure anonymity?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                Fydbox does not collect personal details or track users.
                Feedback submissions remain completely anonymous to encourage
                honest responses.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can I customize the feedback form?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Currently, Fydbox provides a simple and effective feedback
                submission form, but future updates may include customization
                options.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Who can access the submitted feedback?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Only the admin who created the feedback link can view the
                responses, ensuring privacy and control over the collected
                insights.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do users need to sign up to give feedback?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                No, users can submit feedback without signing up or logging in,
                making the process quick and hassle-free.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Is Fydbox free to use?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Fydbox offers a basic free version, with potential premium
                features in future updates for enhanced functionality.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
