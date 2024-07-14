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
