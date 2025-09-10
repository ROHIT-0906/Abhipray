import { useState } from "react";

const mockWords = [
  { text: "corporate", size: 28, sentiment: "neutral", frequency: 145 },
  { text: "governance", size: 24, sentiment: "positive", frequency: 128 },
  { text: "compliance", size: 22, sentiment: "neutral", frequency: 112 },
  { text: "transparency", size: 26, sentiment: "positive", frequency: 134 },
  { text: "regulation", size: 20, sentiment: "negative", frequency: 98 },
  { text: "accountability", size: 25, sentiment: "positive", frequency: 131 },
  { text: "framework", size: 18, sentiment: "neutral", frequency: 89 },
  { text: "implementation", size: 21, sentiment: "negative", frequency: 103 },
  { text: "stakeholder", size: 23, sentiment: "positive", frequency: 119 },
  { text: "policy", size: 19, sentiment: "neutral", frequency: 92 },
  { text: "efficiency", size: 17, sentiment: "positive", frequency: 85 },
  { text: "burden", size: 16, sentiment: "negative", frequency: 78 },
  { text: "innovation", size: 24, sentiment: "positive", frequency: 126 },
  { text: "complexity", size: 15, sentiment: "negative", frequency: 74 },
  { text: "reform", size: 22, sentiment: "positive", frequency: 114 },
];

const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case 'positive': return 'hsl(var(--sentiment-positive))';
    case 'negative': return 'hsl(var(--sentiment-negative))';
    default: return 'hsl(var(--sentiment-neutral))';
  }
};

export function WordCloudComponent() {
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  return (
    <div className="w-full h-80 relative">
      <div className="flex flex-wrap items-center justify-center gap-2 p-4 h-full">
        {mockWords.map((word, index) => (
          <span
            key={index}
            className="cursor-pointer transition-all duration-200 hover:scale-110 font-medium"
            style={{
              fontSize: `${word.size}px`,
              color: getSentimentColor(word.sentiment),
              opacity: selectedWord && selectedWord !== word.text ? 0.3 : 1
            }}
            onClick={() => setSelectedWord(selectedWord === word.text ? null : word.text)}
            title={`${word.text}: ${word.frequency} mentions (${word.sentiment})`}
          >
            {word.text}
          </span>
        ))}
      </div>
      
      {selectedWord && (
        <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur border rounded-lg p-3 shadow-lg">
          <div className="text-sm">
            <div className="font-semibold">{selectedWord}</div>
            <div className="text-muted-foreground">
              {mockWords.find(w => w.text === selectedWord)?.frequency} mentions
            </div>
            <div className="text-xs capitalize">
              {mockWords.find(w => w.text === selectedWord)?.sentiment} sentiment
            </div>
          </div>
        </div>
      )}
      
      <div className="absolute top-2 right-2 text-xs text-muted-foreground">
        Click words for details
      </div>
    </div>
  );
}