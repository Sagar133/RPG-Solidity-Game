export default interface ICharacter {
	name: string,
	description: string,
	walletAddress: string,
	email: string,
	image: string,
	isStory:string,
	status:Status,
	votes: number,
	createdAt: string //iso date
}

export enum Status {
	APPROVED="appproved",
	INGAME="inGame",
	REJECTED="rejected",
	NOTAPPROVED="notApproved"
}