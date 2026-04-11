import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = { input: "", output: "src/data/projects.js" };

  for (let i = 0; i < argv.length; i += 1) {
    const token = argv[i];
    if (token === "--input" || token === "-i") {
      args.input = argv[i + 1] || "";
      i += 1;
    } else if (token === "--output" || token === "-o") {
      args.output = argv[i + 1] || args.output;
      i += 1;
    }
  }

  return args;
}

function assertProject(project, index) {
  const required = ["slug", "title", "description", "image", "alt", "tags", "categories", "role", "timeline", "problem", "solution", "architecture", "outcomes", "links"];
  for (const key of required) {
    if (!(key in project)) {
      throw new Error(`Project index ${index} missing key: ${key}`);
    }
  }

  if (!project.title?.id || !project.title?.en) {
    throw new Error(`Project index ${index} has invalid bilingual title`);
  }

  if (!project.description?.id || !project.description?.en) {
    throw new Error(`Project index ${index} has invalid bilingual description`);
  }
}

function toModuleSource(projects) {
  const json = JSON.stringify(projects, null, 2);

  return `export const allProjects = ${json};\n\nexport const featuredProjects = allProjects.slice(0, 3);\n\nexport function getProjectBySlug(slug) {\n  return allProjects.find((project) => project.slug === slug);\n}\n`;
}

function main() {
  const { input, output } = parseArgs(process.argv.slice(2));

  if (!input) {
    throw new Error("Missing --input <path-to-projects-json>");
  }

  const inputPath = path.resolve(process.cwd(), input);
  const outputPath = path.resolve(process.cwd(), output);

  if (!fs.existsSync(inputPath)) {
    throw new Error(`Input file not found: ${inputPath}`);
  }

  const raw = fs.readFileSync(inputPath, "utf8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed) || parsed.length === 0) {
    throw new Error("Input must be a non-empty JSON array of projects");
  }

  parsed.forEach(assertProject);

  const source = toModuleSource(parsed);
  fs.writeFileSync(outputPath, source, "utf8");

  console.log(`Synced ${parsed.length} projects to ${outputPath}`);
}

try {
  main();
} catch (error) {
  console.error(`sync-projects failed: ${error.message}`);
  process.exit(1);
}
