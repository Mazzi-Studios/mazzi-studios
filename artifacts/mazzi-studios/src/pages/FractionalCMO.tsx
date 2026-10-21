import ServicePage from '@/pages/ServicePage';
import { servicePages } from '@/data/services';

const page = servicePages.find((p) => p.route === '/fractional-cmo')!;

export default function FractionalCMO() {
  return <ServicePage page={page} />;
}
