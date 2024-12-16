import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({ schema: docsSchema() }),
  recepten: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/recepten" }),
    schema: z.object({
      name: z.string().describe("Naam van het gerecht"),
      recipeYield: z.number().optional(),
      recipeCategory: z
        .enum([
          "hoofdgerecht",
          "voorgerecht",
          "ontbijt",
          "lunch",
          "nagerecht",
          "soep",
        ])
        .optional(),
      recipeCuisine: z.string().optional(),
      cookTime: z.string().duration().optional(),
      prepTime: z.string().duration().optional(),
      totalTime: z.string().duration().optional(),
      calories: z.number().optional(),
      author: z.string().optional(),
      suitableForDiet: z.array(z
        .enum([
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
        ]))
        .optional(),
    }),
  }),
};
