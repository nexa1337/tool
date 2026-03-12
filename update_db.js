import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./extracted_data.json', 'utf8'));

const categoriesToUpdate = [
  'Accounts',
  'Social Media',
  'Learn English',
  'AI IDE Core'
];

const categoryMap = {
  'Accounts': 'accounts',
  'Social Media': 'social-media',
  'Learn English': 'learn-english',
  'AI IDE Core': 'ai-ide-core'
};

const aiAgentHostingData = [
  { name: 'Kamatera', description: 'VPS hosting - ميزانية متوسطة، تحكم كامل', link: 'https://www.kamatera.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['vps', 'hosting', 'cloud'], logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQG7BZ8IYavhmg/company-logo_200_200/company-logo_200_200/0/1669023403847/kamateracloud_logo?e=2147483647&v=beta&t=Q2olWY8kKFP1vgWbONks256-acw5El5ztGkqAbc4KeY' },
  { name: 'Contabo', description: 'VPS hosting - ميزانية متوسطة، تحكم كامل', link: 'https://contabo.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['vps', 'hosting'], logo: 'https://cdn-1.webcatalog.io/catalog/contabo/contabo-icon-filled-256.png?v=1714778097384' },
  { name: 'DigitalOcean', description: 'Cloud VPS - ميزانية متوسطة، تحكم كامل', link: 'https://www.digitalocean.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['vps', 'hosting', 'cloud'], logo: 'https://www.digitalocean.com/_next/static/media/apple-touch-icon.d7edaa01.png' },
  { name: 'Vultr', description: 'Cloud VPS - ميزانية متوسطة، تحكم كامل', link: 'https://www.vultr.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['vps', 'hosting', 'cloud'], logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1qr4Vge4waJqBMJXubICNsKRGInZWWTpRQ&s' },
  { name: 'Google Cloud', description: 'Cloud Server - ميزانية مرتفعة، موثوقية أكبر', link: 'https://cloud.google.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['cloud', 'hosting', 'google'], logo: 'https://yt3.googleusercontent.com/ytc/AIdro_n94STjDykDksYxhfE4RhM1BT4R2H69tIAHav8jrey03qQ=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Amazon AWS', description: 'Cloud Server - ميزانية مرتفعة، موثوقية أكبر', link: 'https://aws.amazon.com', category: 'AI Agent Hosting', status: 'Paid', tags: ['cloud', 'hosting', 'aws'], logo: 'https://www.inovex.de/wp-content/uploads/Amazon_Web_Services_Logo-kl.png' },
  { name: 'Microsoft Azure', description: 'Cloud Server - ميزانية مرتفعة، موثوقية أكبر', link: 'https://azure.microsoft.com/', category: 'AI Agent Hosting', status: 'Paid', tags: ['cloud', 'hosting', 'microsoft'], logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png' },
];

let dbFile = fs.readFileSync('./src/data/database.ts', 'utf8');

for (const cat of categoriesToUpdate) {
  const items = data.filter(d => d.category === cat);
  const entriesStr = items.map(item => {
    return `          {
            title: ${JSON.stringify(item.name)},
            url: ${JSON.stringify(item.link)},
            description: ${JSON.stringify(item.description)},
            pricing: ${JSON.stringify(item.status === 'Free' ? 'Free' : item.status === 'Freemium' ? 'Freemium' : 'Paid')},
            iconUrl: ${JSON.stringify(item.logo)}
          }`;
  }).join(',\n');
  
  const id = categoryMap[cat];
  const regex = new RegExp(`('${id}':\\s*\\{[\\s\\S]*?subcategories:\\s*\\[\\s*\\{\\s*title:\\s*'[^']+',\\s*entries:\\s*\\[)([^\\]]*)(\\]\\s*\\}\\s*\\]\\s*\\})`);
  dbFile = dbFile.replace(regex, `$1\n${entriesStr}\n$3`);
}

// AI Agent Hosting
const aiAgentEntriesStr = aiAgentHostingData.map(item => {
  return `          {
            title: ${JSON.stringify(item.name)},
            url: ${JSON.stringify(item.link)},
            description: ${JSON.stringify(item.description)},
            pricing: ${JSON.stringify(item.status === 'Free' ? 'Free' : item.status === 'Freemium' ? 'Freemium' : 'Paid')},
            iconUrl: ${JSON.stringify(item.logo)}
          }`;
}).join(',\n');

const aiAgentRegex = new RegExp(`('ai-agent-hosting':\\s*\\{[\\s\\S]*?subcategories:\\s*\\[\\s*\\{\\s*title:\\s*'[^']+',\\s*entries:\\s*\\[)([^\\]]*)(\\]\\s*\\}\\s*\\]\\s*\\})`);
dbFile = dbFile.replace(aiAgentRegex, `$1\n${aiAgentEntriesStr}\n$3`);

fs.writeFileSync('./src/data/database.ts', dbFile);
