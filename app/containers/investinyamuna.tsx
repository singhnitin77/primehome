'use client'
import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Invest = () => {
  const points = [
    {
      title: "Excellent Connectivity & Strategic Location",
      content:
        "The Yamuna Expressway, spanning over 165 km, offers seamless connectivity between Delhi, Noida, and Agra.It reduces travel time significantly, making it convenient for daily commutes, business, and leisure trips.Additionally, the upcoming Jewar International Airport nearby will further boost accessibility and increase the area’s attractiveness for investment."
    },
    {
      title: "Robust Infrastructure Development",
      content:
        "The region boasts well - planned infrastructure, including high - quality roads, residential projects, commercial spaces, educational institutions, and healthcare facilities.These developments enhance livability and make the Yamuna Expressway a sought - after location for both investors and homebuyers."
    },
    {
      title: "Promising Real Estate Opportunities",
      content:
        "With a wide range of housing options—ranging from affordable apartments to luxury villas—the Yamuna Expressway offers significant potential for real estate appreciation.The growing demand and upcoming projects in the region ensure long - term value, making it a lucrative investment destination."
    },
    {
      title: "Growing Industrial & Economic Hub",
      content: "The area is emerging as a key industrial and economic zone, with close proximity to the Delhi - Mumbai Industrial Corridor(DMIC) and several industrial parks.It offers businesses excellent connectivity, making it ideal for setting up manufacturing units, warehouses, and logistics hubs, leading to job creation and economic growth."
    },
    {
      title: "Proximity to Educational and Healthcare Facilities",
      content:
        "The region is home to renowned educational institutions and world - class healthcare facilities, providing residents with access to top - tier services.This enhances the overall quality of life and makes the Yamuna Expressway appealing for families and students alike."
    },
    {
      title: "Tourism and Entertainment Potential",
      content:
        "Being close to major tourist attractions like the Taj Mahal, Agra Fort, and Mathura, the area is a growing hotspot for tourism.This creates opportunities for investment in hospitality, retail, and entertainment sectors, driven by steady year - round tourist traffic."
    },
    {
      title: "Government Initiatives & Policy Support",
      content:
        "Supportive government policies, including special economic zones(SEZs) and incentives for industrial development, make the Yamuna Expressway an investor - friendly zone.Government - backed affordable housing schemes and favorable lending rates further boost the real estate market."
    },
    {
      title: "Future Development Prospects",
      content: "The region has strong growth potential with ongoing projects like smart city initiatives, logistics parks, and mixed - use developments.These upcoming projects are expected to drive significant economic activity and enhance the region’s investment appeal."
    }
  ];

  return (
    <div className="px-[25px] md:px-[300px] py-[30px] md:py-[60px]">
      <h2 className="text-[30px] md:text-[40px] lg:text-[48px] leading-[1.1] md:leading-[1.25] font-extrabold text-black font-bold text-center mb-8">
        Why to Invest in Yamuna
      </h2>
      {points.map((point, index) => (
        <Accordion
          sx={{
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: '8px',
            '&::before': {
              opacity: 0,
            },
          }}
          key={index} className="mb-4">
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              sx={{
                color: '#1B1D21',
                fontSize: '16px',
                fontWeight: '500',
              }}
              className="font-Inter">{point.title}</Typography>
          </AccordionSummary>
          <Divider sx={{ borderColor: 'grey.300' }} />
          <AccordionDetails
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '500',
              }}
            >{point.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Invest;
