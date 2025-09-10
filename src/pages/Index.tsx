// Update this page (the content is just a fallback if you fail to update the page)

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, FileSpreadsheet, File, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const validTypes = ['application/pdf', 'text/csv', 'text/plain', 'application/vnd.ms-excel'];
      if (validTypes.includes(file.type) || file.name.endsWith('.txt') || file.name.endsWith('.csv')) {
        setSelectedFile(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select a PDF, CSV, or TXT file.",
          variant: "destructive"
        });
      }
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a file to analyze.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Analysis started",
      description: `Processing ${selectedFile.name}...`
    });

    // Simulate processing time
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const getFileIcon = (fileName: string) => {
    if (fileName.endsWith('.pdf')) return <FileText className="w-5 h-5 text-red-500" />;
    if (fileName.endsWith('.csv') || fileName.endsWith('.xlsx')) return <FileSpreadsheet className="w-5 h-5 text-green-500" />;
    return <File className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-gov-gray/50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="w-32 h-16 rounded-2xl flex items-center justify-center mx-auto">
            <span className="text-2xl font-bold text-primary">Abhipray</span>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Sentiment Analysis of Public Comments
            </h1>
            <p className="text-xl text-muted-foreground">Ministry of Corporate Affairs</p>
          </div>
        </div>

        {/* Main Upload Card */}
        <Card className="shadow-lg border-0 bg-card/80 backdrop-blur">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl">Upload Comments for Analysis</CardTitle>
            <CardDescription className="text-base">
              Upload your PDF, CSV, or TXT files containing public comments for AI-powered sentiment analysis
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* File Upload Area */}
            <div className="space-y-4">
              <Label htmlFor="file-upload" className="text-base font-medium">
                Select File
              </Label>
              
              <div className="relative">
                <Input
                  id="file-upload"
                  type="file"
                  accept=".pdf,.csv,.txt,.xlsx"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                
                <label 
                  htmlFor="file-upload" 
                  className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-muted-foreground/25 rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                >
                  <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                  <span className="text-sm text-muted-foreground">
                    Click to browse or drag and drop your file
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    Supports PDF, CSV, TXT files
                  </span>
                </label>
              </div>

              {/* Selected File Display */}
              {selectedFile && (
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg border">
                  {getFileIcon(selectedFile.name)}
                  <div className="flex-1">
                    <p className="font-medium text-sm">{selectedFile.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Button */}
            <Button 
              onClick={handleAnalyze}
              className="w-full h-12 text-lg gap-2"
              disabled={!selectedFile}
            >
              Analyze Comments
              <ArrowRight className="w-5 h-5" />
            </Button>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              <div className="text-center p-4 bg-sentiment-positive/10 rounded-lg">
                <div className="font-semibold text-sentiment-positive text-lg">Positive</div>
                <div className="text-xs text-muted-foreground">Favorable comments</div>
              </div>
              <div className="text-center p-4 bg-sentiment-negative/10 rounded-lg">
                <div className="font-semibold text-sentiment-negative text-lg">Negative</div>
                <div className="text-xs text-muted-foreground">Critical feedback</div>
              </div>
              <div className="text-center p-4 bg-sentiment-neutral/10 rounded-lg">
                <div className="font-semibold text-sentiment-neutral text-lg">Neutral</div>
                <div className="text-xs text-muted-foreground">Balanced opinions</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Access */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Already have analysis results?</p>
          <Button variant="outline" onClick={() => navigate('/dashboard')} className="gap-2">
            View Dashboard
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
