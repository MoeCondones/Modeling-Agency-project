import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { elementVariants } from '../../animations/pageTransitions';

const AboutSection = styled.section`
  padding: 4rem 0;
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionTitle = styled(motion.h2)`
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 2px;
    background-color: var(--accent);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  &.reversed {
    grid-template-columns: 1fr 1fr;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

const TextContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Paragraph = styled(motion.p)`
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: var(--text-primary);
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &.tall {
    height: 500px;
  }
`;

const TeamSection = styled.div`
  margin-top: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled(motion.div)`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  margin-bottom: 0.5rem;
`;

const MemberTitle = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1rem;
`;

const MemberBio = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
`;

const About = () => {
  const [ref1, isVisible1] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [ref2, isVisible2] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [ref3, isVisible3] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [ref4, isVisible4] = useScrollAnimation({
    threshold: 0.1,
    triggerOnce: true
  });
  
  return (
    <>
      <AboutSection id="about-section">
        <AboutContainer>
          <SectionTitle 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Elite Models
          </SectionTitle>
          
          <ContentGrid ref={ref1}>
            <TextContent
              variants={elementVariants}
              initial="initial"
              animate={isVisible1 ? "animate" : "initial"}
            >
              <Paragraph>
                Founded in 2005, Elite Models has established itself as one of the premier modeling agencies worldwide.
                We represent exceptional talent across all categories and provide them with opportunities to work with
                leading brands, photographers, and designers.
              </Paragraph>
              <Paragraph>
                Our agency is built on the principles of professionalism, integrity, and innovation. We believe in
                nurturing our models' careers with personalized guidance and strategic planning, ensuring they reach
                their full potential in the industry.
              </Paragraph>
              <Paragraph>
                What sets us apart is our commitment to diversity and inclusivity. We celebrate unique beauty in all
                its forms and are constantly seeking new faces that challenge conventional standards.
              </Paragraph>
            </TextContent>
            <ImageContainer
              variants={elementVariants}
              initial="initial"
              animate={isVisible1 ? "animate" : "initial"}
            >
              <img src="/images/about/agency.jpg" alt="Elite Models Agency" />
            </ImageContainer>
          </ContentGrid>
          
          <ContentGrid className="reversed" ref={ref2}>
            <ImageContainer
              variants={elementVariants}
              initial="initial"
              animate={isVisible2 ? "animate" : "initial"}
              className="tall"
            >
              <img src="/images/about/fashion-show.jpg" alt="Fashion Show" />
            </ImageContainer>
            <TextContent
              variants={elementVariants}
              initial="initial"
              animate={isVisible2 ? "animate" : "initial"}
            >
              <SectionTitle>Our Approach</SectionTitle>
              <Paragraph>
                At Elite Models, we take a holistic approach to talent management. Beyond booking jobs, we focus on
                building sustainable careers. Our team of experienced agents provides comprehensive support including
                portfolio development, casting preparation, and media training.
              </Paragraph>
              <Paragraph>
                We maintain strong relationships with industry professionals across fashion, advertising, and entertainment,
                giving our models access to diverse opportunities worldwide. From high fashion editorials to commercial
                campaigns, we connect our talent with projects that align with their unique strengths and career goals.
              </Paragraph>
              <Paragraph>
                Our reputation for professionalism and quality has made us the agency of choice for major clients who
                return to us season after season, knowing they can rely on our roster of exceptional talent.
              </Paragraph>
            </TextContent>
          </ContentGrid>
          
          <TeamSection ref={ref3}>
            <SectionTitle
              variants={elementVariants}
              initial="initial"
              animate={isVisible3 ? "animate" : "initial"}
            >
              Meet Our Team
            </SectionTitle>
            <Paragraph
              variants={elementVariants}
              initial="initial"
              animate={isVisible3 ? "animate" : "initial"}
            >
              Our dedicated team of professionals works tirelessly to support our models and ensure the success
              of every project. With decades of combined experience in the modeling industry, our agents and staff
              provide expert guidance and personalized attention to both our talent and clients.
            </Paragraph>
            
            <TeamGrid ref={ref4}>
              {teamMembers.map((member, index) => (
                <TeamMember
                  key={index}
                  variants={elementVariants}
                  initial="initial"
                  animate={isVisible4 ? "animate" : "initial"}
                  transition={{ delay: index * 0.1 }}
                >
                  <MemberImage>
                    <img src={member.image} alt={member.name} />
                  </MemberImage>
                  <MemberName>{member.name}</MemberName>
                  <MemberTitle>{member.title}</MemberTitle>
                  <MemberBio>{member.bio}</MemberBio>
                </TeamMember>
              ))}
            </TeamGrid>
          </TeamSection>
        </AboutContainer>
      </AboutSection>
    </>
  );
};

// Team member data
const teamMembers = [
  {
    name: 'Sarah Johnson',
    title: 'Founder & CEO',
    bio: 'Former model with 15 years of industry experience. Sarah founded Elite Models with a vision to create an agency that treats models with respect and integrity.',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'David Chen',
    title: 'Creative Director',
    bio: 'Award-winning photographer turned creative director. David has an exceptional eye for talent and helps shape the visual identity of our agency.',
    image: '/images/team/david.jpg'
  },
  {
    name: 'Amara Osei',
    title: 'Head of Scouting',
    bio: 'With a global perspective and keen eye for unique beauty, Amara travels the world discovering the next generation of modeling talent.',
    image: '/images/team/amara.jpg'
  },
  {
    name: 'Marcus Ramirez',
    title: 'Senior Agent',
    bio: 'Former marketing executive for major fashion brands, Marcus brings industry insights and strong client relationships to our agency.',
    image: '/images/team/marcus.jpg'
  }
];

export default About; 