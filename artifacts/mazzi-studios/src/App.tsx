import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter, Redirect } from 'wouter';
import portfolioRedirects from '@/data/portfolioRedirects.json';
import { AppLayout } from '@/components/layout/AppLayout';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import FractionalCMO from '@/pages/FractionalCMO';
import AIAutomation from '@/pages/AIAutomation';
import ServicePage from '@/pages/ServicePage';
import { servicePages } from '@/data/services';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Work from '@/pages/Work';
import CaseStudy from '@/pages/CaseStudy';
import Playbook from '@/pages/Playbook';
import ThankYou from '@/pages/ThankYou';
import Tools from '@/pages/Tools';
import MarketingBudgetCalculator from '@/pages/MarketingBudgetCalculator';
import UtmBuilder from '@/pages/UtmBuilder';
import NotFound from '@/pages/NotFound';

function Router() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/fractional-cmo" component={FractionalCMO} />
        <Route path="/ai-automation" component={AIAutomation} />
        {servicePages.slice(2).map((page) => (
          <Route key={page.route} path={page.route}>
            <ServicePage page={page} />
          </Route>
        ))}
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        {Object.entries(portfolioRedirects).map(([from, to]) => (
          <Route key={from} path={from}>
            <Redirect to={to} replace />
          </Route>
        ))}
        <Route path="/work" component={Work} />
        <Route path="/work/:slug" component={CaseStudy} />
        <Route path="/playbook" component={Playbook} />
        <Route path="/thank-you" component={ThankYou} />
        <Route path="/tools" component={Tools} />
        <Route path="/marketing-budget-calculator" component={MarketingBudgetCalculator} />
        <Route path="/utm-builder" component={UtmBuilder} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
}

interface AppProps {
  initialPath?: string;
}

function App({ initialPath }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter
          base={import.meta.env.BASE_URL.replace(/\/$/, '')}
          ssrPath={initialPath}
        >
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;