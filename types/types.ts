export interface GetJobResults {
    info: Info,
    data: Job[],
}

export interface Info {
    count: number,
    pages: number,
    next: string,
    prev: null
}

export interface Job {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: Benefit[];
    location: Location;
    pictures: string[];
    createdAt: Date;
    updatedAt: Date;
    description: string;
    employment_type: EmploymentType[];
}

export enum Benefit {
    FlexibleHours = "Flexible hours",
    PayVocations = "Pay vocations",
    Relocation = "Relocation",
}

export enum EmploymentType {
    FullTime = "Full time",
    PartTime = "Part time",
    Temporary = "Temporary",
}

export interface Location {
    location: {
        lat: number;
        long: number;
    }

}

export interface CustomMarkerProps {
    center: {
        lat: number;
        lng: number;
    };
}