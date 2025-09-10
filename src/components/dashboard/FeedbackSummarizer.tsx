import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, FileText, Loader2 } from "lucide-react";

export function FeedbackSummarizer() {
  const [feedback, setFeedback] = useState("");
  const [summary, setSummary] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const generateSummary = async () => {
    if (!feedback.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock AI-generated summary based on input length and content
    const mockSummary = generateMockSummary(feedback);
    setSummary(mockSummary);
    setIsProcessing(false);
  };

  const generateMockSummary = (input: string) => {
    const wordCount = input.trim().split(/\s+/).length;
    const hasPositive = /good|great|excellent|positive|support|approve|like|satisfied/i.test(input);
    const hasNegative = /bad|poor|terrible|negative|oppose|disapprove|hate|dissatisfied|concern|issue|problem/i.test(input);
    const hasCostConcerns = input.toLowerCase().includes("cost") || input.toLowerCase().includes("expense");
    const hasTimeConcerns = input.toLowerCase().includes("time") || input.toLowerCase().includes("deadline");
    const hasTransparencyMentions = input.toLowerCase().includes("transparency") || input.toLowerCase().includes("disclosure");

    // Generate first paragraph - overall tone and sentiment
    let firstParagraph = "";
    if (hasPositive && hasNegative) {
      firstParagraph = "The stakeholder feedback presents a nuanced perspective on the proposed corporate governance reforms, reflecting both enthusiasm for enhanced accountability measures and legitimate concerns about implementation challenges. Respondents demonstrate active engagement with the policy details, offering constructive criticism alongside supportive commentary that indicates a collaborative approach to regulatory improvement.";
    } else if (hasPositive) {
      firstParagraph = "Stakeholder responses demonstrate strong support for the proposed corporate governance reforms, with participants expressing appreciation for the structured approach to regulatory enhancement. The feedback reflects confidence in the ministry's direction and optimism about the potential positive impact on corporate accountability and transparency standards.";
    } else if (hasNegative) {
      firstParagraph = "The feedback reveals significant stakeholder concerns regarding the proposed corporate governance reforms, with participants raising substantive questions about implementation feasibility and potential unintended consequences. While the engagement level remains high, the tone suggests a need for further consultation and refinement of the proposed measures.";
    } else {
      firstParagraph = "Stakeholder feedback on the corporate governance reforms demonstrates measured and analytical engagement, with participants focusing primarily on technical and procedural aspects of the proposed changes. The responses reflect careful consideration of the policy implications without strong emotional positioning, suggesting a professional and methodical approach to the consultation process.";
    }

    // Generate second paragraph - specific themes and issues
    let secondParagraph = "Key themes emerging from the consultation include ";
    let themes = [];
    
    if (hasCostConcerns) themes.push("financial implications of compliance requirements");
    if (hasTimeConcerns) themes.push("implementation timeline considerations");
    if (hasTransparencyMentions) themes.push("transparency and disclosure mechanisms");
    
    if (themes.length === 0) {
      themes.push("operational efficiency", "regulatory clarity", "stakeholder communication");
    }
    
    secondParagraph += themes.join(", ") + ". ";
    
    if (hasNegative) {
      secondParagraph += "Participants express particular concern about resource allocation challenges and the potential burden on smaller organizations, while also acknowledging the importance of strengthening corporate governance standards. The feedback suggests that while the policy objectives are well-received, there is a clear need for more detailed guidance on implementation pathways and support mechanisms.";
    } else if (hasPositive) {
      secondParagraph += "Participants highlight the benefits of standardized reporting requirements and enhanced board accountability measures, viewing these changes as necessary evolution in corporate governance practices. The positive reception indicates strong stakeholder buy-in for the reform agenda and confidence in the ministry's approach to balancing regulatory rigor with practical implementation considerations.";
    } else {
      secondParagraph += "The responses focus on practical considerations around implementation logistics, reporting requirements, and coordination mechanisms. Stakeholders demonstrate thorough understanding of the proposed changes and offer valuable insights for optimizing the regulatory framework to achieve its intended objectives while minimizing administrative burden.";
    }

    return `🤖 Generated Summary (Transformer-based)

${firstParagraph}

${secondParagraph}`;
  };

  const clearAll = () => {
    setFeedback("");
    setSummary("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-primary" />
          Feedback Summarizer
        </CardTitle>
        <CardDescription>
          Process public comments and generate AI-powered summaries with key insights
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-foreground">
            Paste feedback content for analysis
          </label>
          <Textarea
            placeholder="Paste public comments, stakeholder feedback, or survey responses here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="min-h-32 resize-none"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {feedback.trim().split(/\s+/).filter(word => word.length > 0).length} words
            </span>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={clearAll}
                disabled={!feedback && !summary}
              >
                Clear
              </Button>
              <Button
                onClick={generateSummary}
                disabled={!feedback.trim() || isProcessing}
                size="sm"
                className="gap-2"
              >
                {isProcessing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <FileText className="w-4 h-4" />
                )}
                {isProcessing ? "Processing..." : "Generate Summary"}
              </Button>
            </div>
          </div>
        </div>

        {summary && (
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="gap-1">
                <Bot className="w-3 h-3" />
                AI Generated
              </Badge>
              <span className="text-xs text-muted-foreground">
                Professional analysis completed
              </span>
            </div>
            <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-l-primary/20">
              <pre className="text-sm text-foreground whitespace-pre-wrap font-sans">
                {summary}
              </pre>
            </div>
          </div>
        )}

        {!summary && !isProcessing && (
          <div className="bg-muted/30 rounded-lg p-6 text-center">
            <Bot className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              Enter feedback content above and click "Generate Summary" to analyze
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}