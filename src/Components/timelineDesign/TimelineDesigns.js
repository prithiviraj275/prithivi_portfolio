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
import WorkIcon from "@mui/icons-material/Work";
import RepeatIcon from "@mui/icons-material/Repeat";
import ExperienceCard from "../Cards/ExperienceCard";

const LeftAlignedTimelineDesign = ({ experiences }) => {
  return (
    <div>
      {" "}
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {experiences.map((item, index) => (
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
              {index !== experiences.length - 1 && (
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
                  <WorkIcon
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
              <ExperienceCard item={item} key={item.id} />
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
              <RepeatIcon
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

const AlternateTimelineDesigns = ({ experiences }) => {
  return (
    <Timeline position="alternate">
      {experiences.map((item, index) => (
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
            {index !== experiences.length - 1 && (
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
                <WorkIcon
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
            <ExperienceCard item={item} key={item.id} />
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
            <RepeatIcon
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
