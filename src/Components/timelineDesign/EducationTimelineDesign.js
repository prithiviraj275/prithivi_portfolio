import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import EducationCard from "../Cards/EducationCard";

const LeftAlignedTimelineDesign = ({ education }) => {
  
  return (
    <div>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {education.map((item, index) => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="black"
              fontWeight="700"
              fontSize="20px"
              fontFamily="cairo"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {index !== education.length - 1 && (
                <TimelineConnector style={{ background: "#fff" }} />
              )}
              <TimelineDot
                style={{
                  background: "#fff",
                  width: "60px",
                  height: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {item.img === "" ? (
                  <SchoolIcon
                    style={{ color: "black", width: "30px", height: "30px" }}
                  />
                ) : (
                  <img
                    src={item.img}
                    alt="company logo"
                    className="rounded-full"
                  />
                )}
              </TimelineDot>
              <TimelineConnector style={{ background: "#fff" }} />
            </TimelineSeparator>
            <TimelineContent
              sx={{
                py: "12px",
                px: 2,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <EducationCard item={item} key={item.id} />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="black"
            fontWeight="700"
            fontSize="20px"
            fontFamily="cairo"
          ></TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector style={{ background: "#fff" }} />
            <TimelineDot
              style={{
                background: "#fff",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <StarIcon
                style={{ color: "black", width: "30px", height: "30px" }}
              />
            </TimelineDot>
            <TimelineConnector style={{ background: "#fff" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: "12px",
              px: 2,
              display: "flex",
              justifyContent: "center",
            }}
          ></TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

const AlternateTimelineDesigns = ({ education }) => {
  return (
    <Timeline position="alternate">
      {education.map((item, index) => (
        <TimelineItem key={item.id}>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="black"
            fontWeight="700"
            fontSize="20px"
            fontFamily="cairo"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            {index !== education.length - 1 && (
              <TimelineConnector style={{ background: "#fff" }} />
            )}
            <TimelineDot
              style={{
                background: "#fff",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.img === "" ? (
                <SchoolIcon
                  style={{ color: "black", width: "30px", height: "30px" }}
                />
              ) : (
                <img
                  src={item.img}
                  alt="company logo"
                  className="rounded-full"
                />
              )}
            </TimelineDot>
            <TimelineConnector style={{ background: "#fff" }} />
          </TimelineSeparator>
          <TimelineContent
            sx={{
              py: "12px",
              px: 2,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EducationCard item={item} key={item.id} />
          </TimelineContent>
        </TimelineItem>
      ))}
      {/* Add a TimelineDot at the end */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector style={{ background: "#fff" }} />
          <TimelineDot
            style={{
              background: "#fff",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StarIcon
              style={{ color: "black", width: "30px", height: "30px" }}
            />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export { LeftAlignedTimelineDesign, AlternateTimelineDesigns };
