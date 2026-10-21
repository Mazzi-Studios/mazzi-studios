import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animations/FadeUp';

const base = import.meta.env.BASE_URL;

const brands = [
  { name: 'START Center for Cancer Research', file: 'start-center-for-cancer-research.png', stacked: true },
  { name: 'Precision Clinical Research', file: 'precision-clinical-research.png' },
  { name: 'Carevive', file: 'carevive.png' },
  { name: 'Purpose Life Sciences', file: 'purpose-life-sciences.svg' },
  { name: 'Canopy Cancer Collective', file: 'canopy-cancer-collective.png', stacked: true },
  { name: 'Contours', file: 'contours.png' },
  { name: 'Cingo', file: 'cingo.png', stacked: true },
  { name: 'Atrium Wallcoverings', file: 'atrium-wallcoverings.png' },
  { name: '3D MedSupply & Manufacturing', file: '3d-medsupply.png' },
  { name: 'Infinity Medical Education', file: 'infinity-medical-education.png', stacked: true },
  { name: 'ToneyBands', file: 'toneybands.png', stacked: true },
];

export function BrandsWorkedWith() {
  return (
    <section className="pb-20 px-4" data-brand-logos>
      <div className="container mx-auto max-w-6xl">
        <FadeUp>
          <h2 className="font-['Bebas_Neue'] text-4xl mb-4" style={{ color: '#F5F0EB', letterSpacing: '0.04em' }}>
            Brands We've Worked With
          </h2>
          <div className="w-12 mb-8" style={{ height: '2px', background: '#EB2571' }} />
        </FadeUp>
        <StaggerContainer className="flex flex-wrap justify-center gap-4">
          {brands.map((b) => (
            <StaggerItem key={b.file} className="w-[calc(50%_-_0.5rem)] lg:w-[calc(25%_-_0.75rem)]">
              <div
                className="group flex items-center justify-center h-24 md:h-28 px-4"
                style={{ background: '#F5F0EB', border: '1px solid rgba(235,37,113,0.12)' }}
                data-testid={`logo-brand-${b.file.replace(/\.(png|svg)$/, '')}`}
              >
                <img
                  src={`${base}brand-assets/clients/${b.file}`}
                  alt={`${b.name} logo`}
                  loading="lazy"
                  className={`block w-auto h-auto ${b.stacked ? 'max-h-[72px]' : 'max-h-[56px]'} max-w-[75%] object-contain [filter:grayscale(100%)_contrast(1.15)] opacity-90 transition duration-300 group-hover:[filter:none] group-hover:opacity-100`}
                />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
