<script lang="ts">
  import Section from '$lib/components/layout/Section.svelte';
  import Container from '$lib/components/layout/Container.svelte';
  import Heading from '$lib/components/ui/Heading.svelte';
  import Text from '$lib/components/ui/Text.svelte';
  import Button from '$lib/components/ui/Button.svelte';
  
  import Reveal from '$lib/components/motion/Reveal.svelte';
  import Stagger from '$lib/components/motion/Stagger.svelte';

  import ResumeSection from '$lib/components/resume/ResumeSection.svelte';
  import ResumeItem from '$lib/components/resume/ResumeItem.svelte';
  import SkillGroup from '$lib/components/resume/SkillGroup.svelte';

  // Import raw data configuration to keep UI logic clean
  import { RESUME_DATA } from '$lib/config/resume';
</script>

<svelte:head>
  <title>Resume | {RESUME_DATA.personalInformation.name}</title>
  <meta name="description" content="Professional resume and mechanical engineering experience of JIYON P J." />
</svelte:head>

<!-- Floating Download Action -->
<div class="fixed bottom-8 right-8 z-50">
  <Button 
    label="Download PDF" 
    href="/Jiyon Resume.pdf" 
    variant="primary" 
    class="shadow-lg shadow-[var(--color-accent)]/20 shadow-xl border border-[var(--color-accent)]/50 backdrop-blur-md" 
  />
</div>

<Section class="pt-32 pb-24 min-h-screen relative">
  <!-- Blueprint Background -->
  <div class="fixed inset-0 bg-[linear-gradient(to_right,#88888812_1px,transparent_1px),linear-gradient(to_bottom,#88888812_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>

  <Container class="relative z-10 max-w-5xl">
    <!-- Header Block -->
    <header class="mb-24 space-y-8 border-b border-[var(--color-base-muted)]/20 pb-12">
      <Reveal animation="fade-in">
        <Heading level={1} text={RESUME_DATA.personalInformation.name} class="text-5xl lg:text-7xl mb-4" />
        <h2 class="text-xl lg:text-3xl font-light text-[var(--color-accent)] mb-8">
          {RESUME_DATA.professionalTitle.primary} — <span class="opacity-70 text-[var(--color-base-muted)]">{RESUME_DATA.professionalTitle.specialization}</span>
        </h2>
        
        <div class="flex flex-wrap gap-x-8 gap-y-4 text-sm font-mono tracking-wider text-[var(--color-base-muted)] opacity-80 border-l border-[var(--color-accent)] pl-6">
          <span>{RESUME_DATA.personalInformation.location}</span>
          <span class="opacity-30">|</span>
          <a href={"mailto:" + RESUME_DATA.personalInformation.email} class="hover:text-[var(--color-accent)] transition-colors">{RESUME_DATA.personalInformation.email}</a>
          <span class="opacity-30">|</span>
          <span>{RESUME_DATA.personalInformation.phone}</span>
          <div class="basis-full h-0"></div>
          <a href={"https://" + RESUME_DATA.personalInformation.links.linkedin} target="_blank" class="hover:text-[var(--color-accent)] transition-colors">{RESUME_DATA.personalInformation.links.linkedin}</a>
          <a href={"https://" + RESUME_DATA.personalInformation.links.github} target="_blank" class="hover:text-[var(--color-accent)] transition-colors">{RESUME_DATA.personalInformation.links.github}</a>
        </div>
      </Reveal>
    </header>

    <div class="space-y-16 lg:space-y-24">
      
      <!-- Profile Summary -->
      <Reveal>
        <ResumeSection title="Profile">
          <Text text={RESUME_DATA.profileSummary} class="text-base lg:text-lg leading-relaxed font-light opacity-90" />
        </ResumeSection>
      </Reveal>

      <!-- Core Capabilities -->
      <Reveal>
        <ResumeSection title="Capabilities">
          <Stagger stagger={0.1} class="grid grid-cols-1 md:grid-cols-2 gap-8">
            {#each RESUME_DATA.coreCapabilities as group}
              <SkillGroup category={group.category} skills={group.skills} />
            {/each}
          </Stagger>
        </ResumeSection>
      </Reveal>

      <!-- Professional Experience -->
      <Reveal>
        <ResumeSection title="Experience">
          <Stagger stagger={0.2} class="space-y-12">
            {#each RESUME_DATA.experience as exp}
              <ResumeItem 
                title={exp.title}
                organization={exp.organization}
                duration={exp.duration}
                details={exp.details}
              />
            {/each}
          </Stagger>
        </ResumeSection>
      </Reveal>

      <!-- Education -->
      <Reveal>
        <ResumeSection title="Education">
          <Stagger stagger={0.2} class="space-y-12">
            {#each RESUME_DATA.education as edu}
              <ResumeItem 
                title={edu.title}
                organization={edu.organization}
                duration={edu.duration}
                metrics={edu.metrics}
                details={edu.details}
              />
            {/each}
          </Stagger>
        </ResumeSection>
      </Reveal>

      <!-- Selected Projects -->
      <Reveal>
        <ResumeSection title="Projects">
          <Stagger stagger={0.2} class="space-y-12">
            {#each RESUME_DATA.projects as project}
              <ResumeItem 
                title={project.title}
                link={project.link}
                details={project.details}
              />
            {/each}
          </Stagger>
        </ResumeSection>
      </Reveal>

      <!-- Additional Information -->
      <Reveal>
        <ResumeSection title="Information">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ResumeItem title="Certifications" details={RESUME_DATA.certifications} />
            <ResumeItem 
              title="Details" 
              details={[
                `Languages: ${RESUME_DATA.additional.languages}`,
                `Availability: ${RESUME_DATA.additional.availability}`,
                `Relocation: ${RESUME_DATA.additional.relocation}`,
                `Driving License: ${RESUME_DATA.additional.driving_license}`
              ]} 
            />
          </div>
        </ResumeSection>
      </Reveal>
      
    </div>
  </Container>
</Section>
