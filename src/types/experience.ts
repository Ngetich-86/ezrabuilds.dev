export interface Experience {
    id: string;
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    technologies: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    tech: string[];
    github: string;
    demo: string;
    image: string;
}

export interface ResumeData {
    name: string;
    title: string;
    resumeUrl: string;
}
