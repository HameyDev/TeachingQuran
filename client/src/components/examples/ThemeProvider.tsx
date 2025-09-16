import { ThemeProvider, useTheme } from '../ThemeProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ThemeExample() {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Theme Example</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Current theme: {theme}</p>
          <p>Is dark mode: {isDark ? 'Yes' : 'No'}</p>
          
          <div className="flex space-x-2">
            <Button onClick={toggleTheme} variant="default">
              Toggle Theme
            </Button>
            <Button onClick={() => setTheme('light')} variant="outline">
              Light
            </Button>
            <Button onClick={() => setTheme('dark')} variant="outline">
              Dark
            </Button>
            <Button onClick={() => setTheme('system')} variant="outline">
              System
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ThemeProviderExample() {
  return (
    <ThemeProvider>
      <ThemeExample />
    </ThemeProvider>
  );
}