'use client';

import { useState, useRef } from 'react';
import { Copy } from 'lucide-react';
import { getFontsByCategory } from '@/utils/fontConverter';

export default function FontGenerator() {
  const [inputText, setInputText] = useState('Font Generator');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const fontListRef = useRef<HTMLDivElement>(null);

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    // 滚动到字体列表顶部
    if (fontListRef.current) {
      fontListRef.current.scrollTop = 0;
    }
  };

  const categories = [
    { id: 'Recent', name: 'Recent', icon: '🕒' },
    { id: 'All', name: 'All', icon: '📝' },
    { id: 'Cool', name: 'Cool', icon: '❄️' },
    { id: 'Fancy', name: 'Fancy', icon: '💎' },
    { id: 'Cursive', name: 'Cursive', icon: '✍️' },
    { id: 'Small', name: 'Small', icon: 'Aa' },
    { id: 'Bold', name: 'Bold', icon: 'B' },
    { id: 'Glitch', name: 'Glitch', icon: '⚡' },
    { id: 'Bubble', name: 'Bubble', icon: '🫧' },
    { id: 'Squared', name: 'Squared', icon: '⬜' },
    { id: 'Circled', name: 'Circled', icon: '⭕' },
    { id: 'Underlined', name: 'Underlined', icon: '📑' },
    { id: 'Strikethrough', name: 'Strikethrough', icon: '🚫' },
    { id: 'Inverted', name: 'Inverted', icon: '🔄' },
    { id: 'Mirrored', name: 'Mirrored', icon: '🪞' },
    { id: 'Monospace', name: 'Monospace', icon: '💻' },
    { id: 'Serif', name: 'Serif', icon: '📰' },
    { id: 'Double Struck', name: 'Double Struck', icon: '🔢' },
    { id: 'Fraktur', name: 'Fraktur', icon: '🏰' },
    { id: 'Script', name: 'Script', icon: '📜' },
    { id: 'Symbol text', name: 'Symbol text', icon: '⭐' },
    { id: 'Text art', name: 'Text art', icon: '🎨' },
    { id: 'Elegant Fonts', name: 'Elegant Fonts', icon: '👑' },
    { id: 'Linear Text Fonts', name: 'Linear Text Fonts', icon: '📏' },
    { id: 'Connected Fonts', name: 'Connected Fonts', icon: '🔗' },
    { id: 'Crowned Aesthetic Letters', name: 'Crowned Aesthetic Letters', icon: '♔' },
    { id: 'Intersected Fonts', name: 'Intersected Fonts', icon: '✂️' },
    { id: 'Framed Fonts', name: 'Framed Fonts', icon: '🖼️' },
    { id: 'Random Fonts', name: 'Random Fonts', icon: '🎲' },
    { id: 'Flowing Fonts', name: 'Flowing Fonts', icon: '🌊' },
    { id: 'Decorated Text', name: 'Decorated Text', icon: '🎀' },
    { id: 'Fancy Decorated Fonts', name: 'Fancy Decorated Fonts', icon: '✨' }
  ];

  return (
    <>
      {/* Sticky Input Section */}
      <section className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="w-full">
          <label htmlFor="font-input" className="sr-only">
            Enter text to convert to fancy fonts
          </label>
          <input
            id="font-input"
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none"
            placeholder="Add text here to get started..."
            aria-label="Text input for font generation"
          />
        </div>
      </section>

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Font Categories */}
        <div className="w-full lg:w-80 bg-white border-b lg:border-b-0 lg:border-r border-gray-200 p-4 lg:p-6 lg:sticky lg:top-[88px] lg:h-fit lg:max-h-[calc(100vh-120px)]">
          <p className="text-sm font-medium text-gray-700 mb-4">Select a font style</p>
          
          <div className="space-y-2 lg:max-h-[calc(100vh-300px)] lg:overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Content - Font Results */}
        <div className="flex-1 p-4 lg:p-6">
          <div className="mb-4 lg:mb-6">
            <p className="text-lg font-medium text-gray-800">
              {selectedCategory === 'All' ? 'All Fonts' : `${selectedCategory} Fonts`}
            </p>
          </div>

          <div ref={fontListRef} className="space-y-2 max-h-[calc(100vh-300px)] overflow-y-auto">
            {getFontsByCategory(selectedCategory === 'Recent' ? 'All' : selectedCategory).map((style, index) => {
              const convertedText = style.convert(inputText);
              return (
                <div
                  key={index}
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(convertedText);
                      setCopiedIndex(index);
                      setTimeout(() => setCopiedIndex(null), 2000);
                    } catch (err) {
                      console.error('Failed to copy text: ', err);
                    }
                  }}
                  className={`group relative bg-white border-2 rounded-xl px-4 py-3 lg:px-5 lg:py-3 transition-all duration-300 cursor-pointer overflow-hidden ${
                    copiedIndex === index
                      ? 'border-green-400 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg shadow-green-100 scale-[1.01]'
                      : 'border-gray-200 hover:border-purple-300 hover:shadow-lg hover:shadow-purple-100 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50'
                  }`}
                  title="Click to copy"
                >
                  {/* Subtle background pattern */}
                  <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-purple-600 to-pink-600 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 w-fit border border-purple-200">
                        {style.category}
                      </span>
                      <span className="text-sm text-gray-600 font-medium">{style.name}</span>
                    </div>
                    {copiedIndex === index && (
                      <div className="flex items-center gap-2 text-green-600 text-sm font-semibold animate-pulse">
                        <Copy className="w-4 h-4" />
                        <span>Copied!</span>
                      </div>
                    )}
                  </div>
                  <div className="relative text-lg sm:text-xl lg:text-2xl font-medium text-gray-900 break-all leading-relaxed">
                    {convertedText}
                  </div>

                  {/* Copy icon */}
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                    <Copy className="w-5 h-5 text-gray-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
