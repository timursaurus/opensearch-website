import { createContentLoader } from "vitepress";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

export async function generateFAQ() {
  const faqs = await createContentLoader("faqs/*.md", {
    render: true,
  }).load();

  faqs.sort((a, b) =>
    a.frontmatter.category.localeCompare(b.frontmatter.category)
  );

  const categories = new Set(faqs.map((d) => d.frontmatter.category));

  let output = "# Frequently Asked Questions";

  const tableOfContents = Array.from(categories)
    .map((category) => {
      return `[${category}](#${category.toLowerCase().replace(/\s/g, "-")})`;
    })
    .join(", ");
  output = [output, tableOfContents].join("\n");

  const faqContent = faqs.reduce((acc, faq) => {
    const { category, question } = faq.frontmatter as {
      category: string;
      question: string;
    };
    const answer = faq.html;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push({ question, answer });
    return acc;
  }, {});

  for (const category of categories) {
    output += `\n## ${category}`;
    for (const { question, answer } of faqContent[category]) {
      output += `\n### ${question}\n`;
      output += `${answer}`;
    }
  }
  writeFileSync(join("./docs", "faq.md"), output);
}
