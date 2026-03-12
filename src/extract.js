import fs from 'fs';

async function main() {
  const res = await fetch('https://nexa1337.github.io/tool/assets/index-Bzx9BTfq.js');
  const text = await res.text();
  
  // Find the array of objects that have name, description, link, category, status, tags, logo
  const regex = /\{name:"([^"]+)",description:"([^"]+)",link:"([^"]+)",category:"([^"]+)",status:"([^"]+)",tags:\[([^\]]+)\],logo:"([^"]+)"\}/g;
  
  let match;
  const items = [];
  while ((match = regex.exec(text)) !== null) {
    items.push({
      name: match[1],
      description: match[2],
      link: match[3],
      category: match[4],
      status: match[5],
      tags: match[6].split(',').map(t => t.replace(/"/g, '')),
      logo: match[7]
    });
  }
  
  console.log(JSON.stringify(items, null, 2));
}

main();
