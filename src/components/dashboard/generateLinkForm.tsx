// "use client";
// import { generateLinkAction } from "@/app/actions";
// import { Input } from "../ui/input";
// import Form from "next/form";
// import SubmitButton from "../general/submitButton";
// import { useState } from "react";
// import ShareLink from "./shareLink";
// import Container from "../general/container";

// export default function GenerateLinkForm() {
//   const [feedBack, setFeedback] = useState<
//     { name: string; id: string; link: string } | undefined
//   >(undefined);
//   const formAction = async (formData: FormData) => {
//     const result = await generateLinkAction(formData);
//     setFeedback(result);
//     console.log("Generated Link Result:", result);
//   };
//   return (
//     <div className="w-full">
//       <Container>
//         <Form
//           className="flex flex-col md:flex-row justify-start items-start gap-4 md:gap-2 w-full md:max-w-xl md:mx-auto"
//           action={formAction}
//         >
//           <Input
//             placeholder="Enter feedback name..."
//             name="name"
//             id="name"
//             className="flex-1 w-full px-4 py-2"
//           />
//           <div className="w-full md:w-auto">
//             <SubmitButton title="Generate Link" />
//           </div>
//         </Form>
//         {feedBack && (
//           <ShareLink feedbackName={feedBack.name} link={feedBack.link} />
//         )}
//       </Container>
//     </div>
//   );
// }
"use client"
import { generateLinkAction } from "@/app/actions"
import { Input } from "../ui/input"
import Form from "next/form"
import SubmitButton from "../general/submitButton"
import { useState } from "react"
import ShareLink from "./shareLink"
import Container from "../general/container"

export default function GenerateLinkForm() {
  const [feedBack, setFeedback] = useState<{ name: string; id: string; link: string } | undefined>(undefined)

  const formAction = async (formData: FormData) => {
    const result = await generateLinkAction(formData)
    setFeedback(result)
    console.log("Generated Link Result:", result)
  }

  return (
    <div className="w-full py-8">
      <Container>
        <Form
          className="flex flex-col sm:flex-row justify-start items-start gap-4 sm:gap-2 w-full max-w-xl mx-auto"
          action={formAction}
        >
          <Input placeholder="Enter feedback name..." name="name" id="name" className="flex-1 w-full px-4 py-2" required/>
          <div className="w-full sm:w-auto">
            <SubmitButton title="Generate Link" />
          </div>
        </Form>
        {feedBack && (
          <div className="mt-8">
            <ShareLink feedbackName={feedBack.name} link={feedBack.link} />
          </div>
        )}
      </Container>
    </div>
  )
}

