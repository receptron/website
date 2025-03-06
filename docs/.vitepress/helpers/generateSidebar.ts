import path from "path";
import fs from "fs";

// Function to generate a title from a filename
const generateTitleFromFilename = (filename: string): string => {
  // Remove .md extension and replace dashes and underscores with spaces
  const basename = path.basename(filename, ".md").replace(/[-_]/g, " ");

  // Capitalize the first letter of each word
  return basename;
};

export const generateSidebar = (dirRelativePath: string, sidebarTitle: string) => {
  const targetDir = path.resolve(__dirname, `../../${dirRelativePath}`);
  const categories = new Map();

  // Scan all folders in the directory
  const dirItems = fs.readdirSync(targetDir);
  const directories: string[] = [];
  const rootFiles: string[] = [];

  // Classify items into directories and files
  dirItems.forEach((item) => {
    const itemPath = path.join(targetDir, item);
    const stats = fs.statSync(itemPath);

    if (stats.isDirectory() && !item.startsWith(".")) {
      directories.push(item);
    } else if (stats.isFile() && item.endsWith(".md") && item !== "index.md") {
      rootFiles.push(item);
    }
  });

  // Process as usual if subdirectories exist
  if (directories.length > 0) {
    // Add subdirectories as categories
    directories.forEach((dir) => {
      const categoryName = generateTitleFromFilename(dir);
      categories.set(categoryName, []);
    });

    // Add files to each category
    for (const [categoryName, items] of categories.entries()) {
      const categoryDirPath = path.join(targetDir, categoryName.toLowerCase().replace(/ /g, "-"));
      const categoryFiles = fs.readdirSync(categoryDirPath);

      categoryFiles.forEach((file) => {
        // Process only .md files
        if (file.endsWith(".md") && file !== "index.md") {
          const filePath = path.join(categoryDirPath, file);
          const isFile = fs.statSync(filePath).isFile();

          if (isFile) {
            const itemName = generateTitleFromFilename(file);
            const itemLink = `/${dirRelativePath}/${categoryName.toLowerCase().replace(/ /g, "-")}/${path.basename(file, ".md")}`;

            items.push({
              text: itemName,
              link: itemLink,
            });
          }
        }
      });
    }
  }

  // Generate sidebar structure
  const sidebarItems = [
    {
      text: sidebarTitle,
      items: [] as any[],
    },
  ];

  // Add categories if subdirectories exist
  for (const [category, items] of categories.entries()) {
    // Do not add empty categories
    if (items.length > 0) {
      sidebarItems[0].items.push({
        text: category,
        collapsed: true,
        items: items,
      });
    }
  }

  // Directly add root directory files if no subdirectories exist
  if (rootFiles.length > 0) {
    // Branch based on the presence of subdirectories
    if (directories.length === 0) {
      // Directly add items if no subdirectories exist
      rootFiles.forEach((file) => {
        const itemName = generateTitleFromFilename(file);
        const itemLink = `/${dirRelativePath}/${path.basename(file, ".md")}`;

        sidebarItems[0].items.push({
          text: itemName,
          link: itemLink,
        });
      });
    } else {
      // Add as "Others" category if subdirectories exist
      const otherItems = rootFiles.map((file) => {
        const itemName = generateTitleFromFilename(file);
        const itemLink = `/${dirRelativePath}/${path.basename(file, ".md")}`;

        return {
          text: itemName,
          link: itemLink,
        };
      });

      if (otherItems.length > 0) {
        sidebarItems[0].items.push({
          text: "Others",
          collapsed: true,
          items: otherItems,
        });
      }
    }
  }

  return sidebarItems;
};

// Keep the original function as a wrapper for the generic function
export const generateAgentsSidebar = () => {
  return generateSidebar("agents", "Agents");
};
