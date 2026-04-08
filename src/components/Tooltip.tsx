import { ReactNode, useId } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  key?: string | number;
  interactiveChild?: boolean;
  position?: 'top' | 'bottom';
}

export function Tooltip({ children, content, interactiveChild = false, position = 'top' }: TooltipProps) {
  const tooltipId = useId();
  
  const positionClasses = position === 'top' 
    ? 'bottom-full mb-2' 
    : 'top-full mt-2';
    
  const arrowClasses = position === 'top'
    ? 'top-full border-t-gray-900'
    : 'bottom-full border-b-gray-900';
  
  return (
    <span 
      className={`group relative inline-flex items-center justify-center ${interactiveChild ? '' : 'cursor-help focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm'}`}
      tabIndex={interactiveChild ? undefined : 0}
      aria-describedby={tooltipId}
    >
      {children}
      <div 
        id={tooltipId}
        role="tooltip"
        className={`absolute left-1/2 -translate-x-1/2 ${positionClasses} w-max max-w-[200px] sm:max-w-[250px] p-2 bg-gray-900 text-white text-xs leading-relaxed rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50 text-center shadow-xl pointer-events-none`}
      >
        {content}
        <div className={`absolute left-1/2 -translate-x-1/2 border-4 border-transparent ${arrowClasses}`}></div>
      </div>
    </span>
  );
}
