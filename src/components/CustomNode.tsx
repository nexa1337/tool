import { Handle, Position } from '@xyflow/react';
import { memo } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Info } from 'lucide-react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const categoryColors: Record<string, string> = {
  Basics: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-400',
  Core: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-400',
  Specialization: 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-400',
  Advanced: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-400',
  Expert: 'bg-rose-500/10 border-rose-500/30 text-rose-700 dark:text-rose-400',
};

const CustomNode = ({ data, isConnectable }: any) => {
  const colorClass = categoryColors[data.category] || 'bg-gray-500/10 border-gray-500/30 text-gray-700 dark:text-gray-400';

  return (
    <div className="group px-4 py-3 shadow-sm hover:shadow-md transition-all cursor-pointer rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 min-w-[250px] max-w-[280px]">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
        className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 border-none"
      />
      
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm leading-tight">
            {data.label}
          </div>
          <div className="text-zinc-400 group-hover:text-blue-500 transition-colors shrink-0">
            <Info className="w-4 h-4" />
          </div>
        </div>
        
        {data.category && (
          <div className={cn('text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full w-fit', colorClass)}>
            {data.category}
          </div>
        )}
        
        {data.description && (
          <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mt-1">
            {data.description}
          </div>
        )}
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-600 border-none"
      />
    </div>
  );
};

export default memo(CustomNode);
