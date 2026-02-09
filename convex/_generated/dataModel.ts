export type Id<TableName extends string> = string & { __tableName: TableName };

export type GuideItem = {
	_id: Id<"guideItems">;
	_creationTime: number;
	name: string;
	category: "Restaurant" | "Hotel" | "Bar";
	cuisine: string;
	city: string;
	country: string;
	region: string;
	location: string;
	coverImage: string;
	rating: number;
	priceLevel: number;
	description: string;
	scores: {
		label: string;
		score: string;
	}[];
	totalScore: string;
	sortOrder: number;
	published: boolean;
	createdAt: number;
	updatedAt: number;
};

export type DataModel = {
	guideItems: GuideItem;
};

export type TableNames = keyof DataModel;

export type Doc<TableName extends TableNames> = DataModel[TableName];
