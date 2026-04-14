import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";

export const collections = {
  docs: defineCollection({ schema: docsSchema(), loader: docsLoader() }),
  recepten: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/recepten" }),
    schema: z.object({
      name: z.string().describe("Naam van het gerecht"),
      image: z.string().optional(),
      recipeYield: z.number().optional(),
      recipeCategory: z
        .enum([
          "hoofdgerecht",
          "voorgerecht",
          "bijgerecht",
          "ontbijt",
          "lunch",
          "nagerecht",
          "soep",
        ])
        .optional(),
      recipeCuisine: z.string().optional(),
      cookTime: z.string().optional(),
      prepTime: z.string().optional(),
      totalTime: z.string().optional(),
      calories: z.number().optional(),
      author: z.string().optional(),
      suitableForDiet: z
        .array(
          z.enum([
            "DiabeticDiet",
            "GlutenFreeDiet",
            "HalalDiet",
            "HinduDiet",
            "KosherDiet",
            "LowCalorieDiet",
            "LowFatDiet",
            "LowLactoseDiet",
            "LowSaltDiet",
            "VeganDiet",
            "VegetarianDiet",
          ]),
        )
        .optional(),
    }),
  }),
};
