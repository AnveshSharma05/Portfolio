// The three groups of projects on the home page, in the order they appear.
// Each project file picks one with its "section" field.
import { site } from './site';

export type SectionId = 'projects' | 'in-progress' | 'work';

export const sections: { id: SectionId; heading: string; description: string; label: string }[] = [
  { id: 'projects', heading: site.projects_heading, description: site.projects_description, label: '' },
  { id: 'in-progress', heading: site.in_progress_heading, description: site.in_progress_description, label: 'In progress' },
  { id: 'work', heading: site.work_heading, description: site.work_description, label: 'Work experience' },
];

export const sectionIds = sections.map((s) => s.id);
