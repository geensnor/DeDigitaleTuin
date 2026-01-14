import { join } from "path";
import { readFileSync, writeFileSync } from "fs";
import { parse } from "yaml";
import ical from "ical-generator";

export function genereerWielrenkalender() {
  return {
    name: "genereer-wielrenkalender",
    hooks: {
      "astro:build:start": async () => {
        console.log("Koerskalender genereren...");

        const yamlPath = join(process.cwd(), "src/content/data/koersdata.yaml");
        const yamlContent = readFileSync(yamlPath, "utf-8");
        const koersdata = parse(yamlContent);

        const calendar = ical({ name: "Koerskalender" });

        koersdata.forEach((koers: any) => {
          calendar.createEvent({
            allDay: true,
            start: parseDatum(koers.start),
            end: parseDatum(koers.finish || koers.start),
            summary: koers.naam,
          });
        });

        const outputPath = join(process.cwd(), "public", "koerskalender.ics");
        writeFileSync(outputPath, calendar.toString());

        console.log(`📅 Koerskalender gegenereerd: ${outputPath}`);
        console.log(`🚴 ${koersdata.length} koersen in de kalender`);
      },
    },
  };
}

function parseDatum(datumString: string): Date {
  // Verwacht formaat: "01-06-2026" (DD-MM-YYYY)
  const [dag, maand, jaar] = datumString.split("-").map(Number);
  return new Date(jaar, maand - 1, dag); // Maanden zijn 0-indexed in JavaScript
}
