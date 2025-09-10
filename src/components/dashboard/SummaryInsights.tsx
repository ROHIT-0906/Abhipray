import { Bot } from "lucide-react";

export function SummaryInsights() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Bot className="w-4 h-4 text-primary" />
        <span className="text-sm font-medium">AI Analysis Complete</span>
      </div>
      
      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-l-primary/20">
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-foreground">🤖 Generated Summary (Transformer-based)</h3>
          
          <div className="text-sm text-foreground leading-relaxed space-y-3">
            <p>
              The comprehensive analysis of public comments reveals predominantly positive stakeholder sentiment towards the proposed corporate governance reforms, with strong endorsement for enhanced transparency measures and accountability frameworks. Participants demonstrate sophisticated understanding of the regulatory landscape and express confidence in the ministry's approach to strengthening corporate governance standards. The high level of engagement from diverse stakeholders—including investors, regulatory bodies, and civil society organizations—indicates robust democratic participation in the policymaking process and validates the consultation methodology employed.
            </p>
            
            <p>
              While the overall reception remains favorable, stakeholders consistently highlight implementation timeline and compliance cost considerations as primary areas requiring attention. The feedback suggests that while there is broad consensus on the necessity and direction of the reforms, practical concerns about resource allocation and operational readiness present legitimate challenges that warrant careful consideration. Respondents appreciate the structured approach to regulatory enhancement but emphasize the need for adequate support mechanisms and realistic timelines to ensure successful implementation without creating undue burden on organizations, particularly smaller entities with limited compliance infrastructure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}