import React from 'react';

interface LegendProps {
    domainColors: Record<string, { color: string; textColor: string; }>;
}

export const Legend: React.FC<LegendProps> = ({ domainColors }) => {
    return (
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
            {Object.keys(domainColors).map((name) => (
                <div key={name} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: domainColors[name].color }}
                    ></span>
                    <span>{name}</span>
                </div>
            ))}
        </div>
    );
};