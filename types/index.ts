export interface IReportedIssue {
  profileImage: string;
  fullName: string;
  dateOfPosting: string;
  issue: string;
  reportImage: string;
  state: string;
  reportDesc: string;
  reportNumberOfComment: number;
  reportUpvote: number;
}

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
