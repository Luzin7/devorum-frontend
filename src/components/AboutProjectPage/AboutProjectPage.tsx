import { type ReactElement } from 'react';

import { InvolveSection } from './components/InvolveSection';
import { MissionSection } from './components/MissionSection';
import { TeamSection } from './components/TeamSection';
import { ObjectiveSection } from './components/ObjectiveSection';

export function AboutProjectPage(): ReactElement {
  return (
    <>
      <MissionSection />
      <ObjectiveSection />
      <TeamSection />
      <InvolveSection />
    </>
  );
}
