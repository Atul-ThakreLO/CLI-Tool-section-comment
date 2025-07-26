#!/usr/bin/env node
/**
 * Section Comment Generator
 * A Node.js tool to create formatted section comments and copy them to clipboard
 */

const { program } = require("commander");
// import clipboard from "clipboardy";
// import { program } from "commander";
// const pkg = require("./package.json");

/**
 * Copy text to clipboard
 * @param {string} text - Text to copy
 * @returns {boolean} - Success status
 */
function copyToClipboard(text) {
  try {
    const clipboardy = require("clipboardy");
    clipboardy.default.writeSync(text);
    return true;
  } catch (error) {
    console.error(`⚠ Warning: Failed to copy to clipboard: ${error.message}`);
    return false;
  }
}

/**
 * Generate a formatted section comment
 * @param {string} text - The text for the section
 * @param {number} width - Width of the comment block
 * @param {string} char - Character to use for borders
 * @param {string} style - Alignment style
 * @returns {string} - Formatted comment
 */
function generateSectionComment(
  text,
  width = 100,
  char = "/",
  style = "center"
) {
  // Create the top and bottom border
  const border = char.repeat(width);

  let middleLine;

  switch (style) {
    case "center":
      // Center the text
      if (text.length > width - 4) {
        text = text.slice(0, width - 7) + "...";
      }

      const padding = Math.floor((width - text.length - 2) / 2);
      const rightPadding = width - padding - text.length - 2;
      middleLine =
        char.repeat(padding) + ` ${text} ` + char.repeat(rightPadding);
      break;

    case "left":
      // Left align the text
      if (text.length > width - 6) {
        text = text.slice(0, width - 9) + "...";
      }

      const remaining = width - text.length - 4; // 4 for "// " and " "
      middleLine = `// ${text} ` + char.repeat(remaining);
      break;

    case "right":
      // Right align the text
      if (text.length > width - 6) {
        text = text.slice(0, width - 9) + "...";
      }

      const leftPadding = width - text.length - 4; // 4 for " " and " //"
      middleLine = char.repeat(leftPadding) + ` ${text} //`;
      break;

    default:
      throw new Error(`Unknown style: ${style}`);
  }

  // Ensure exact width
  if (middleLine.length < width) {
    middleLine += char.repeat(width - middleLine.length);
  } else if (middleLine.length > width) {
    middleLine = middleLine.slice(0, width);
  }

  return `${border}\n${middleLine}\n${border}`;
}

/**
 * Main function
 */
async function main() {
  program
    .name("secc")
    .description("Generate formatted section comments for code")
    .version("1.0.0")
    .argument("<text>", "Text for the section comment")
    .option("-w, --width <number>", "Width of the comment block", "100")
    .option("-c, --char <character>", "Character to use for borders", "/")
    .option(
      "-s, --style <style>",
      "Text alignment (center|left|right)",
      "center"
    )
    .option("--no-clipboard", "Don't copy to clipboard")
    .addHelpText(
      "after",
      `
Examples:
  $ secc "New Section"
  $ secc "Database Setup" -w 80 -c "=" -s left
  $ secc "API Routes" --width 120 --style right
  $ secc "Debug Section" --no-clipboard
        `
    );

  program.parse();

  const options = program.opts();
  const text = program.args[0];

  // Validate inputs
  const width = parseInt(options.width);
  if (isNaN(width) || width < 20) {
    console.error("Error: Width must be a number and at least 20 characters");
    process.exit(1);
  }

  if (options.char.length !== 1) {
    console.error("Error: Character must be a single character");
    process.exit(1);
  }

  if (!["center", "left", "right"].includes(options.style)) {
    console.error("Error: Style must be one of: center, left, right");
    process.exit(1);
  }

  try {
    // Generate the comment
    const comment = generateSectionComment(
      text,
      width,
      options.char,
      options.style
    );

    // Print to terminal
    console.log(comment);

    // Copy to clipboard unless disabled
    if (options.clipboard !== false) {
      const success = copyToClipboard(comment);
      if (success) {
        console.log("\n✓ Copied to clipboard!");
      } else {
        console.log("\n⚠ Printed to terminal (clipboard copy failed)");
      }
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Handle uncaught errors gracefully
process.on("uncaughtException", (error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});

process.on("unhandledRejection", (error) => {
  console.error(`Unexpected error: ${error.message}`);
  process.exit(1);
});

// Run the main function
if (require.main === module) {
  main().catch((error) => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
}