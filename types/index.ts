

export interface IUserData {
  user: {
    clerkId: string;
    username: string;
    email: string;
    image_url: string;
  }

}


export interface ICreateUser {
  id: string;
  username: string;
  email: string;
  image_url: string;
}

export interface IUpdateUser {
  clerkId: string;
  fullName: string;
  state: string;
  userRole: string;
  lga: string;
  gender: string;
  dateOfBirth: string;
  onboarded: boolean;
  profilePicture: string;
}

export interface ICreateReport {
  userId: string;
  state: string;
  issueType: string;
  reportedComplain: string;
}

interface User {
  _id: string;
  userRole: string;
  profilePicture: string;
  fullName: string;
  lga: string;
  state: string;
}

// Define the structure of a Report
export interface IReport {
  _id: string;
  whoCreatedTheReportId: User;
  issueType: string;
  reportedComplain: string;
  status: string;
  photos: string[];
  upvote: string[];
  commentsOnReports: string[];
  createdAt: Date;
  updatedAt: Date;
}
