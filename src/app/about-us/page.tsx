import AboutSection from "@/components/home-page/AboutSection"
import CoverageSection from "@/components/home-page/CoverageSection"

const page = () => {
  return (
    <>
    <AboutSection headingLevel={1} preloadImage />
    <CoverageSection />
    </>
  )
}

export default page