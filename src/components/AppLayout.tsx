import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 flex items-center border-b bg-card px-6 shadow-sm">
            <SidebarTrigger className="lg:hidden" />
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">Abhipray</div>
              <div className="text-sm text-muted-foreground">The Citizen's Compass</div>
            </div>
          </header>
          <main className="flex-1 p-6 bg-gov-gray/30">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}