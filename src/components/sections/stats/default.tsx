import { Section } from "../../ui/section";

export default function Stats() {
  return (
    <Section>
      <div className="container mx-auto max-w-[960px]">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
            5
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Total users
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              458
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Feedback Giver
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              89
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
             Feedback Takers
            </div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-foreground to-muted-foreground/40 bg-clip-text text-4xl font-semibold text-transparent drop-shadow-[1px_1px_1px_hsl(var(--brand-foreground))] hover:to-muted-foreground hover:drop-shadow-[2px_1px_2px_hsl(var(--brand-foreground))] sm:text-5xl md:text-6xl">
              34
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Stars</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
