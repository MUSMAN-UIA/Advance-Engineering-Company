import Hero from '../components/Hero/Hero';
import AboutPreview from '../components/AboutPreview/AboutPreview';
import ServicesPreview from '../components/ServicesPreview/ServicesPreview';
import ProjectsPreview from '../components/ProjectsPreview/ProjectsPreview';
import MajorEquipment from '../components/MajorEquipment/MajorEquipment';
// import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

export default function Home() {
  return (
    <>
      <Hero />

      <AboutPreview />

      <ServicesPreview />

      <ProjectsPreview />

      <MajorEquipment />

      {/* <WhyChooseUs /> */}
    </>
  );
}
