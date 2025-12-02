"use client";

import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import experienceData from "../../../../data/experience.json";

const Timeline = () => {
    return (
        <div className="relative space-y-12 md:space-y-24 py-12">
            {experienceData.map((experience: any, index: number) => (
                <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
        </div>
    );
};

export default Timeline;
