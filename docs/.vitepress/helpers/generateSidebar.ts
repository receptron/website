import path from "path";
import fs from "fs";

export const generateAgentsSidebar = () => {
  const agentsDir = path.resolve(__dirname, '../../agents');
  const indexContent = fs.readFileSync(path.join(agentsDir, 'index.md'), 'utf-8');
  const lines = indexContent.split('\n');

  const categories = lines.reduce((categoriesMap, line) => {
    const categoryMatch = line.match(/^## (.+)$/);
    if (categoryMatch) {
      const category = categoryMatch[1];
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }
      return categoriesMap;
    }

    const agentMatch = line.match(/^### \[(.+)\]\((.+)\)$/);
    if (agentMatch) {
      const currentCategory = Array.from(categoriesMap.keys()).pop();
      if (currentCategory) {
        const agentName = agentMatch[1];
        const agentPath = (function() {
          const path = agentMatch[2].startsWith('./')
            ? '/agents/' + agentMatch[2].substring(2).replace(/\.md$/, '')
            : agentMatch[2];
          return path;
        })();

        const items = categoriesMap.get(currentCategory) || [];
        items.push({
          text: agentName,
          link: agentPath
        });
        categoriesMap.set(currentCategory, items);
      }
    }

    return categoriesMap;
  }, new Map());

  const sidebarItems = [
    {
      text: "Agents",
      link: "/agents/index",
      items: [] as any[]
    }
  ];

  for (const [category, agents] of categories.entries()) {
    sidebarItems[0].items.push({
      text: category,
      collapsed: true,
      items: agents
    });
  }

  return sidebarItems;
}
