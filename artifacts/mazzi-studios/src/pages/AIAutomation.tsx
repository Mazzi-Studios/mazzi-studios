import ServicePage from '@/pages/ServicePage';
import { servicePages } from '@/data/services';

const page = servicePages.find((p) => p.route === '/ai-automation')!;

export default function AIAutomation() {
  return <ServicePage page={page} />;
}
