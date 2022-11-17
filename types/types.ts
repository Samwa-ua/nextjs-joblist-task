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

export interface Jobs {
    jobsList: Job[]
};

export interface Job {
    id: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    salary: string;
    address: string;
    benefits: string[];
    location: {
        lat: number;
        long: number;
    };
    pictures: string[];
    createdAt: string;
    updatedAt: string;
    description: string;
    employment_type: string[];
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