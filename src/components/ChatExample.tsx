import { useState, useRef, useEffect, memo } from 'react';
import { Bot, User, Play, RotateCcw, Check, Copy } from 'lucide-react';
import { LazyMotion, domAnimation, m, useInView } from 'motion/react';
import { useVirtualizer } from '@tanstack/react-virtual';

export interface ChatMessage {
  role: 'user' | 'agent';
  content: string;
  delay?: number; // Delay before showing this message in interactive mode
}

interface ChatExampleProps {
  messages: ChatMessage[];
  title?: string;
  interactive?: boolean;
}

export const ChatExample = memo(function ChatExample({ messages, title, interactive = true }: ChatExampleProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [visibleCount, setVisibleCount] = useState(interactive ? 0 : messages.length);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  const showTypingIndicator = isPlaying && visibleCount < messages.length && messages[visibleCount].role === 'agent';
  const totalItems = visibleCount + (showTypingIndicator ? 1 : 0);

  const rowVirtualizer = useVirtualizer({
    count: totalItems,
    getScrollElement: () => scrollRef.current,
    estimateSize: () => 80,
    overscan: 5,
  });

  const clearCurrentTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearCurrentTimeout();
  }, []);

  const handlePlay = () => {
    clearCurrentTimeout();
    setIsPlaying(true);
    setVisibleCount(0);
    
    let currentCount = 0;
    const showNext = () => {
      if (currentCount < messages.length) {
        currentCount++;
        setVisibleCount(currentCount);
        const nextDelay = messages[currentCount]?.delay || 800;
        if (currentCount < messages.length) {
          timeoutRef.current = setTimeout(showNext, nextDelay);
        } else {
          setIsPlaying(false);
        }
      }
    };
    
    timeoutRef.current = setTimeout(showNext, messages[0].delay || 400);
  };

  useEffect(() => {
    if (interactive && isInView && !hasAutoPlayed && visibleCount === 0) {
      setHasAutoPlayed(true);
      handlePlay();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, interactive, hasAutoPlayed, visibleCount]);

  useEffect(() => {
    if (isPlaying && scrollRef.current) {
      rowVirtualizer.scrollToIndex(totalItems - 1, { align: 'end' });
    }
  }, [totalItems, isPlaying, rowVirtualizer]);

  const handleReset = () => {
    clearCurrentTimeout();
    setIsPlaying(false);
    setVisibleCount(0);
  };

  const handleCopy = async (text: string, index: number) => {
    await navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div ref={containerRef} className="my-8 rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
          </div>
          {title && <span className="ml-2 text-xs font-medium text-gray-500 uppercase tracking-wider">{title}</span>}
        </div>
        
        {interactive && (
          <div className="flex items-center gap-2">
            {visibleCount === messages.length ? (
              <button 
                onClick={handleReset}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 transition-colors"
                title="Replay the chat animation"
              >
                <RotateCcw size={12} aria-hidden="true" /> Replay
              </button>
            ) : (
              <button 
                onClick={handlePlay}
                disabled={isPlaying}
                className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 rounded-md shadow-sm transition-colors"
                title="Play the chat animation"
              >
                <Play size={12} className={isPlaying ? "animate-pulse" : ""} aria-hidden="true" /> 
                {isPlaying ? "Playing..." : "Simulate"}
              </button>
            )}
          </div>
        )}
      </div>

      <div ref={scrollRef} className="p-3 sm:p-6 min-h-[120px] max-h-[400px] overflow-y-auto bg-gray-50/30 relative">
        <LazyMotion features={domAnimation}>
          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const idx = virtualRow.index;
              const isTypingIndicator = idx === visibleCount;
              
              if (isTypingIndicator) {
                return (
                  <div
                    key="typing-indicator"
                    data-index={idx}
                    ref={rowVirtualizer.measureElement}
                    className="absolute top-0 left-0 w-full py-1.5 sm:py-2"
                    style={{
                      transform: `translateY(${virtualRow.start}px)`,
                    }}
                  >
                    <m.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2 sm:gap-3 mr-auto"
                    >
                      <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-sm">
                        <Bot className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                      </div>
                      <div className="px-4 py-3 bg-white border border-gray-100 rounded-2xl rounded-tl-sm shadow-sm flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </m.div>
                  </div>
                );
              }

              const msg = messages[idx];
              return (
                <div
                  key={idx}
                  data-index={idx}
                  ref={rowVirtualizer.measureElement}
                  className="absolute top-0 left-0 w-full py-1.5 sm:py-2"
                  style={{
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  <m.div
                    initial={idx >= visibleCount - 1 ? { opacity: 0, y: 10, scale: 0.98 } : false}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`flex gap-2 sm:gap-3 max-w-[95%] sm:max-w-[90%] ${msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'}`}
                  >
                    <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-sm ${
                      msg.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {msg.role === 'user' ? <User className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" /> : <Bot className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />}
                    </div>
                    
                    <div className="group relative">
                      <div className={`px-3 py-2 sm:px-4 sm:py-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.role === 'user' 
                          ? 'bg-blue-600 text-white rounded-tr-sm' 
                          : 'bg-white border border-gray-100 text-gray-800 rounded-tl-sm'
                      }`}>
                        <div className="whitespace-pre-wrap font-sans">{msg.content}</div>
                      </div>
                      
                      {msg.role === 'user' && (
                        <button
                          onClick={() => handleCopy(msg.content, idx)}
                          className="absolute top-2 -left-8 p-1.5 text-gray-400 hover:text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-md shadow-sm border border-gray-100"
                          title="Copy prompt"
                          aria-label="Copy prompt"
                        >
                          {copiedIndex === idx ? <Check size={12} className="text-green-600" aria-hidden="true" /> : <Copy size={12} aria-hidden="true" />}
                        </button>
                      )}
                    </div>
                  </m.div>
                </div>
              );
            })}
          </div>
        </LazyMotion>
      </div>
    </div>
  );
});
